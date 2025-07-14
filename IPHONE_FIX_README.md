# iPhone image upload issue fix

## Issue description
Cannot upload images to Food Calorie Analyzer on iPhone.

## Fixes

### 1. Improved file input configuration
- Added more detailed `accept` attribute to support more image formats
- Added `capture="environment"` attribute to support camera shooting
- Created two separate file input boxes: one for selecting an image and one for taking a photo

### 2. New user interface
- Added two buttons: "Select an image" and "Take a photo"
- Improved responsive design for mobile devices
- Added user-friendly prompts

### 3. Enhanced error handling
- Added file type validation
- Added file size limit (10MB)
- Improved error prompts
- Added detailed debugging information

### 4. Mobile device optimization
- Added device detection function
- Added special handling for iOS devices
- Improved touch event handling
- Optimized button layout and style

### 5. New features
- Support HEIC/HEIF format (iPhone default format)
- Support WebP format
- Added file preview function
- Added file information display

## Test method

1. **Use test page**: Open `test-upload.html` to test basic upload function

2. **Check console**: View detailed debugging information in browser developer tools

3. **Test different scenarios**:
- Select image from album
- Take photo with camera
- Test image in different formats
- Test large file upload

## Technical details

### File input configuration
```html
<!-- Select image -->
<input type="file" id="image-input" accept="image/*,image/jpeg,image/png,image/webp,image/heic,image/heif" hidden>

<!-- Take photo -->
<input type="file" id="camera-input" accept="image/*,image/jpeg,image/png,image/webp,image/heic,image/heif" capture="environment" hidden>
```

### Supported image formats
- JPEG/JPG
- PNG
- WebP
- HEIC/HEIF (iPhone default format)
- GIF

### File size limit and compression
- Maximum file size: 20MB
- Images over 20MB will be automatically compressed
- Smart compression algorithm dynamically adjusts according to file size:
- Larger than 15MB: compress to 1280px, 60% quality
- Larger than 10MB: compress to 1600px, 70% quality
- Larger than 5MB: compress to 1920px, 80% quality
- Smaller than 5MB: compress to 2048px, 85% quality
- Display progress information during compression

### Device detection
```javascript
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
```

## FAQ

### 1. If you still can't upload
- Check if your browser supports the file API
- Confirm that the website uses HTTPS (some features require a secure connection)
- Check browser permission settings

### 2. If the camera function does not work
- Confirm that the website uses HTTPS
- Check if the browser allows camera permissions
- Try refreshing the page and try again

### 3. If the image format is not supported
- Try converting the image to JPEG or PNG format
- Check if the image file is damaged
- Confirm that the image size does not exceed 20MB (it will be automatically compressed if it exceeds)

### 4. If the image is too large to upload
- The system will automatically compress large images
- Please be patient during the compression process
- If compression fails, please select a smaller image
- It is recommended to use the JPEG format for better compression

## Browser compatibility

- ✅ Safari (iOS)
- ✅ Chrome (iOS)
- ✅ Firefox (iOS)
- ✅ Edge (iOS)
- ✅ Other WebKit-based browsers

## Changelog

- 2024: Add iPhone upload support
- Add camera shooting function
- Improve error handling and user experience
- Add device detection and debugging function
- Add smart image compression function
- Support automatic compression of large-capacity images
- Add compression progress display
