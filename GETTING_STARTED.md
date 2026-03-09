# Getting Started - LIVIO Website

## Quick Start

```bash
# Clone repository
git clone [repository-url]
cd livio-web

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

### Making Content Changes

Content is organized in `/content` directory:

- **`content/home.ts`** - Home page content (hero, problems, benefits, etc.)
- **`content/navigation.ts`** - Navigation menus and footer links

Edit these files to update copy without touching components.

### Adding New Pages

1. Create page in `/app/[page-name]/page.tsx`
2. Add metadata for SEO
3. Use existing components from `/components`
4. Add navigation link in `content/navigation.ts`

### Creating Components

- **UI components** → `/components/ui`
- **Layout components** → `/components/layout`
- **Section components** → `/components/sections`
- **Form components** → `/components/forms`

### Styling

Using Tailwind CSS with custom theme in `tailwind.config.ts`:

```typescript
// Custom colors
primary: "#1E3A8A"
accent: "#3B82F6"
background: "#F9FAFB"
// ... etc
```

### Testing Locally

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Test production build
npm run build && npm start

# Analyze bundle size
npm run analyze
```

## Project Structure

```
/app                    # Next.js App Router pages
  /api/contact         # Contact form API
  /[page]/page.tsx     # Individual pages
  layout.tsx           # Root layout
  
/components
  /ui                  # Reusable UI components
  /layout              # Layout components
  /sections            # Page sections
  /forms               # Form components
  
/content               # Content files (editable copy)
/public                # Static assets
```

## Common Tasks

### Update Home Page Content

Edit `content/home.ts`:

```typescript
export const homeContent = {
  hero: {
    title: "Your new title",
    subtitle: "Your new subtitle",
    // ...
  },
  // ...
};
```

### Add New Section to Home

1. Create component in `/components/sections/NewSection.tsx`
2. Import in `/app/page.tsx`
3. Add content to `content/home.ts`

### Update Navigation

Edit `content/navigation.ts`:

```typescript
export const navigation = {
  main: [
    { label: "Inicio", href: "/" },
    // Add new item
  ],
};
```

### Modify Contact Form

Edit `/components/forms/ContactForm.tsx` for UI changes.
Edit `/app/api/contact/route.ts` for backend logic.

## Environment Variables

Create `.env.local`:

```env
CONTACT_EMAIL=contacto@livio.cl
```

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Type Errors

```bash
# Check TypeScript
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Need Help?

Check `AGENTS.md` for project guidelines and rules.
