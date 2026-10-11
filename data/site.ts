/**
 * ===== 全站共用資料 =====
 * 聯絡方式、社群連結、線上教室，改這裡就會同步到所有頁面。
 */

export const site = {
  name: '妙法樂苑',
  tibetan: 'ལེགས་བཤད་དགའ་ཚལ།',
  org: '台灣妙法樂苑佛學會',
  address: '100 台北市中正區杭州南路一段 153-2 號 4 樓',
  phone: '0919-102-675',
  phoneTel: '+886919102675',
  email: 'miaofa2019@gmail.com',

  /** 線上教室 */
  zoom: {
    id: '975 188 1169',
    password: '988168',
    url: 'https://zoom.us/j/9751881169',
    /** 目前進行中的線上課程 */
    current: '週一、週四《辨了不了義善說藏論》'
  },

  social: [
    { label: 'LINE 群組', url: 'https://line.me/ti/g2/BujzAvqF14LPMtUGUF9qyhi8nY2_96TY1z3j7A' },
    { label: 'WhatsApp', url: 'https://chat.whatsapp.com/F5K3WdaAOiGDTKQfsIVBoP' },
    { label: 'YouTube', url: 'https://www.youtube.com/@zeekgyab' },
    { label: 'Facebook', url: 'https://facebook.com/zeekgyab.rinpoche' }
  ],

  /** 授課資料：Google 雲端硬碟資料夾（資料夾需設為「知道連結的任何人都能檢視」） */
  teachings: {
    title: '熹嘉仁波切授課',
    folderId: '1gS-eZXuWSnYbP0KXgtlOgcJccWNoxV4N'
  },

  /** 護持帳戶 */
  bank: {
    name: '合作金庫銀行',
    code: '006',
    branch: '礁溪分行',
    account: '5425-717-857428',
    holder: '社團法人台灣妙法樂苑佛學會'
  },

  /** 佛學會官網 */
  officialSite: 'https://miaofa.tw/'
}
