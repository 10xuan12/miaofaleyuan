# 妙法樂苑網站

Nuxt 3 靜態網站。所有內容都放在 `data/` 資料夾，**日常維護只需要改資料檔，不用碰頁面程式**。

## 快速開始

```bash
npm install
npm run dev        # 本機預覽 http://localhost:3000
npm run generate   # 產生靜態網站到 .output/public
```

## 日常維護

| 想做的事 | 改哪個檔案 |
|---|---|
| 新增／修改法會活動 | `data/events.ts` |
| 改電話、Email、地址、Zoom、社群連結 | `data/site.ts` |
| 新增講記連結 | `data/courses.ts` |
| 換仁波切照片 | 替換 `assets/images/rinpoche.jpg`（直式 4:5 最佳） |
| 換 Logo | 替換 `assets/images/logo.png`；網址列小圖示是 `public/favicon.png` |
| 改護持帳戶 | `data/site.ts` 的 `bank` |

### 新增一場法會（最常做的事）

1. 打開 `data/events.ts`
2. 複製任一個 `{ ... },` 區塊，貼在陣列裡
3. 修改內容：
   - `id`：英數小寫、不重複，例如 `'heart-sutra-2026'`
   - `start` / `end`：寫 `'YYYY-MM-DD'`，**星期幾會自動算，不用寫**
   - `region`：只能是 `'台北・新北'`、`'台中'`、`'線上'`、`'其他'`（打錯時編輯器會提示）
4. 存檔、commit、push → 網站自動更新

**過期的活動不用刪**：活動結束日一過，網站會自動從「近期法會」、首頁、公告列移除（訪客打開網頁時以台灣時間判斷，就算很久沒重新部署也不會顯示過期活動）。想清乾淨再刪就好。

首頁會自動抓：
- 最近的一場 → 首屏「下一場法會」
- 接下來 4 場 → 「近期法會」卡片
- 最近 3 場 → 最上方公告列（手機版只顯示 1 場）

## 部署（GitHub Pages，免費）

已內建自動部署（`.github/workflows/deploy.yml`）：**每次 push 到 main，網站就會自動 build 並更新**，大約 1–2 分鐘。

第一次設定：

1. 在 GitHub 建一個新 repo（例如 `miaofaleyuan`），把專案推上去
2. repo 的 **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**
3. 到 **Actions** 分頁看到綠色勾勾後，網站就在 `https://你的帳號.github.io/miaofaleyuan/`

> 部署失敗時，到 Actions 分頁點進紅色叉叉看錯誤訊息。最常見的原因是 `data/events.ts` 少了逗號或引號。

## 網域搬家計畫（之後再做）

目前 `www.miaofaleyuan.org.tw` 指向 Google 協作平台。搬家步驟：

1. **先確認誰能登入網域註冊商（DNS 管理）**，這是唯一的前置條件
2. 在 Google 協作平台把自訂網域改成 `study.miaofaleyuan.org.tw`（講記保留在那裡）
3. GitHub repo → **Settings → Pages → Custom domain** 填 `www.miaofaleyuan.org.tw`，並勾選 **Enforce HTTPS**
4. 到 DNS 管理新增一筆 CNAME：`www` → `你的帳號.github.io`
5. repo → **Settings → Secrets and variables → Actions → Variables** 新增變數 `BASE_URL`，值為 `/`（綁網域後網站在根目錄，不再是 `/miaofaleyuan/`）
6. 把 `data/courses.ts` 的 `STUDY_BASE` 改成 `https://study.miaofaleyuan.org.tw`
7. push → 網站以新網域重新部署，所有講記連結自動更新

⚠️ 第 2–4 步之間網站會短暫切換，DNS 生效可能需要數小時，建議避開法會報名高峰。

## 專案結構

```
data/          ← 內容（日常只改這裡）
  events.ts      法會活動
  site.ts        聯絡資訊、Zoom、社群
  courses.ts     修學園地講記目錄
pages/         ← 5 個頁面：首頁、法會活動、仁波切、修學園地、護持弘法
components/    ← 活動卡片、線上教室、標誌
composables/   ← 活動排序、日期與星期計算
layouts/       ← 公告列、導覽列、頁尾
assets/css/    ← 全站顏色與樣式變數
```

## 待補內容

- [x] 仁波切肖像照（目前從橫幅裁切，之後可換成更高解析度的原圖）
- [x] 正式 Logo
- [ ] 護持帳戶／方式
