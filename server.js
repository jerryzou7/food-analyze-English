const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 配置 multer 用於文件上傳
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB 限制
    }
});

// Gemini API 配置
const GEMINI_API_KEY = 'AIzaSyCdGHAQIU03BL7w4bYRHbShCQ7MNo-BBrI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent';

// 分析食物圖片的 API
app.post('/api/analyze-image', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: '請上傳圖片' });
        }

        // 將圖片轉換為 base64
        const base64Image = req.file.buffer.toString('base64');
        
        const requestBody = {
            contents: [{
                parts: [
                    {
                        text: "請分析這張食物圖片，並提供以下信息：1. 食物名稱（中文）2. 估計卡路里 3. 主要營養成分 4. 健康建議。請用中文回答，格式要清晰易讀。"
                    },
                    {
                        inline_data: {
                            mime_type: req.file.mimetype,
                            data: base64Image
                        }
                    }
                ]
            }]
        };

        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const analysis = response.data.candidates[0].content.parts[0].text;
        res.json({ analysis });

    } catch (error) {
        console.error('分析圖片時出錯:', error);
        res.status(500).json({ error: '分析圖片時發生錯誤' });
    }
});

// 分析文字描述的 API
app.post('/api/analyze-text', async (req, res) => {
    try {
        const { foodDescription } = req.body;
        
        if (!foodDescription) {
            return res.status(400).json({ error: '請提供食物描述' });
        }

        const requestBody = {
            contents: [{
                parts: [{
                    text: `請分析以下食物描述，並提供詳細的營養信息：${foodDescription}。請提供：1. 食物名稱 2. 估計卡路里 3. 主要營養成分（蛋白質、碳水化合物、脂肪、纖維等）4. 健康建議。請用中文回答，格式要清晰易讀。`
                }]
            }]
        };

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
            requestBody,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const analysis = response.data.candidates[0].content.parts[0].text;
        res.json({ analysis });

    } catch (error) {
        console.error('分析文字時出錯:', error);
        res.status(500).json({ error: '分析文字時發生錯誤' });
    }
});

// 服務靜態文件
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`服務器運行在 http://localhost:${PORT}`);
}); 