# 食物卡路里分析器

一個基於 AI 技術的食物營養成分和卡路里分析網站，使用 Google Gemini API 來分析食物圖片和文字描述。

## 功能特色

- 🍽️ **圖片分析**: 上傳食物圖片，AI 自動識別並分析營養成分
- 📝 **文字分析**: 輸入食物描述，獲取詳細的營養信息
- 🎨 **現代化 UI**: 美觀的響應式設計，支持桌面和移動設備
- ⚡ **即時分析**: 快速獲取分析結果
- 📱 **拖拽上傳**: 支持拖拽圖片文件到上傳區域

## 技術棧

- **後端**: Node.js + Express
- **前端**: HTML5 + CSS3 + JavaScript (ES6+)
- **AI 服務**: Google Gemini API
- **文件處理**: Multer
- **HTTP 客戶端**: Axios

## 安裝和運行

### 前置要求

- Node.js (版本 14 或更高)
- npm 或 yarn

### 安裝步驟

1. **克隆或下載項目**
   ```bash
   # 如果使用 git
   git clone <repository-url>
   cd food-calorie-analyzer
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動服務器**
   ```bash
   # 開發模式（自動重啟）
   npm run dev
   
   # 生產模式
   npm start
   ```

4. **訪問網站**
   打開瀏覽器訪問 `http://localhost:3000`

## 使用方法

### 圖片分析
1. 點擊"圖片分析"標籤
2. 拖拽圖片到上傳區域或點擊"選擇圖片"
3. 預覽圖片後點擊"分析圖片"
4. 等待 AI 分析結果

### 文字分析
1. 點擊"文字分析"標籤
2. 在文本框中輸入食物描述（如：一個蘋果、一碗白米飯）
3. 點擊"分析文字"
4. 查看分析結果

## API 端點

### POST /api/analyze-image
分析上傳的食物圖片

**請求**: 
- Content-Type: multipart/form-data
- Body: image (圖片文件)

**響應**:
```json
{
  "analysis": "分析結果文本"
}
```

### POST /api/analyze-text
分析文字描述的食物

**請求**:
```json
{
  "foodDescription": "食物描述"
}
```

**響應**:
```json
{
  "analysis": "分析結果文本"
}
```

## 項目結構

```
food-calorie-analyzer/
├── public/
│   ├── index.html      # 主頁面
│   ├── styles.css      # 樣式文件
│   └── script.js       # 前端 JavaScript
├── server.js           # Express 服務器
├── package.json        # 項目配置
└── README.md          # 說明文檔
```

## 環境變量

項目使用您的 Gemini API key，已配置在 `server.js` 中：

```javascript
const GEMINI_API_KEY = 'AIzaSyCdGHAQIU03BL7w4bYRHbShCQ7MNo-BBrI';
```

## 開發說明

### 添加新功能
1. 在 `server.js` 中添加新的 API 端點
2. 在 `public/script.js` 中添加前端邏輯
3. 在 `public/index.html` 中添加 UI 元素
4. 在 `public/styles.css` 中添加樣式

### 自定義分析提示
修改 `server.js` 中的提示文本來改變 AI 分析的行為：

```javascript
// 圖片分析提示
text: "請分析這張食物圖片，並提供以下信息：1. 食物名稱（中文）2. 估計卡路里 3. 主要營養成分 4. 健康建議。請用中文回答，格式要清晰易讀。"

// 文字分析提示
text: `請分析以下食物描述，並提供詳細的營養信息：${foodDescription}。請提供：1. 食物名稱 2. 估計卡路里 3. 主要營養成分（蛋白質、碳水化合物、脂肪、纖維等）4. 健康建議。請用中文回答，格式要清晰易讀。`
```

## 故障排除

### 常見問題

1. **API 錯誤**
   - 檢查 Gemini API key 是否有效
   - 確認網絡連接正常

2. **圖片上傳失敗**
   - 檢查圖片格式是否支持（JPG, PNG, GIF 等）
   - 確認圖片大小不超過 10MB

3. **服務器無法啟動**
   - 確認端口 3000 未被佔用
   - 檢查 Node.js 版本是否兼容

## 授權

MIT License

## 貢獻

歡迎提交 Issue 和 Pull Request！

## 更新日誌

### v1.0.0
- 初始版本發布
- 支持圖片和文字分析
- 現代化響應式 UI
- 拖拽上傳功能 