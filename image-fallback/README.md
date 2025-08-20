# Image Upload to Cloudinary

This script uploads all images in the current directory to Cloudinary and generates a CSV report with the URLs.

## Setup

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Get Cloudinary credentials:**
   - Sign up at [Cloudinary](https://cloudinary.com/)
   - Go to your dashboard
   - Copy your Cloud Name, API Key, and API Secret

3. **Create .env file:**
   Create a file named `.env` in this directory with:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Usage

Run the script:
```bash
python upload_to_cloudinary.py
```

## Output

The script will:
1. Upload all images (jpg, jpeg, png, gif, bmp, webp) to Cloudinary
2. Create a CSV file named `cloudinary_images.csv` with:
   - filename
   - url (secure HTTPS URL)
   - public_id
   - format
   - width
   - height
   - size (in bytes)

## Features

- Automatically detects image files
- Organizes uploads in "image-fallback" folder on Cloudinary
- Generates detailed CSV report
- Shows progress during upload
- Error handling for failed uploads
