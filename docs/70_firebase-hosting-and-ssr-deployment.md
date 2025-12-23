# Firebase Hosting and SSR Deployment

## Purpose

Defines the Firebase Hosting configuration, deployment pipeline, environment promotion strategy, and rollback procedures for the TikTok Creator Calculator platform.

## Owner

**Primary:** DevOps Engineer
**Collaborators:** Tech Lead, Frontend Developers

## Strategic Disciplines

- **Systems Analysis** — Deployment architecture, CI/CD pipeline
- **Structured Problem-Solving** — Automated deployments, error handling
- **Mental Agility** — Rapid rollbacks, environment management

---

## Deployment Architecture

### Firebase Services

| Service | Purpose |
|---------|---------|
| **Firebase Hosting** | CDN for static assets (HTML, CSS, JS, images) |
| **Firebase Functions** | SSR via Next.js (if needed for dynamic rendering) |
| **Cloud Build** | CI/CD pipeline automation |

### Static Export vs SSR

**V1 Approach: Static Export**
- Next.js generates static HTML at build time
- Deployed to Firebase Hosting CDN
- No server-side runtime required
- Ultra-fast page loads (<1s LCP)

**Future (V2): SSR with Firebase Functions**
- If dynamic content needed (user accounts, personalization)
- Next.js runs on Firebase Functions
- Still leverages CDN for static assets

---

## Firebase Project Setup

### 1. Create Firebase Project

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init hosting
```

### 2. Firebase Configuration

```json
// firebase.json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(html|json)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600, must-revalidate"
          }
        ]
      }
    ],
    "cleanUrls": true,
    "trailingSlash": true
  }
}
```

### 3. Next.js Build Configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Firebase Hosting
  trailingSlash: true, // Match Firebase Hosting behavior
  images: {
    unoptimized: true, // Firebase doesn't support Next.js Image Optimization API
  },
}

module.exports = nextConfig
```

---

## Build & Deploy Process

### Local Build & Deploy

```bash
# Install dependencies
npm install

# Build Next.js site
npm run build
# Output: /out directory with static files

# Deploy to Firebase
firebase deploy --only hosting
```

### NPM Scripts

```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "npm run build && firebase deploy --only hosting",
    "deploy:preview": "npm run build && firebase hosting:channel:deploy preview",
    "lint": "next lint",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

---

## CI/CD Pipeline (GitHub Actions)

### Workflow File

```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

env:
  NODE_VERSION: '18'

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run unit tests
        run: npm test -- --coverage

      - name: Build Next.js
        run: npm run build
        env:
          NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.GA_MEASUREMENT_ID }}
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-output
          path: out

  deploy-preview:
    runs-on: ubuntu-latest
    needs: build-and-test
    if: github.event_name == 'pull_request'
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-output
          path: out

      - name: Deploy to Firebase Preview Channel
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-firebase-project-id
          channelId: pr-${{ github.event.pull_request.number }}

  deploy-production:
    runs-on: ubuntu-latest
    needs: build-and-test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-output
          path: out

      - name: Deploy to Firebase Production
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-firebase-project-id
          channelId: live

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://your-domain.com
            https://your-domain.com/calculators/tiktok-creator-fund
          uploadArtifacts: true
```

---

## Environment Management

### Environments

| Environment | Branch | Firebase Channel | URL | Purpose |
|-------------|--------|------------------|-----|---------|
| **Development** | `develop` | `dev` | `dev--project-id.web.app` | Active development |
| **Preview** | PR branches | `pr-{number}` | `pr-123--project-id.web.app` | PR reviews |
| **Staging** | `staging` | `staging` | `staging--project-id.web.app` | Pre-production testing |
| **Production** | `main` | `live` | `your-domain.com` | Live site |

### Preview Channels

**Create preview for PR:**
```bash
firebase hosting:channel:deploy pr-123 --expires 7d
```

**Auto-generated URL:**
```
https://pr-123--your-project-id.web.app
```

**Benefits:**
- Test changes before merging
- Share with stakeholders
- QA in production-like environment
- Auto-expires after 7 days

---

## Custom Domain Setup

### 1. Add Custom Domain in Firebase Console

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter domain: `your-domain.com`
4. Firebase provides DNS records

### 2. Configure DNS

Add these records to your DNS provider:

```
Type    Name    Value
A       @       151.101.1.195
A       @       151.101.65.195
TXT     @       firebase-verification-code
```

### 3. SSL Certificate

- Firebase automatically provisions SSL certificate
- Typically takes 24 hours
- Auto-renews before expiration

---

## Deployment Checklist

### Pre-Deployment

- [ ] All tests passing locally
- [ ] Linter passes with no errors
- [ ] Build completes successfully
- [ ] Environment variables configured
- [ ] Preview channel tested (for PRs)
- [ ] Content reviewed (no typos, broken links)
- [ ] Performance tested (Lighthouse >90)

### Deployment

- [ ] Merge PR to main (triggers auto-deploy)
- [ ] Monitor GitHub Actions workflow
- [ ] Verify deployment succeeded
- [ ] Check Firebase Console for errors

### Post-Deployment

- [ ] Visit live site, spot-check key pages
- [ ] Test calculators (perform calculations)
- [ ] Check GA4 (page views tracking)
- [ ] Run Lighthouse CI
- [ ] Monitor error logs (Firebase Console)
- [ ] Update team in Slack (#deployments channel)

---

## Rollback Procedures

### Quick Rollback (Firebase Hosting)

Firebase retains deployment history:

```bash
# List recent deployments
firebase hosting:clone

# Rollback to specific version
firebase hosting:clone source-site-id:source-version target-site-id
```

**Or via Console:**
1. Firebase Console > Hosting > Release History
2. Find previous stable version
3. Click "Rollback"

**Time to Rollback:** <2 minutes

### Git Revert (Preferred Method)

```bash
# Revert last commit
git revert HEAD

# Push to main
git push origin main
# Triggers new deployment with reverted changes
```

**Time to Rollback:** 5-10 minutes (includes rebuild)

### Emergency Rollback Plan

**If production is broken:**

1. **Immediate:** Rollback via Firebase Console (2 min)
2. **Short-term:** Investigate issue, create hotfix branch
3. **Long-term:** Fix root cause, add tests, redeploy

**Communication:**
- Post in #incidents Slack channel
- Update status page (if applicable)
- Notify stakeholders

---

## Monitoring & Alerts

### Firebase Hosting Metrics

**Monitor in Firebase Console:**
- Request count
- Bandwidth usage
- Error rate (4xx, 5xx)
- Cache hit ratio

### Alerts

**Configure in Firebase Console > Alerts:**

**Critical:**
- 5xx error rate >1%
- Total requests drop to near-zero (site down)

**Warning:**
- 4xx error rate >5%
- Bandwidth exceeds quota threshold

**Action:** Email/Slack notification to DevOps

---

## Performance Optimization

### CDN Caching

**Firebase Hosting automatically:**
- Serves content from 150+ edge locations worldwide
- Gzip/Brotli compression
- HTTP/2 support

### Cache Headers

```json
// firebase.json
{
  "hosting": {
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|woff|woff2)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600, must-revalidate"
          }
        ]
      }
    ]
  }
}
```

**Strategy:**
- Immutable assets (images, fonts, hashed JS/CSS): 1 year cache
- HTML pages: 1 hour cache with revalidation

---

## Cost Management

### Firebase Hosting Pricing

**Free Tier (Spark Plan):**
- 10 GB storage
- 360 MB/day bandwidth (10.8 GB/month)
- Custom domain: 1

**Paid Tier (Blaze Plan):**
- $0.026 per GB storage
- $0.15 per GB bandwidth
- No limits

**Estimated V1 Costs:**
- Assuming 10K visitors, 5 pages/session, 2 MB/page
- Monthly bandwidth: 10K × 5 × 2 MB = 100 GB
- Cost: 100 GB × $0.15 = $15/month

---

## Security

### Firebase Security Rules

```json
// firebase.json (default: public access)
{
  "hosting": {
    "public": "out"
  }
}
```

**Note:** Static hosting = public by default. No authentication needed for public content site.

### Environment Secrets

**Never commit:**
- Firebase service account keys
- API keys (unless public, like GA4 measurement ID)

**Use GitHub Secrets:**
- `FIREBASE_SERVICE_ACCOUNT`
- `GA_MEASUREMENT_ID`
- `SITE_URL`

---

## Acceptance Criteria

✅ **Firebase Project:** Created and configured
✅ **Deployment Pipeline:** GitHub Actions workflow automated
✅ **Environments:** Dev, Preview, Staging, Production configured
✅ **Custom Domain:** SSL certificate provisioned
✅ **Rollback Plan:** Documented and tested
✅ **Monitoring:** Alerts configured for critical errors
✅ **Documentation:** Team trained on deployment process

---

## Handoff Checklist

- [ ] Firebase project created
- [ ] Firebase CLI installed and configured
- [ ] GitHub Actions secrets added
- [ ] Deployment workflow tested (PR → Preview → Production)
- [ ] Custom domain configured and DNS propagated
- [ ] Rollback procedure tested
- [ ] Monitoring alerts configured
- [ ] Team trained on deployment process
- [ ] Deployment documentation added to team wiki

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
