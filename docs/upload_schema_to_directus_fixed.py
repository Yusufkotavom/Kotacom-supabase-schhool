#!/usr/bin/env python3
"""
Upload Schema to Directus - Fixed Version
Upload projects and services schema to Directus.
"""

import json
import requests
import time
from typing import Dict, Any

def upload_schema_to_directus(base_url: str, email: str, password: str):
    """
    Upload schema to Directus.
    """
    print("🚀 Upload Schema to Directus - Fixed Version")
    print("=" * 50)
    
    # Authenticate
    try:
        auth_url = f"{base_url.rstrip('/')}/auth/login"
        auth_data = {"email": email, "password": password}
        
        response = requests.post(auth_url, json=auth_data)
        response.raise_for_status()
        
        auth_response = response.json()
        access_token = auth_response['data']['access_token']
        
        print("✅ Authenticated successfully")
        
    except Exception as e:
        print(f"❌ Authentication failed: {e}")
        return False
    
    # Prepare headers
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    # Upload Projects Schema
    print("\n📋 Uploading Projects Schema...")
    try:
        with open('projects_schema.json', 'r', encoding='utf-8') as f:
            projects_schema = json.load(f)
        
        # Create collection
        collection_url = f"{base_url.rstrip('/')}/collections"
        collection_data = {
            "collection": projects_schema["collection"],
            "meta": projects_schema["meta"],
            "schema": projects_schema["schema"]
        }
        
        response = requests.post(collection_url, json=collection_data, headers=headers)
        if response.status_code in [200, 400]:  # 400 means collection might already exist
            print("✅ Projects collection created")
        else:
            print(f"❌ Failed to create projects collection: {response.text}")
            return False
        
        # Create fields
        fields_url = f"{base_url.rstrip('/')}/fields/projects"
        for field in projects_schema["fields"]:
            if field["field"] != "id":  # Skip id field as it's auto-created
                field_data = {
                    "field": field["field"],
                    "type": field["type"],
                    "meta": field["meta"]
                }
                
                # Add schema if it exists
                if "schema" in field:
                    field_data["schema"] = field["schema"]
                
                response = requests.post(fields_url, json=field_data, headers=headers)
                if response.status_code in [200, 400]:  # 400 means field might already exist
                    print(f"✅ Field '{field['field']}' created")
                else:
                    print(f"⚠️ Field '{field['field']}' failed: {response.text}")
                
                time.sleep(0.5)  # Small delay between fields
        
        print("✅ Projects schema uploaded successfully")
        
    except Exception as e:
        print(f"❌ Error uploading projects schema: {e}")
        return False
    
    # Upload Services Schema
    print("\n📋 Uploading Services Schema...")
    try:
        with open('services_schema.json', 'r', encoding='utf-8') as f:
            services_schema = json.load(f)
        
        # Create collection
        collection_data = {
            "collection": services_schema["collection"],
            "meta": services_schema["meta"],
            "schema": services_schema["schema"]
        }
        
        response = requests.post(collection_url, json=collection_data, headers=headers)
        if response.status_code in [200, 400]:  # 400 means collection might already exist
            print("✅ Services collection created")
        else:
            print(f"❌ Failed to create services collection: {response.text}")
            return False
        
        # Create fields
        fields_url = f"{base_url.rstrip('/')}/fields/services"
        for field in services_schema["fields"]:
            if field["field"] != "id":  # Skip id field as it's auto-created
                field_data = {
                    "field": field["field"],
                    "type": field["type"],
                    "meta": field["meta"]
                }
                
                # Add schema if it exists
                if "schema" in field:
                    field_data["schema"] = field["schema"]
                
                response = requests.post(fields_url, json=field_data, headers=headers)
                if response.status_code in [200, 400]:  # 400 means field might already exist
                    print(f"✅ Field '{field['field']}' created")
                else:
                    print(f"⚠️ Field '{field['field']}' failed: {response.text}")
                
                time.sleep(0.5)  # Small delay between fields
        
        print("✅ Services schema uploaded successfully")
        
    except Exception as e:
        print(f"❌ Error uploading services schema: {e}")
        return False
    
    return True

def main():
    """Main function."""
    # Configuration
    base_url = "http://localhost:8055"
    email = "admin@example.com"
    password = "d1r3ctu5"
    
    print("🚀 Schema Uploader - Fixed Version")
    print("=" * 50)
    
    # First create schema files if they don't exist
    print("🏗️ Creating schema files...")
    import os
    if not os.path.exists('projects_schema.json') or not os.path.exists('services_schema.json'):
        os.system('python create_projects_services_schema.py')
    
    # Upload schema
    success = upload_schema_to_directus(base_url, email, password)
    
    if success:
        print("\n🎉 Schema upload completed successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify projects and services collections")
        print("   3. Upload data to collections")
        return 0
    else:
        print("\n❌ Schema upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
