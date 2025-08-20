import os
import csv
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

def upload_images_to_cloudinary():
    """Upload all images in the current directory to Cloudinary"""
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']
    uploaded_images = []
    
    # Get all image files in the current directory
    for filename in os.listdir('.'):
        if any(filename.lower().endswith(ext) for ext in image_extensions):
            try:
                print(f"Uploading {filename}...")
                
                # Upload to Cloudinary
                result = cloudinary.uploader.upload(
                    filename,
                    folder="image-fallback",  # Optional: organize in a folder
                    public_id=os.path.splitext(filename)[0]  # Use filename without extension as public_id
                )
                
                uploaded_images.append({
                    'filename': filename,
                    'url': result['secure_url'],
                    'public_id': result['public_id'],
                    'format': result['format'],
                    'width': result['width'],
                    'height': result['height'],
                    'size': result['bytes']
                })
                
                print(f"✓ Successfully uploaded {filename}")
                
            except Exception as e:
                print(f"✗ Error uploading {filename}: {str(e)}")
    
    return uploaded_images

def create_csv_report(uploaded_images):
    """Create a CSV file with the uploaded image information"""
    csv_filename = 'cloudinary_images.csv'
    
    with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['filename', 'url', 'public_id', 'format', 'width', 'height', 'size']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for image in uploaded_images:
            writer.writerow(image)
    
    print(f"\nCSV report created: {csv_filename}")
    return csv_filename

def main():
    print("Starting image upload to Cloudinary...")
    
    # Upload all images
    uploaded_images = upload_images_to_cloudinary()
    
    if uploaded_images:
        # Create CSV report
        csv_filename = create_csv_report(uploaded_images)
        
        print(f"\nUpload Summary:")
        print(f"Total images uploaded: {len(uploaded_images)}")
        print(f"CSV report saved as: {csv_filename}")
        
        # Display URLs
        print(f"\nImage URLs:")
        for image in uploaded_images:
            print(f"{image['filename']}: {image['url']}")
    else:
        print("No images were uploaded successfully.")

if __name__ == "__main__":
    main()
