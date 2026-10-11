import { events, type DharmaEvent } from '~/data/events'

const WEEK = ['日', '一', '二', '三', '四', '五', '六']

/** 'YYYY-MM-DD' → Date（以當地日期解讀，避免時區位移） */
function parse(d: string) {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(y, m - 1, day)
}

/** 今天的日期字串（台灣時間），'YYYY-MM-DD' */
function todayTaipei() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei' }).format(new Date())
}

export interface EventView extends DharmaEvent {
  /** 首頁卡片用的大字日期，例如 '10/24–25' */
  shortDate: string
  /** 完整日期，例如 '2026/10/24（六）– 10/25（日）' */
  longDate: string
  /** 星期，例如 '六・日' */
  weekdays: string
  month: string
  mapUrl?: string
}

function toView(e: DharmaEvent): EventView {
  const s = parse(e.start)
  const en = e.end ? parse(e.end) : null
  const md = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`
  const wd = (d: Date) => WEEK[d.getDay()]
  const sameMonth = en && en.getMonth() === s.getMonth()

  const shortDate = en ? `${md(s)}–${sameMonth ? en.getDate() : md(en)}` : md(s)
  const longDate = en
    ? `${s.getFullYear()}/${md(s)}（${wd(s)}）– ${md(en)}（${wd(en)}）`
    : `${s.getFullYear()}/${md(s)}（${wd(s)}）`
  const weekdays = en ? `${wd(s)}・${wd(en)}` : wd(s)
  const month = s.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const mapUrl = e.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.address)}`
    : undefined

  return { ...e, shortDate, longDate, weekdays, month, mapUrl }
}

/**
 * 近期法會：依日期排序，自動排除已結束的活動。
 * 網站是預先產生的靜態頁，build 當下會先篩一次；
 * 訪客打開網頁時再用「今天」重新篩一次，所以就算很久沒重新部署，過期活動也不會出現。
 *
 * 用 useState：瀏覽器接手頁面（hydration）時先沿用 build 當天的日期，
 * 畫面才會跟預先產生的 HTML 一致；接手完成後（onMounted）才換成今天。
 */
export function useUpcomingEvents() {
  const today = useState('today', () => todayTaipei())
  onMounted(() => {
    today.value = todayTaipei()
  })

  const upcoming = computed(() =>
    [...events]
      .filter((e) => (e.end ?? e.start) >= today.value)
      .sort((a, b) => a.start.localeCompare(b.start))
      .map(toView)
  )

  return { upcoming }
}
