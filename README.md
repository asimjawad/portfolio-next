# asimjawad — portfolio

Personal site for Muhammad Asim Jawad. Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel.

## Editing content

All copy lives in `src/content/` — you shouldn't need to touch components to update the site.

| File | What's in it |
| --- | --- |
| `site.ts` | Name, location, availability, email, résumé link, socials |
| `projects.ts` | Every project card: summary, tags, store/GitHub links, filter categories |
| `experience.ts` | Roles, education, toolkit |

Lines marked `VERIFY` were inferred or carried over from the old Flutter site and need checking.

### Real app screenshots

The phones on the home page are drawn placeholders. To use a real screenshot, drop the image in `public/screens/` and pass it to the phone in `src/components/device.tsx`:

```tsx
<Phone screenshot="/screens/ottaa.png" alt="OTTAA home screen" ... />
```

## Running locally

```bash
npm install
npm run dev
```

## Deploying

Import the GitHub repo at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js; no settings to change. Every push to `main` deploys; every other branch gets a preview URL.
