/**
 * ===== 修學園地：講記目錄 =====
 * 講記內容目前仍放在 Google 協作平台。
 * STUDY_BASE 是講記網站的網址；網域搬家後，只要改這一行，所有講記連結就會一起更新。
 *
 * 搬家計畫：www.miaofaleyuan.org.tw → 這個新網站
 *          study.miaofaleyuan.org.tw → 原本的 Google 協作平台（講記）
 * 在 DNS 改好之前，先暫時指向目前的網址。
 */
export const STUDY_BASE = 'https://www.miaofaleyuan.org.tw'

/** 產生講記頁的完整網址 */
export const studyUrl = (path: string) => `${STUDY_BASE}/${path}`

export interface Topic {
  label: string
  path: string
}
export interface TopicGroup {
  label: string
  path?: string
  topics: Topic[]
}
export interface Course {
  no?: string
  title: string
  desc: string
  path: string
  groups?: TopicGroup[]
}

const P = '聞思園地-依修學次第'

/** 宗義建立：各宗共用的章節 */
const tenetTopics = (school: string, names: string[]): Topic[] =>
  names.map((n) => ({ label: n, path: `${P}/宗義建立講記/${school}/${n}` }))

const STD = ['性相', '分類', '釋名', '境之主張', '有境之主張', '無我之主張', '地道之主張']

export const studyPath: Course[] = [
  {
    no: '01',
    title: '《攝類學》',
    desc: '辯經的邏輯基礎',
    path: `${P}/攝類學`,
    groups: [
      {
        label: '中理路',
        path: `${P}/攝類學/中理路`,
        topics: [
          '01相違相屬',
          '02有證無證',
          '03建立附帶判別',
          '04大性相大名相',
          '05大因果',
          '06同品遍異品遍',
          '07破除駁斥成立駁斥'
        ].map((t) => ({ label: t.replace(/^(\d+)/, '$1 '), path: `${P}/攝類學/中理路/${t}` }))
      },
      { label: '大理路', path: `${P}/攝類學/大理路`, topics: [] }
    ]
  },
  { no: '02', title: '《心類學》', desc: '心識的種類與運作', path: `${P}/心類學` },
  {
    no: '03',
    title: '《宗義建立》講記',
    desc: '四部宗義對境、有境、無我、地道的主張',
    path: `${P}/宗義建立講記`,
    groups: [
      { label: '01 毗婆沙宗', path: `${P}/宗義建立講記/01-毗婆沙宗`, topics: tenetTopics('01-毗婆沙宗', STD) },
      { label: '02 經部宗', path: `${P}/宗義建立講記/02-經部宗`, topics: tenetTopics('02-經部宗', STD) },
      { label: '03 唯識宗', path: `${P}/宗義建立講記/03-唯識宗`, topics: tenetTopics('03-唯識宗', STD) },
      { label: '04 自續派', path: `${P}/宗義建立講記/04-自續派`, topics: tenetTopics('04-自續派', STD) },
      {
        label: '05 應成派',
        path: `${P}/宗義建立講記/05-應成派`,
        topics: tenetTopics('05-應成派', ['性相', '釋名', '事例', '境之主張', '有境之主張', '地道之主張', '無我之主張'])
      }
    ]
  },
  { no: '04', title: '《地道建立》', desc: '修道的階位與證量', path: `${P}/地道建立` },
  { no: '05', title: '《現觀明義釋》', desc: '般若學的核心論典', path: `${P}/現觀明義釋` }
]

export const classics: Course[] = [
  {
    title: '《辨了不了義善說藏論》',
    desc: '線上課程進行中',
    path: '經典閱讀/辨了不了義善說藏論',
    groups: [
      {
        label: '班別',
        topics: [
          { label: '週一班', path: '經典閱讀/辨了不了義善說藏論/週一辨了不了義' },
          { label: '週四班', path: '經典閱讀/辨了不了義善說藏論/週四辨了不了義' }
        ]
      }
    ]
  },
  { title: '《般若心經略釋》', desc: '', path: '經典閱讀/般若心經略釋' },
  { title: '《能斷金剛經》講記', desc: '', path: '經典閱讀/能斷金剛經講記' },
  { title: '《菩提道次第略頌》', desc: '', path: '經典閱讀/菩提道次第略頌' },
  { title: '《親友書》', desc: '', path: '經典閱讀/親友書' },
  { title: '《入菩薩行論》', desc: '', path: '經典閱讀/入菩薩行論' }
]

export const practices: Topic[] = [
  { label: '供水', path: '聞思修持/供水' },
  { label: '祈願文', path: '聞思修持/祈願文' },
  { label: '金剛薩埵法會', path: '聞思修持/金剛薩埵法會' }
]
