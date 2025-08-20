#!/usr/bin/env python3
"""
Directus Schema Uploader
Upload Directus collection schema to Directus instance via API.
"""

import json
import requests
import os
from typing import Dict, Any, Optional

class DirectusSchemaUploader:
    def __init__(self, base_url: str, email: str, password: str):
        """
        Initialize Directus uploader.
        
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
        """
        Authenticate with Directus.
        
        Returns:
            True if authentication successful
        """
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
        """
        Create a collection in Directus.
        
        Args:
            collection_data: Collection schema data
            
        Returns:
            True if collection created successfully
        """
        try:
            url = f"{self.base_url}/collections"
            
            # Prepare collection data
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
        """
        Create fields for a collection.
        
        Args:
            collection_name: Name of the collection
            fields: List of field definitions
            
        Returns:
            True if all fields created successfully
        """
        success_count = 0
        total_fields = len(fields)
        
        for field in fields:
            try:
                url = f"{self.base_url}/fields/{collection_name}"
                
                # Prepare field data
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
    
    def upload_schema(self, schema_file: str = 'directus_schema.json') -> bool:
        """
        Upload complete schema to Directus.
        
        Args:
            schema_file: Path to schema JSON file
            
        Returns:
            True if schema uploaded successfully
        """
        try:
            # Load schema file
            with open(schema_file, 'r', encoding='utf-8') as f:
                schema_data = json.load(f)
            
            print(f"📄 Loading schema from {schema_file}")
            
            # Authenticate
            if not self.authenticate():
                return False
            
            # Create collection
            if not self.create_collection(schema_data):
                return False
            
            # Create fields
            if not self.create_fields(schema_data["collection"], schema_data["fields"]):
                return False
            
            print(f"🎉 Schema uploaded successfully to Directus!")
            return True
            
        except FileNotFoundError:
            print(f"❌ Schema file '{schema_file}' not found")
            return False
        except json.JSONDecodeError as e:
            print(f"❌ Invalid JSON in schema file: {e}")
            return False
        except Exception as e:
            print(f"❌ Error uploading schema: {e}")
            return False

def main():
    """Main function to run the schema uploader."""
    print("🚀 Directus Schema Uploader")
    print("=" * 40)
    
    # Get Directus configuration
    base_url = input("Enter Directus base URL (e.g., http://localhost:8055): ").strip()
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    
    if not base_url or not email or not password:
        print("❌ All fields are required")
        return 1
    
    # Create uploader instance
    uploader = DirectusSchemaUploader(base_url, email, password)
    
    # Upload schema
    success = uploader.upload_schema()
    
    if success:
        print("\n🎉 Schema upload completed successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify the collection and fields are created")
        print("   3. Import your content data")
        return 0
    else:
        print("\n❌ Schema upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
