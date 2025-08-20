#!/usr/bin/env python3
"""
Directus Full Uploader
Complete workflow: Convert MDX to JSON and upload to Directus.
"""

import json
import requests
import os
import sys
from typing import Dict, Any, Optional, List
from pathlib import Path

# Import our MDX converter functions
from mdx_to_directus_converter import convert_all_mdx_to_directus, create_directus_collection_schema

class DirectusFullUploader:
    def __init__(self, base_url: str, email: str, password: str):
        """
        Initialize Directus full uploader.
        
        Args:
            base_url: Directus base URL (e.g., http://localhost:8055)
            email: Admin email
            password: Admin password
        """
        self.base_url = base_url.rstrip('/')
        self.email = email
        self.password = password
        self.access_token = None
        self.refresh_token = None
        
    def authenticate(self) -> bool:
        """Authenticate with Directus."""
        try:
            auth_url = f"{self.base_url}/auth/login"
            auth_data = {
                "email": self.email,
                "password": self.password
            }
            
            response = requests.post(auth_url, json=auth_data)
            response.raise_for_status()
            
            auth_response = response.json()
            self.access_token = auth_response['data']['access_token']
            self.refresh_token = auth_response['data']['refresh_token']
            
            print(f"✅ Authenticated successfully with Directus at {self.base_url}")
            return True
            
        except Exception as e:
            print(f"❌ Authentication failed: {e}")
            return False
    
    def get_headers(self) -> Dict[str, str]:
        """Get headers with authentication token."""
        return {
            'Authorization': f'Bearer {self.access_token}',
            'Content-Type': 'application/json'
        }
    
    def create_collection(self, collection_data: Dict[str, Any]) -> bool:
        """Create a collection in Directus."""
        try:
            url = f"{self.base_url}/collections"
            
            collection_payload = {
                "collection": collection_data["collection"],
                "meta": collection_data["meta"],
                "schema": collection_data["schema"]
            }
            
            response = requests.post(url, json=collection_payload, headers=self.get_headers())
            response.raise_for_status()
            
            print(f"✅ Collection '{collection_data['collection']}' created successfully")
            return True
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 400:
                print(f"⚠️  Collection '{collection_data['collection']}' might already exist")
                return True
            else:
                print(f"❌ Failed to create collection: {e}")
                return False
        except Exception as e:
            print(f"❌ Error creating collection: {e}")
            return False
    
    def create_fields(self, collection_name: str, fields: list) -> bool:
        """Create fields for a collection."""
        success_count = 0
        total_fields = len(fields)
        
        for field in fields:
            try:
                url = f"{self.base_url}/fields/{collection_name}"
                
                field_payload = {
                    "field": field["field"],
                    "type": field["type"],
                    "meta": field["meta"],
                    "schema": field["schema"]
                }
                
                response = requests.post(url, json=field_payload, headers=self.get_headers())
                response.raise_for_status()
                
                print(f"✅ Field '{field['field']}' created successfully")
                success_count += 1
                
            except requests.exceptions.HTTPError as e:
                if e.response.status_code == 400:
                    print(f"⚠️  Field '{field['field']}' might already exist")
                    success_count += 1
                else:
                    print(f"❌ Failed to create field '{field['field']}': {e}")
            except Exception as e:
                print(f"❌ Error creating field '{field['field']}': {e}")
        
        print(f"📊 Fields created: {success_count}/{total_fields}")
        return success_count == total_fields
    
    def upload_items(self, collection_name: str, items: List[Dict[str, Any]]) -> bool:
        """Upload items to a collection."""
        try:
            url = f"{self.base_url}/items/{collection_name}"
            
            response = requests.post(url, json=items, headers=self.get_headers())
            response.raise_for_status()
            
            uploaded_count = len(response.json()['data'])
            print(f"✅ Successfully uploaded {uploaded_count} items to collection '{collection_name}'")
            return True
            
        except requests.exceptions.HTTPError as e:
            print(f"❌ Failed to upload items to collection '{collection_name}': {e}")
            if e.response.status_code == 400:
                print(f"Response: {e.response.text}")
            return False
        except Exception as e:
            print(f"❌ Error uploading items: {e}")
            return False
    
    def full_upload_process(self) -> bool:
        """
        Complete upload process: Convert MDX and upload to Directus.
        
        Returns:
            True if entire process successful
        """
        print("🚀 Starting complete Directus upload process...")
        print("=" * 60)
        
        # Step 1: Convert MDX to Directus format
        print("📝 Step 1: Converting MDX files to Directus format...")
        records = convert_all_mdx_to_directus('directus_content.json')
        
        if not records:
            print("❌ No records to upload")
            return False
        
        # Step 2: Create schema
        print("\n🏗️  Step 2: Creating Directus schema...")
        schema = create_directus_collection_schema()
        
        # Step 3: Authenticate with Directus
        print("\n🔐 Step 3: Authenticating with Directus...")
        if not self.authenticate():
            return False
        
        # Step 4: Create collection
        print("\n📋 Step 4: Creating collection...")
        if not self.create_collection(schema):
            return False
        
        # Step 5: Create fields
        print("\n🔧 Step 5: Creating fields...")
        if not self.create_fields(schema["collection"], schema["fields"]):
            return False
        
        # Step 6: Upload data
        print("\n📤 Step 6: Uploading content data...")
        if not self.upload_items('content', records):
            return False
        
        print("\n🎉 Complete upload process finished successfully!")
        return True

def main():
    """Main function to run the full uploader."""
    print("🚀 Directus Full Uploader")
    print("Complete MDX to Directus workflow")
    print("=" * 60)
    
    # Get Directus configuration
    base_url = input("Enter Directus base URL (e.g., http://localhost:8055): ").strip()
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    
    if not base_url or not email or not password:
        print("❌ All fields are required")
        return 1
    
    # Create uploader instance
    uploader = DirectusFullUploader(base_url, email, password)
    
    # Run complete process
    success = uploader.full_upload_process()
    
    if success:
        print("\n🎉 All done! Your MDX content is now in Directus!")
        print("📋 What's next:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify the 'content' collection and data")
        print("   3. Test your API endpoints")
        print("   4. Start building your frontend!")
        return 0
    else:
        print("\n❌ Upload process failed")
        return 1

if __name__ == '__main__':
    exit(main())
