/**
 * ===== 法會活動資料 =====
 * 新增活動：複製一整個 { ... } 區塊，改內容即可。
 * - 日期一律寫 'YYYY-MM-DD'，星期幾會自動算出來，不用自己寫（避免寫錯星期）。
 * - 活動結束日（end，沒有就用 start）過了之後，網站會自動把它從「近期法會」移除，不用手動刪。
 * - 想保留紀錄可以不刪；想清乾淨就直接刪掉該區塊。
 * - 順序不重要，網站會依日期自動排序。
 */

export type Region = '台北・新北' | '台中' | '線上' | '其他'

export interface DharmaEvent {
  /** 英數小寫、不重複，用在網址錨點，例如 'daogan-2026' */
  id: string
  /** 活動名稱 */
  title: string
  /** 一兩句話的簡介 */
  summary: string
  /** 開始日期 'YYYY-MM-DD' */
  start: string
  /** 結束日期，單日活動可省略 */
  end?: string
  /** 時間，例如 '09:30–11:30、14:00–16:30' */
  time: string
  /** 地點名稱 */
  venue: string
  /** 地址（會用來產生 Google 地圖連結），線上活動可省略 */
  address?: string
  region: Region
  /** 主辦單位，省略時不顯示 */
  organizer?: string
  /** 聯絡人與電話 */
  contact?: string
  /** 報名表單網址 */
  registerUrl?: string
  /** 額外按鈕，例如報名名單查詢 */
  extraLink?: { label: string; url: string }
  /** 注意事項，例如「僅限實體」 */
  note?: string
}

export const events: DharmaEvent[] = [
  {
    id: 'daogan-2026',
    title: '《稻稈經》口傳暨講解',
    summary: '以稻稈為喻，闡釋外緣起與內緣起，引導行者觀察因果、無常與無我，進而通達甚深緣起之理。',
    start: '2026-10-17',
    end: '2026-10-18',
    time: '09:30–11:30、14:00–16:30',
    venue: '集思台中新烏日會議中心 3F 瓦特廳',
    address: '台中市烏日區高鐵東一路 26 號',
    region: '台中',
    organizer: '台灣妙法樂苑佛學會',
    contact: '妙法樂苑 0919-102-675',
    registerUrl: 'https://forms.gle/ujHm7D86J65begnt9'
  },
  {
    id: 'lamrim-2026',
    title: '《菩提道次第廣論》口傳',
    summary: '宗喀巴大師的成佛次第地圖，從親近善知識到止觀雙運，一次完整領受清淨口傳。',
    start: '2026-10-24',
    end: '2026-10-25',
    time: '09:30–17:00',
    venue: '福泰大飯店',
    address: '新北市汐止區大同路一段 128 號',
    region: '台北・新北',
    contact: '吳師姊 0916-159-612',
    registerUrl: 'https://forms.gle/9WWcKaFaNeLGWyVx7'
  },
  {
    id: 'three-principal-2026',
    title: '《三主要道》講授',
    summary: '濃縮《廣論》精髓，宣說大乘修行的三個核心：出離心、菩提心、空正見。',
    start: '2026-11-01',
    time: '13:00–16:30',
    venue: '臺北市明覺佛學會',
    address: '台北市大同區延平北路二段 247 巷 28 號 4 樓之 1',
    region: '台北・新北',
    organizer: '臺北市明覺佛學會',
    registerUrl: 'https://forms.gle/KwAKjspYKGNmWYdX7'
  },
  {
    id: 'lojong-sunlight-2026',
    title: '《修心日光論》口傳',
    summary: '口傳僅限實體參與方能獲得傳承，不開放線上。08:30 開始報到。',
    start: '2026-11-07',
    time: '09:30–16:30',
    venue: '傳澄慈善協會',
    address: '台北市松山區南京東路五段 34 號 11 樓',
    region: '台北・新北',
    contact: '張師姊 0939-083-738',
    registerUrl: 'https://forms.gle/4rjXfRF3BX7cnSZm6',
    extraLink: {
      label: '查詢報名名單',
      url: 'https://docs.google.com/spreadsheets/d/1CITfOKW8VcEfsZrJt8949MGFGHHPFsZs1wJwTPxXsHA'
    },
    note: '僅限實體'
  },
  {
    id: 'madhyamaka-six-2026',
    title: '《中觀理聚六論》暨常用課誦口傳',
    summary: '深入龍樹菩薩的智慧法海，建立清淨正見，並於日常課誦中積聚福慧資糧。',
    start: '2026-11-14',
    end: '2026-11-15',
    time: '09:30–11:30、14:00–17:00',
    venue: '福泰大飯店',
    address: '新北市汐止區大同路一段 128 號',
    region: '台北・新北',
    organizer: '台灣妙法樂苑佛學會',
    contact: '妙法樂苑 0919-102-675',
    registerUrl: 'https://forms.gle/x2ZwLgDkCiNdaVwC8'
  }
]
