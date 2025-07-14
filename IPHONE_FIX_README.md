# iPhone 上傳圖片問題修復

## 問題描述
在 iPhone 上無法上傳圖片到食物卡路里分析器。

## 修復內容

### 1. 改進文件輸入配置
- 添加了更詳細的 `accept` 屬性，支持更多圖片格式
- 添加了 `capture="environment"` 屬性來支持相機拍攝
- 創建了兩個獨立的文件輸入框：一個用於選擇圖片，一個用於拍照

### 2. 新增用戶界面
- 添加了兩個按鈕：「選擇圖片」和「拍照」
- 改進了移動設備的響應式設計
- 添加了用戶友好的提示信息

### 3. 增強錯誤處理
- 添加了文件類型驗證
- 添加了文件大小限制（10MB）
- 改進了錯誤提示信息
- 添加了詳細的調試信息

### 4. 移動設備優化
- 添加了設備檢測功能
- 為 iOS 設備添加了特殊處理
- 改進了觸摸事件處理
- 優化了按鈕佈局和樣式

### 5. 新增功能
- 支持 HEIC/HEIF 格式（iPhone 默認格式）
- 支持 WebP 格式
- 添加了文件預覽功能
- 添加了文件信息顯示

## 測試方法

1. **使用測試頁面**：打開 `test-upload.html` 來測試基本的上傳功能
2. **檢查控制台**：在瀏覽器開發者工具中查看詳細的調試信息
3. **測試不同場景**：
   - 從相冊選擇圖片
   - 使用相機拍照
   - 測試不同格式的圖片
   - 測試大文件上傳

## 技術細節

### 文件輸入配置
```html
<!-- 選擇圖片 -->
<input type="file" id="image-input" accept="image/*,image/jpeg,image/png,image/webp,image/heic,image/heif" hidden>

<!-- 拍照 -->
<input type="file" id="camera-input" accept="image/*,image/jpeg,image/png,image/webp,image/heic,image/heif" capture="environment" hidden>
```

### 支持的圖片格式
- JPEG/JPG
- PNG
- WebP
- HEIC/HEIF (iPhone 默認格式)
- GIF

### 文件大小限制和壓縮
- 最大文件大小：20MB
- 超過 20MB 的圖片會自動壓縮
- 智能壓縮算法根據文件大小動態調整：
  - 大於 15MB：壓縮到 1280px，質量 60%
  - 大於 10MB：壓縮到 1600px，質量 70%
  - 大於 5MB：壓縮到 1920px，質量 80%
  - 小於 5MB：壓縮到 2048px，質量 85%
- 壓縮過程中顯示進度信息

### 設備檢測
```javascript
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
```

## 常見問題解決

### 1. 如果仍然無法上傳
- 檢查瀏覽器是否支持文件 API
- 確認網站使用 HTTPS（某些功能需要安全連接）
- 檢查瀏覽器權限設置

### 2. 如果相機功能不工作
- 確認網站使用 HTTPS
- 檢查瀏覽器是否允許相機權限
- 嘗試刷新頁面後重試

### 3. 如果圖片格式不支持
- 嘗試將圖片轉換為 JPEG 或 PNG 格式
- 檢查圖片文件是否損壞
- 確認圖片大小不超過 20MB（超過會自動壓縮）

### 4. 如果圖片太大無法上傳
- 系統會自動壓縮大圖片
- 壓縮過程中請耐心等待
- 如果壓縮失敗，請選擇較小的圖片
- 建議使用 JPEG 格式以獲得更好的壓縮效果

## 瀏覽器兼容性

- ✅ Safari (iOS)
- ✅ Chrome (iOS)
- ✅ Firefox (iOS)
- ✅ Edge (iOS)
- ✅ 其他基於 WebKit 的瀏覽器

## 更新日誌

- 2024: 添加 iPhone 上傳支持
- 添加相機拍攝功能
- 改進錯誤處理和用戶體驗
- 添加設備檢測和調試功能
- 添加智能圖片壓縮功能
- 支持大容量圖片自動壓縮
- 添加壓縮進度顯示 