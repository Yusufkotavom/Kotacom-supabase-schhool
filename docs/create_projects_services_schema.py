#!/usr/bin/env python3
"""
Create Projects and Services Schema
Generate Directus schema for projects and services collections.
"""

import json
from typing import Dict, Any

def create_projects_schema() -> Dict[str, Any]:
    """Create schema for projects collection."""
    return {
        "collection": "projects",
        "meta": {
            "icon": "work",
            "note": "Portfolio projects imported from MDX files",
            "display_template": "{{title}}",
            "sort": 2
        },
        "schema": {
            "name": "projects",
            "comment": "Portfolio projects imported from MDX files"
        },
        "fields": [
            {
                "field": "id",
                "type": "uuid",
                "meta": {
                    "hidden": True,
                    "readonly": True,
                    "interface": "input"
                },
                "schema": {
                    "is_primary_key": True,
                    "has_auto_increment": False
                }
            },
            {
                "field": "status",
                "type": "string",
                "meta": {
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {"text": "Published", "value": "published"},
                            {"text": "Draft", "value": "draft"},
                            {"text": "Archived", "value": "archived"}
                        ]
                    }
                },
                "schema": {
                    "default_value": "published",
                    "is_nullable": False
                }
            },
            {
                "field": "title",
                "type": "string",
                "meta": {
                    "interface": "input",
                    "required": True
                },
                "schema": {
                    "is_nullable": False
                }
            },
            {
                "field": "slug",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "content",
                "type": "text",
                "meta": {
                    "interface": "input-code",
                    "options": {
                        "language": "markdown"
                    }
                }
            },
            {
                "field": "summary",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "client",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "client_industry",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "project_duration",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "team_size",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "technologies",
                "type": "json",
                "meta": {
                    "interface": "tags"
                }
            },
            {
                "field": "challenges",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "solutions",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "results",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "before_metrics",
                "type": "json",
                "meta": {
                    "interface": "input-code",
                    "options": {
                        "language": "json"
                    }
                }
            },
            {
                "field": "after_metrics",
                "type": "json",
                "meta": {
                    "interface": "input-code",
                    "options": {
                        "language": "json"
                    }
                }
            },
            {
                "field": "roi_percentage",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "client_testimonial",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "client_name",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "client_position",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "before_image",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "after_image",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "additional_images",
                "type": "json",
                "meta": {
                    "interface": "tags"
                }
            },
            {
                "field": "url",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "external_url",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "featured",
                "type": "boolean",
                "meta": {
                    "interface": "boolean"
                },
                "schema": {
                    "default_value": False
                }
            },
            {
                "field": "created_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            },
            {
                "field": "updated_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            }
        ]
    }

def create_services_schema() -> Dict[str, Any]:
    """Create schema for services collection."""
    return {
        "collection": "services",
        "meta": {
            "icon": "business",
            "note": "Services offered imported from MDX files",
            "display_template": "{{title}}",
            "sort": 3
        },
        "schema": {
            "name": "services",
            "comment": "Services offered imported from MDX files"
        },
        "fields": [
            {
                "field": "id",
                "type": "uuid",
                "meta": {
                    "hidden": True,
                    "readonly": True,
                    "interface": "input"
                },
                "schema": {
                    "is_primary_key": True,
                    "has_auto_increment": False
                }
            },
            {
                "field": "status",
                "type": "string",
                "meta": {
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {"text": "Published", "value": "published"},
                            {"text": "Draft", "value": "draft"},
                            {"text": "Archived", "value": "archived"}
                        ]
                    }
                },
                "schema": {
                    "default_value": "published",
                    "is_nullable": False
                }
            },
            {
                "field": "title",
                "type": "string",
                "meta": {
                    "interface": "input",
                    "required": True
                },
                "schema": {
                    "is_nullable": False
                }
            },
            {
                "field": "slug",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "content",
                "type": "text",
                "meta": {
                    "interface": "input-code",
                    "options": {
                        "language": "markdown"
                    }
                }
            },
            {
                "field": "summary",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "price",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "cost",
                "type": "json",
                "meta": {
                    "interface": "tags"
                }
            },
            {
                "field": "whatsapp_url",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "verify",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "review",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "cover_image",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "images",
                "type": "json",
                "meta": {
                    "interface": "tags"
                }
            },
            {
                "field": "featured",
                "type": "boolean",
                "meta": {
                    "interface": "boolean"
                },
                "schema": {
                    "default_value": False
                }
            },
            {
                "field": "created_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            },
            {
                "field": "updated_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            }
        ]
    }

def main():
    """Create schema files."""
    print("🏗️ Creating Projects and Services Schema...")
    
    # Create projects schema
    projects_schema = create_projects_schema()
    with open('projects_schema.json', 'w', encoding='utf-8') as f:
        json.dump(projects_schema, f, indent=2, ensure_ascii=False)
    print("✅ Created projects_schema.json")
    
    # Create services schema
    services_schema = create_services_schema()
    with open('services_schema.json', 'w', encoding='utf-8') as f:
        json.dump(services_schema, f, indent=2, ensure_ascii=False)
    print("✅ Created services_schema.json")
    
    print("\n🎉 Schema files created successfully!")
    print("📋 Next steps:")
    print("   1. Upload projects_schema.json to create projects collection")
    print("   2. Upload services_schema.json to create services collection")
    print("   3. Upload data to respective collections")

if __name__ == '__main__':
    main()
