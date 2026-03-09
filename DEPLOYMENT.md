# Deployment Guide - LIVIO Website

## Vercel Deployment

### Prerequisites
- GitHub repository connected to Vercel
- Vercel account with appropriate permissions

### Environment Variables

Configure these in Vercel dashboard:

```env
# Contact Form
CONTACT_EMAIL=contacto@livio.cl

# Optional: Email service credentials
# SENDGRID_API_KEY=your_key_here
# RESEND_API_KEY=your_key_here
```

### Deployment Steps

1. **Connect Repository**
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
   - Install Command: `npm install`

3. **Set Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add all required variables
   - Set for Production, Preview, and Development

4. **Deploy**
   - Push to main branch for automatic deployment
   - Or click "Deploy" in Vercel dashboard

### Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

### Post-Deployment Checklist

- [ ] Site accessible at production URL
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Performance metrics acceptable
- [ ] SEO metadata correct
- [ ] Analytics configured (if applicable)

### Monitoring

- Check Vercel Analytics for performance metrics
- Monitor error logs in Vercel dashboard
- Set up alerts for deployment failures

### Rollback

If issues occur:
1. Go to Deployments in Vercel dashboard
2. Find last working deployment
3. Click "..." menu > "Promote to Production"

## Manual Deployment (Alternative)

If not using Vercel:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Server requirements:
- Node.js 18+
- Port 3000 (or configure PORT env var)
- Environment variables configured

## Performance Optimization

After deployment:
- Run Lighthouse audit
- Check Core Web Vitals in Search Console
- Monitor bundle size
- Optimize images if needed

## Security

- Keep dependencies updated
- Review security advisories
- Use environment variables for secrets
- Enable HTTPS only
- Configure CSP headers if needed
