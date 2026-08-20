# Forxia Coaching and Consulting Website

Professional consulting website built with **Next.js 15**, **Tailwind CSS**, **Stripe Checkout**, and **Resend** for contact form email delivery.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value proposition, services overview, CTAs |
| `/about` | About — background, credentials, who I help |
| `/services` | Packages with Stripe checkout or contact CTAs |
| `/contact` | Contact form (name, email, service interest, message) |
| `/services/success` | Post-checkout thank-you page |

## Local development

You can run the site with **Docker Desktop** (recommended if Node isn’t installed locally) or with Node.js directly.

### Option A — Docker (recommended)

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) running

```powershell
# From the project folder
copy .env.example .env.local
# Edit .env.local with your keys (optional for browsing pages)

# Dev server with hot reload (edit files in Cursor, refresh browser)
docker compose --profile dev up --build

# Or: production-like build (matches what Vercel deploys)
docker compose --profile prod up --build
```

Open [http://localhost:8000](http://localhost:8000) (mapped to port 8000 on your machine to avoid conflicts with other containers).

**Useful commands:**

```powershell
docker compose --profile dev down          # stop dev container
docker compose --profile dev up --build    # rebuild after dependency changes
docker compose --profile prod up --build   # test production build locally
```

The dev profile mounts your source code into the container, so changes you make in Cursor appear after a refresh—no Git push needed.

### Option B — Node.js directly

**Prerequisites:** [Node.js 18+](https://nodejs.org/) and npm

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) (mapped to port 8000 on your machine to avoid conflicts with other containers).

### Production build (without Docker)

```bash
npm run build
npm start
```

## Editing content

Most copy lives in easy-to-find files:

| What to change | File |
|----------------|------|
| Business name, tagline, email, nav | `src/config/site.ts` |
| Packages, prices, payment type | `src/lib/packages.ts` |
| About page bio & credentials | `src/app/about/page.tsx` |
| Home page sections | `src/components/ValueProposition.tsx`, etc. |
| Stripe price ID mapping | `src/lib/stripe-prices.ts` |

### Package payment rules

In `src/lib/packages.ts`, set `payment` on each package:

- `"stripe"` — shows **Pay now** (requires Stripe Price ID env var)
- `"contact"` — shows **Get in touch** (links to contact form)

All listed prices use **Canadian dollars (CAD)**.

## Environment variables

Copy `.env.example` to `.env.local` locally. Add the same variables in **Vercel → Settings → Environment Variables**.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Full site URL, e.g. `https://yourdomain.com` |
| `CONTACT_EMAIL` | Yes | Where contact form submissions are sent |
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |
| `EMAIL_FROM` | Yes (prod) | Verified sender, e.g. `"Your Name <hello@yourdomain.com>"` |
| `STRIPE_SECRET_KEY` | For payments | Stripe secret key (`sk_test_...` or `sk_live_...`) |
| `STRIPE_PRICE_CONSULTATION` | For payments | Stripe Price ID for General 30 min Consultation (CA $150) |
| `STRIPE_PRICE_FOUNDATION` | For payments | Stripe Price ID for Foundation Assessment (CA $2,500) |
| `STRIPE_PRICE_RETAINER` | For payments | Stripe Price ID for Growth Retainer (CA $4,500/month) |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional | Calendly link on contact page |

**Never commit `.env.local` or real API keys.**

## Stripe setup

1. Create a [Stripe account](https://dashboard.stripe.com/register).
2. **Products → Add product** for each paid package (set currency to **CAD**):
   - **General 30 min Consultation Call** — one-time CA $150
   - **Foundation Assessment** — one-time CA $2,500
   - **Growth Retainer** — recurring monthly CA $4,500
3. Copy each **Price ID** (`price_...`) into the matching env var.
4. Add `STRIPE_SECRET_KEY` (use test keys while developing).
5. Deploy with env vars set; test checkout with [Stripe test cards](https://docs.stripe.com/testing).

Checkout uses Stripe-hosted pages—no card data touches your server.

**When someone pays:** Stripe handles the payment rail. The customer gets a receipt from Stripe. You get notified via the Stripe Dashboard (and email alerts if enabled under **Settings → Notifications**). The site does not send a separate purchase email to `CONTACT_EMAIL`—use Stripe for payment notifications and the contact form for inquiries.

## Contact form (Resend)

1. Sign up at [resend.com](https://resend.com).
2. Add and verify your domain (or use `onboarding@resend.dev` for testing).
3. Create an API key → set `RESEND_API_KEY`.
4. Set `CONTACT_EMAIL` to your inbox and `EMAIL_FROM` to a verified sender.

## PayPal (not included)

Stripe covers card payments out of the box. To add PayPal later:

1. Enable PayPal in Stripe Dashboard (**Settings → Payment methods**), or
2. Integrate [PayPal Checkout SDK](https://developer.paypal.com/docs/checkout/) as a separate flow per package.

Option 1 is the simplest—PayPal appears alongside cards in Stripe Checkout with no extra code.

## Deploy to Vercel + GitHub

### 1. Initialize Git & push to GitHub

```bash
git init
git add .
git commit -m "Initial consulting website"
```

Create a new repository on GitHub (empty, no README), then:

```bash
git remote add origin https://github.com/ImperialZenta/forxia-t2.git
git branch -M main
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository.
3. Framework preset: **Next.js** (auto-detected).
4. Add all environment variables from the table above.
5. Deploy.

Vercel redeploys automatically on every push to `main`.

### 3. Custom domain (later)

1. Vercel → Project → **Settings → Domains**.
2. Add your domain and follow DNS instructions.
3. Update `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Update Stripe success/cancel URLs if needed (they use `NEXT_PUBLIC_SITE_URL`).

## Assumptions used (customize anytime)

- **Business name:** Forxia Coaching and Consulting
- **Founder name:** Andrew — update in `src/config/site.ts`
- **Design:** Clean, light, professional — purple, gold, and black palette
- **Packages:** 3 paid via Stripe (CAD), 1 custom quote via contact form
- **PayPal:** Not wired separately; use Stripe's PayPal option or see notes above

## License

Private — all rights reserved.
