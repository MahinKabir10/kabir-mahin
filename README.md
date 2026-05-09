# Kabir — Prisma Portfolio

Cinematic React + Vite + Tailwind portfolio with a Supabase-backed contact form.

---

## Local development

```powershell
npm install
npm run dev      # http://localhost:5175/
npm run build    # production build → /dist
```

---

## Wire up Supabase (contact form)

The form already exists at the bottom of `#contact`. It will show a friendly error
("Form is not connected yet — Supabase keys missing") until you do the steps below.

### 1. Create a Supabase project

1. Go to <https://supabase.com> and sign in (you'll need to create the account yourself).
2. New project → pick a name (e.g. `kabir-portfolio`), region close to Brisbane (e.g. `ap-southeast-2 Sydney`), set a strong DB password.
3. Wait ~1 minute for it to provision.

### 2. Run the schema

1. In the dashboard, left sidebar → **SQL Editor** → **New query**.
2. Paste the contents of [`supabase/schema.sql`](./supabase/schema.sql) and click **Run**.
3. This creates the `messages` table and enables Row Level Security so that
   anonymous visitors can **only INSERT** — they cannot read other people's messages.

### 3. Copy your keys

1. Project Settings (gear icon) → **API**.
2. Copy:
   - **Project URL** → goes into `VITE_SUPABASE_URL`
   - **anon public** key → goes into `VITE_SUPABASE_ANON_KEY`
3. Paste them into your local `.env` file:

   ```env
   VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...your-long-key...
   ```

4. Restart the dev server (`Ctrl+C`, then `npm run dev`).
5. Submit a test message. Check **Table Editor → messages** in Supabase — your row should appear.

> ⚠ Never commit `.env`. It's already gitignored.
> The `anon` key is *meant* to be in the browser, but it's only safe because RLS is on.
> Don't use the **service_role** key in the frontend.

### 4. Read your messages

- Easiest: Supabase dashboard → **Table Editor** → `messages` → sorted by `created_at` desc.
- Optional: enable email notifications by hooking up a Supabase Edge Function or a Database Webhook → Resend/Mailgun. (Ask later if you want this.)

---

## Deploy to Vercel

Two paths — pick one.

### Path A — Vercel CLI (fastest)

```powershell
npm install -g vercel
cd "C:\Stitch Website\kabir-prisma"
vercel login          # opens browser, you sign in
vercel                # answer the prompts → preview URL
vercel --prod         # promote to production
```

Vercel auto-detects Vite (no `vercel.json` needed).

### Path B — GitHub + Vercel dashboard (good for automatic deploys on push)

1. Create a GitHub repo and push this folder to it.
2. <https://vercel.com> → **Add New** → **Project** → Import your repo.
3. Framework preset: **Vite** (auto-detected). Click **Deploy**.

### Set environment variables on Vercel

After the first deploy:

1. Vercel project → **Settings** → **Environment Variables**.
2. Add two variables (Production + Preview + Development):
   - `VITE_SUPABASE_URL` = your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
3. Trigger a redeploy: **Deployments** → latest → ⋯ → **Redeploy**.

That's it. Your live URL will be `https://kabir-prisma.vercel.app` (or whatever you named the project), with the contact form writing to your Supabase `messages` table.

---

## Project structure

```
kabir-prisma/
├── public/                 (none — favicon is inline SVG)
├── src/
│   ├── components/
│   │   ├── animations/     WordsPullUp, WordsPullUpMultiStyle, ScrollReveal
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Journey.tsx
│   │   ├── Initiatives.tsx
│   │   ├── Craft.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   └── Navbar.tsx
│   ├── data/content.ts     all copy lives here
│   ├── lib/supabase.ts     client + isSupabaseConfigured guard
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase/schema.sql     run once in Supabase SQL editor
├── .env / .env.example
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Editing copy

All text lives in [`src/data/content.ts`](./src/data/content.ts). Change a string,
save, and HMR will reload the change in your browser instantly.
