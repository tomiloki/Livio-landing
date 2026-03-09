# Testing Checklist - LIVIO Website

## Responsive Testing

### Mobile (320px - 767px)
- [ ] Home page - 320px width
- [ ] Home page - 375px width (iPhone)
- [ ] Home page - 414px width (iPhone Plus)
- [ ] Cómo Funciona - mobile
- [ ] Soluciones - mobile
- [ ] Nosotros - mobile
- [ ] Contacto - mobile
- [ ] Privacidad - mobile
- [ ] Términos - mobile
- [ ] Navigation menu works on mobile
- [ ] Contact form usable on mobile
- [ ] No horizontal scroll
- [ ] Touch targets min 44x44px
- [ ] Text readable without zoom

### Tablet (768px - 1023px)
- [ ] All pages at 768px
- [ ] All pages at 1024px
- [ ] Layout adapts properly
- [ ] Navigation works
- [ ] Content spacing appropriate

### Desktop (1024px+)
- [ ] All pages at 1280px
- [ ] All pages at 1440px
- [ ] All pages at 1920px
- [ ] Content max-width prevents excessive line length
- [ ] Layout uses space effectively

### Orientation
- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] No content cut off during rotation

## Cross-Browser Testing

### Chrome (latest)
- [ ] Home page
- [ ] All secondary pages
- [ ] Contact form submission
- [ ] Navigation
- [ ] Visual consistency

### Firefox (latest)
- [ ] Home page
- [ ] All secondary pages
- [ ] Contact form submission
- [ ] Navigation
- [ ] Visual consistency

### Safari (latest)
- [ ] Home page
- [ ] All secondary pages
- [ ] Contact form submission
- [ ] Navigation
- [ ] Visual consistency

### Edge (latest)
- [ ] Home page
- [ ] All secondary pages
- [ ] Contact form submission
- [ ] Navigation
- [ ] Visual consistency

## Touch Interactions
- [ ] Buttons tappable on touch devices
- [ ] Links tappable on touch devices
- [ ] Form inputs work with touch keyboard
- [ ] No hover-only interactions
- [ ] Touch target sizes appropriate

## Navigation Testing
- [ ] All navbar links work
- [ ] All footer links work
- [ ] Active page highlighting
- [ ] Mobile menu opens/closes
- [ ] No broken links
- [ ] Browser back/forward works

## Form Testing
- [ ] Required field validation
- [ ] Email format validation
- [ ] Form submits with valid data
- [ ] Loading state displays
- [ ] Success message displays
- [ ] Error handling works
- [ ] Form resets after success
- [ ] Error messages in Spanish

## SEO Testing
- [ ] Run Lighthouse SEO audit (score 90+)
- [ ] Meta tags present on all pages
- [ ] Titles descriptive and unique
- [ ] Descriptions compelling
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

## Performance Testing
- [ ] Lighthouse Performance score 90+
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] No console errors
- [ ] Fast initial page load
- [ ] Smooth page transitions

## Accessibility Testing
- [ ] Lighthouse Accessibility score 90+
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader announces correctly
- [ ] Form labels associated
- [ ] Color contrast sufficient
- [ ] Heading hierarchy correct
- [ ] No accessibility violations (axe)

## Content Review
- [ ] All copy in Spanish
- [ ] No typos or grammar errors
- [ ] Tone consistent with brand
- [ ] No invented claims
- [ ] No fake metrics
- [ ] No fake testimonials
- [ ] Brand name consistent (LIVIO)
- [ ] CTAs clear and compelling

## Pre-Deployment
- [ ] All pages load without errors
- [ ] All links working
- [ ] Forms working
- [ ] SEO metadata complete
- [ ] Performance acceptable
- [ ] Accessibility baseline met
- [ ] Responsive design working
- [ ] Cross-browser tested
- [ ] No console errors
- [ ] Environment variables documented
