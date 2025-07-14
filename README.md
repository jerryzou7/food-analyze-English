# Food Calorie Analyzer

A food nutrition and calorie analysis website based on AI technology, using Google Gemini API to analyze food images and text descriptions.

## Features

- 🍽️ **Image Analysis**: Upload food pictures, AI automatically identifies and analyzes nutritional content
- 📝 **Text Analysis**: Enter food descriptions to get detailed nutritional information
- 🎨 **Modern UI**: Beautiful responsive design, supports desktop and mobile devices
- ⚡ **Instant Analysis**: Get analysis results quickly
- 📱 **Drag and drop upload**: Support dragging image files to the upload area

## Technology stack

- **Backend**: Node.js + Express
- **Front-end**: HTML5 + CSS3 + JavaScript (ES6+)
- **AI Service**: Google Gemini API
- **File Processing**: Multer
- **HTTP Client**: Axios

## Installation and Running

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation steps

1. **Clone or download the project**
```bash
# If using git
git clone <repository-url>
cd food-calorie-analyzer
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
# Development mode (auto restart)
npm run dev

# Production mode
npm start
```

4. **Visit the website**
Open a browser and visit `http://localhost:3000`

## How to use

### Image analysis
1. Click the "Image analysis" tab
2. Drag an image to the upload area or click "Select image"
3. After previewing the image, click "Analyze image"
4. Wait for AI analysis results

### Text analysis
1. Click the "Text analysis" tab
2. Enter a food description in the text box (e.g., an apple, a bowl of white rice)
3. Click "Analyze text"
4. View the analysis results

## API endpoint

### POST /api/analyze-image
Analyze uploaded food images

**Request**:
- Content-Type: multipart/form-data
- Body: image (image file)

**Response**:
```json
{
"analysis": "Analysis result text"
}
```

### POST /api/analyze-text
Analyze food with text descriptions

**Request**:
```json
{
"foodDescription": "Food description"
}
```

**Response**:
```json
{
"analysis": "Analysis result text"
}
```

## Project structure

```
food-calorie-analyzer/
├── public/
│ ├── index.html # Main page
│ ├── styles.css # Style file
│ └── script.js # Front-end JavaScript
├── server.js # Express server
├── package.json # Project configuration
└── README.md # Documentation
```

## Environment variables

The project uses your Gemini API key, which is configured in `server.js`:

```javascript
const GEMINI_API_KEY = 'AIzaSyCdGHAQIU03BL7w4bYRHbShCQ7MNo-BBrI';
```

## Development instructions

### Add new features
1. Add new API endpoints in `server.js`
2. Add front-end logic in `public/script.js`
3. Add UI elements in `public/index.html`
4. Add styles in `public/styles.css`

### Customize analysis tips
Modify the tip text in `server.js` to change the behavior of AI analysis:

```javascript
// Image analysis tips
text: "Please analyze this food image and provide the following information: 1. Food name (in Chinese) 2. Estimated calories 3. Main nutrients 4. Health advice. Please answer in Chinese and format it clearly and easily readable. "

// Text analysis tips
text: `Please analyze the following food description and provide detailed nutritional information: ${foodDescription}. Please provide: 1. Food name 2. Estimated calories 3. Main nutrients (protein, carbohydrates, fat, fiber, etc.) 4. Health advice. Please answer in Chinese and format it clearly and easily readable. `
```

## Troubleshooting

### Common Problems

1. **API Error**
- Check if the Gemini API key is valid
- Confirm that the network connection is normal

2. **Image upload failed**
- Check if the image format is supported (JPG, PNG, GIF, etc.)
- Confirm that the image size does not exceed 10MB

3. **Server cannot start**
- Confirm that port 3000 is not occupied
- Check if the Node.js version is compatible

## License

MIT License

## Contribution

Welcome to submit issues and pull requests!

## Changelog

### v1.0.0
- Initial version release
- Support image and text analysis
- Modern responsive UI
- Drag and drop upload function
