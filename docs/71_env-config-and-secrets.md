# Environment Config and Secrets

## Purpose

Defines environment variable management, secrets handling, and configuration best practices for development, staging, and production environments.

## Owner

**Primary:** DevOps Engineer
**Collaborators:** Tech Lead, Security Engineer

## Strategic Disciplines

- **Systems Analysis** — Configuration architecture across environments
- **Structured Problem-Solving** — Secure secrets management
- **Political Savvy** — Security and compliance considerations

---

## Environment Variables Overview

### Public vs Private Variables

**Public (Client-Side):**
- Prefix: `NEXT_PUBLIC_`
- Exposed to browser
- Included in JavaScript bundle
- Examples: GA4 Measurement ID, Site URL

**Private (Server-Side Only):**
- No prefix
- Only available during build or in API routes
- Never exposed to browser
- Examples: API keys, database credentials (future)

---

## Environment Variable Definitions

### Development (.env.local)

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="TikTok Creator Calculator"

# Feature Flags (Development)
NEXT_PUBLIC_ENABLE_DEBUG=true
NEXT_PUBLIC_SHOW_PERFORMANCE_METRICS=true

# Build Configuration
NODE_ENV=development
```

### Staging (.env.staging)

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-STAGING-ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://staging--project-id.web.app
NEXT_PUBLIC_SITE_NAME="TikTok Creator Calculator (Staging)"

# Feature Flags
NEXT_PUBLIC_ENABLE_DEBUG=false
NEXT_PUBLIC_SHOW_PERFORMANCE_METRICS=true

# Build Configuration
NODE_ENV=production
```

### Production (.env.production)

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-PRODUCTION-ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="TikTok Creator Calculator"

# Feature Flags
NEXT_PUBLIC_ENABLE_DEBUG=false
NEXT_PUBLIC_SHOW_PERFORMANCE_METRICS=false

# Build Configuration
NODE_ENV=production
```

---

## Usage in Code

### Accessing Environment Variables

```tsx
// Client-side (components, pages)
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

// Build-time only (next.config.js, scripts)
const nodeEnv = process.env.NODE_ENV
```

### Type-Safe Environment Variables

```ts
// lib/env.ts

/**
 * Environment variables with type safety
 */
export const env = {
  // Analytics
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',

  // Site Config
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'TikTok Creator Calculator',

  // Feature Flags
  ENABLE_DEBUG: process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true',
  SHOW_PERFORMANCE_METRICS:
    process.env.NEXT_PUBLIC_SHOW_PERFORMANCE_METRICS === 'true',

  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
} as const

// Validate required variables
if (!env.GA_MEASUREMENT_ID && env.IS_PRODUCTION) {
  throw new Error('GA_MEASUREMENT_ID is required in production')
}
```

**Usage:**
```tsx
import { env } from '@/lib/env'

export default function AnalyticsProvider() {
  if (!env.GA_MEASUREMENT_ID) {
    console.warn('GA4 Measurement ID not configured')
    return null
  }

  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_MEASUREMENT_ID}`} />
}
```

---

## GitHub Secrets Configuration

### Repository Secrets

**Path:** GitHub repo > Settings > Secrets and variables > Actions

**Required Secrets:**

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON | `{"type": "service_account"...}` |
| `GA_MEASUREMENT_ID` | GA4 Measurement ID (Production) | `G-XXXXXXXXXX` |
| `GA_MEASUREMENT_ID_STAGING` | GA4 Measurement ID (Staging) | `G-YYYYYYYYYY` |
| `SITE_URL` | Production site URL | `https://your-domain.com` |

### Adding Secrets to GitHub

```bash
# Via GitHub CLI
gh secret set FIREBASE_SERVICE_ACCOUNT < firebase-service-account.json
gh secret set GA_MEASUREMENT_ID --body "G-XXXXXXXXXX"
```

**Or via GitHub UI:**
1. Go to repo Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Enter name and value
4. Click "Add secret"

---

## Firebase Service Account

### Generate Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project
3. Go to Project Settings > Service Accounts
4. Click "Generate new private key"
5. Download JSON file

**⚠️ CRITICAL: Never commit this file to Git**

### Add to GitHub Secrets

```bash
# Copy entire JSON content
cat firebase-service-account.json | gh secret set FIREBASE_SERVICE_ACCOUNT
```

### Use in GitHub Actions

```yaml
- name: Deploy to Firebase
  uses: FirebaseExtended/action-hosting-deploy@v0
  with:
    firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
    projectId: your-firebase-project-id
```

---

## Security Best Practices

### 1. Never Commit Secrets to Git

**Add to .gitignore:**
```
# .gitignore

# Environment variables
.env
.env.local
.env.staging
.env.production

# Firebase
firebase-service-account.json
.firebase/

# Other secrets
*.key
*.pem
```

### 2. Rotate Secrets Regularly

**Schedule:**
- Firebase service account: Every 90 days
- GA4 Measurement ID: Only if compromised

**Process:**
1. Generate new key/ID
2. Update in GitHub Secrets
3. Deploy to verify
4. Revoke old key/ID

### 3. Principle of Least Privilege

**Firebase Service Account Permissions:**
- Only grant `Firebase Hosting Admin` role
- Do not grant `Owner` or `Editor`

### 4. Audit Secret Access

**GitHub:**
- Review "Actions secrets" access logs
- Monitor who can edit secrets (limit to admins)

**Firebase:**
- Review service account usage in IAM logs
- Monitor for unusual deployment activity

---

## Environment Variable Loading Order

**Next.js loads in this order (first found wins):**

1. `process.env` (system environment variables)
2. `.env.$(NODE_ENV).local` (e.g., `.env.production.local`)
3. `.env.local` (not loaded if NODE_ENV=test)
4. `.env.$(NODE_ENV)` (e.g., `.env.production`)
5. `.env`

**Best Practice:**
- Use `.env.local` for local development secrets
- Use `.env.production` for production defaults (commit to Git)
- Override in CI/CD with GitHub Secrets

---

## CI/CD Environment Variables

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml

jobs:
  deploy-production:
    runs-on: ubuntu-latest
    steps:
      - name: Build Next.js
        run: npm run build
        env:
          # Expose secrets as environment variables during build
          NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.GA_MEASUREMENT_ID }}
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
          NODE_ENV: production

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-firebase-project-id
```

---

## Feature Flags

### Using Environment Variables as Feature Flags

```ts
// lib/env.ts
export const featureFlags = {
  // Development-only features
  showDebugPanel: env.ENABLE_DEBUG,
  showPerformanceMetrics: env.SHOW_PERFORMANCE_METRICS,

  // Gradual rollouts (future)
  enableNewCalculator: env.NEXT_PUBLIC_ENABLE_NEW_CALCULATOR === 'true',
  enableBetaFeatures: env.NEXT_PUBLIC_ENABLE_BETA === 'true',
} as const
```

**Usage:**
```tsx
import { featureFlags } from '@/lib/env'

export default function CalculatorPage() {
  return (
    <div>
      <Calculator />
      {featureFlags.showDebugPanel && <DebugPanel />}
    </div>
  )
}
```

---

## Configuration Files

### Site Configuration

```ts
// lib/config/site.config.ts
import { env } from '@/lib/env'

export const siteConfig = {
  name: env.SITE_NAME,
  url: env.SITE_URL,
  description: 'Free calculators and guides for TikTok creators',
  ogImage: `${env.SITE_URL}/images/og-default.png`,

  links: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourorg/tiktok-calculator',
  },

  creator: {
    name: 'Your Organization',
    url: env.SITE_URL,
  },
} as const
```

---

## Troubleshooting

### Environment Variable Not Loading

**Problem:** `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID` is `undefined`

**Solutions:**
1. **Check prefix:** Must start with `NEXT_PUBLIC_` for client-side access
2. **Restart dev server:** Changes to `.env.local` require restart
3. **Check file name:** Must be exactly `.env.local` (not `.env-local`)
4. **Check location:** Must be in project root (same directory as `package.json`)

### Build-Time vs Runtime

**Problem:** Variable works locally but not in production

**Solution:**
- Environment variables are embedded at **build time**
- Changing variables requires rebuild
- Cannot change after deployment (unless using API routes)

### GitHub Actions Secret Not Working

**Problem:** Deployment fails with "secret not found"

**Solutions:**
1. **Check secret name:** Must match exactly (case-sensitive)
2. **Check secret scope:** Repo secrets vs organization secrets
3. **Check workflow file:** Verify `${{ secrets.SECRET_NAME }}` syntax
4. **Re-add secret:** Sometimes secrets get corrupted, delete and re-add

---

## Acceptance Criteria

✅ **Environment Files:** Development, staging, production env files defined
✅ **Type Safety:** Environment variable TypeScript wrapper created
✅ **GitHub Secrets:** All required secrets documented
✅ **Security:** .gitignore configured, secrets never committed
✅ **CI/CD:** Environment variables integrated into deployment workflow
✅ **Feature Flags:** Feature flag system implemented
✅ **Documentation:** Team trained on adding/rotating secrets

---

## Handoff Checklist

- [ ] `.env.local` created for local development
- [ ] `.env.production` committed to Git (no secrets)
- [ ] GitHub Secrets added (FIREBASE_SERVICE_ACCOUNT, GA_MEASUREMENT_ID)
- [ ] Firebase service account JSON securely stored (password manager)
- [ ] `.gitignore` includes all secret files
- [ ] Type-safe env wrapper (`lib/env.ts`) implemented
- [ ] Team trained on environment variable best practices
- [ ] Secret rotation schedule documented
- [ ] CI/CD workflow tested with production secrets

---

**Version:** 1.0
**Last Updated:** 2025-11-13
**Status:** Approved — Ready for Implementation
