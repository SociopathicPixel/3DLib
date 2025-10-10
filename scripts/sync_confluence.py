import requests
from markdownify import markdownify as md

# Credentials
email = "janbob_prive@outlook.com"
api_token = "ATATT3xFfGF02ZZvtnkHxbkEtz_9uKefWZERrjHwWOJpBuNdrdvBCLb7kv_4GliSQofhlUIqSSkhzycWcSNcX-YnNmike59QZbM93_-Eb7lxQHjzMJUV5g94Ooj30g-ousNQWaQJfGLWxmEH-hV9NREAim3sGRLHe3A2-bbzMA5EUZYQgPnVQfw=313F724D"
page_id = "66171"  # Replace with your Confluence page ID
base_url = "https://private-pixel.atlassian.net/wiki"

# Auth
auth = (email, api_token)
headers = {"Accept": "application/json"}

# Fetch page
url = f"{base_url}/rest/api/content/{page_id}?expand=body.storage,title"
response = requests.get(url, auth=auth, headers=headers)
data = response.json()

# Convert to Markdown
title = data["title"]
content = data["body"]["storage"]["value"]
markdown = md(content)

# Save to file
with open(f"{title}.md", "w", encoding="utf-8") as f:
    f.write(markdown)