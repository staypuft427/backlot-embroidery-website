# Backlot Embroidery Co. Decap CMS Deployment Guide

## 1. Edit Decap config
Open `admin/config.yml` and replace:

`YOUR_GITHUB_USERNAME/backlot-embroidery-website`

with your real GitHub repo, for example:

`cawensel/backlot-embroidery-website`

## 2. Upload to GitHub
Create a new GitHub repository and upload all files from this ZIP.

## 3. Deploy to Netlify
Add new site > Import from GitHub. Build command blank. Publish directory `.`.

## 4. Enable CMS login
In Netlify, enable Identity and Git Gateway, then invite yourself as a user.

## 5. Edit the site
Go to `https://yourdomain.com/admin`.

You can edit homepage text, services, gallery, FAQ, contact info, and upload images.

## 6. Forms
After deployment, submit one contact form and one quote form test. Submissions appear in Netlify Forms.
