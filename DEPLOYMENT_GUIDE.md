# Deployment Guide for NAVEED RIAZ TECHNICAL SERVICES EST.

## 📋 Quick Setup Checklist

### ✅ Pre-Deployment Requirements
- [ ] All project files uploaded to GitHub repository
- [ ] EmailJS account created and configured
- [ ] Environment variables ready
- [ ] Domain name (optional, can use free subdomain)

## 🌐 Deployment Options

### Option 1: Replit Deployment (Recommended)
**Pros**: Easiest, free tier available, built-in database
**Cost**: Free tier available, paid plans from $7/month

1. Import your GitHub repository to Replit
2. Add environment variables in Replit secrets
3. Click "Deploy" button
4. Your site will be live at `your-project.replit.app`

### Option 2: Vercel (Frontend Focus)
**Pros**: Excellent for React apps, free tier, fast CDN
**Cost**: Free tier generous, paid plans from $20/month

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables in Vercel dashboard
4. Deploy automatically on git push

### Option 3: Railway (Full-Stack)
**Pros**: Great for full-stack apps, includes database
**Cost**: $5/month per service

1. Connect GitHub repository
2. Add PostgreSQL addon
3. Configure environment variables
4. Deploy with one click

## 🔧 Environment Variables Setup

For any deployment platform, add these environment variables:

```env
# EmailJS Configuration (Required)
EMAILJS_SERVICE_ID=service_3gopu9l
EMAILJS_TEMPLATE_ID=template_t2lgpws
EMAILJS_PUBLIC_KEY=E-THdXjTkc9WvSUOf
EMAILJS_PRIVATE_KEY=Rjfhq8SDvfEFF2KkSdn8-

# Database (Auto-configured on most platforms)
DATABASE_URL=your_database_connection_string

# Node Environment
NODE_ENV=production
```

## 🗄️ Database Setup

### For Replit
- Database is automatically configured
- No additional setup needed

### For Other Platforms
1. **Neon Database** (Recommended - Free tier)
   - Sign up at neon.tech
   - Create new database
   - Copy connection string to `DATABASE_URL`

2. **Supabase** (Alternative)
   - Sign up at supabase.com
   - Create new project
   - Get PostgreSQL connection string

## 📧 Email Notifications

Your EmailJS is already configured to send emails to: **navriaz1978@gmail.com**

When customers submit quotes, you'll receive emails with:
- Customer name and contact details
- Requested service type
- Project description
- Submission timestamp

## 🚀 Going Live Steps

### Step 1: Choose Your Domain
- **Free Option**: Use platform subdomain (e.g., `yoursite.replit.app`)
- **Professional Option**: Buy custom domain (e.g., `naveedriazservices.com`)

### Step 2: Upload to GitHub
1. Go to your GitHub repository
2. Upload all project files
3. Ensure `.env` file is in `.gitignore` (for security)

### Step 3: Deploy
1. Choose deployment platform
2. Connect GitHub repository
3. Add environment variables
4. Deploy and test

### Step 4: Test Everything
- [ ] Website loads properly
- [ ] All pages work (Home, Services, About, Contact)
- [ ] Contact forms submit successfully
- [ ] Email notifications arrive at navriaz1978@gmail.com
- [ ] Mobile responsiveness works
- [ ] All service information is accurate

## 📱 Post-Deployment

### Update Business Listings
Once live, update your business listings with website URL:
- Google My Business
- Facebook Business Page
- Instagram Business Profile
- WhatsApp Business

### SEO Optimization
- Submit sitemap to Google Search Console
- Set up Google Analytics (optional)
- Register with local business directories

## 🔧 Maintenance

### Monthly Tasks
- Check email notifications are working
- Review and respond to quote requests
- Update service information if needed

### As Needed
- Add new services to the services page
- Update contact information
- Add customer testimonials

## 📞 Support

If you need help with deployment:
- **Technical Issues**: Check platform documentation
- **Email Problems**: Verify EmailJS settings
- **General Support**: Contact your deployment platform

## 💰 Cost Summary

### Minimal Cost Setup (Recommended)
- **Hosting**: Replit (Free tier or $7/month)
- **Domain**: Free subdomain or $10-15/year for custom
- **Email**: EmailJS (Free for up to 200 emails/month)
- **Database**: Included with hosting
- **Total**: $0-10/month

### Professional Setup
- **Hosting**: Vercel Pro ($20/month)
- **Database**: Neon Pro ($19/month)
- **Domain**: Custom domain ($10-15/year)
- **CDN**: Included with Vercel
- **Total**: ~$40/month

---

Your website is ready to go live and start receiving customer inquiries!