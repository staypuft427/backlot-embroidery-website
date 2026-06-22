# Deployment Guide

## 1. Upload to GitHub
Create a repo named `backlot-embroidery-website` and upload all files from this folder.

## 2. Deploy to Cloudflare Pages
Cloudflare Dashboard → Workers & Pages → Create Application → Pages → Connect to Git.

Settings:
- Framework preset: None
- Build command: leave blank
- Build output directory: `/`

## 3. Connect Pages CMS
Go to Pages CMS, sign in with GitHub, connect this repository. It will use `.pages-cms/config.yml`.

## 4. Add Jotform
Create a Contact form and Quote form in Jotform. Copy each embed code and paste it into Pages CMS:
- Contact Page → Jotform Embed Code
- Quote Page → Jotform Embed Code

## 5. Connect domain
Cloudflare Pages → Custom Domains → Add your domain.
