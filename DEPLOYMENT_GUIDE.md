# 🚀 Deployment Guide - Exclusive E-commerce

## Option 1: Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Paystack account with live keys

### Step 1: Prepare Your Code
1. **Commit all changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add secure Paystack integration with backend API and Vercel deployment setup"
   git push origin main
   ```

### Step 2: Deploy to Vercel
1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure environment variables:**
   - `PAYSTACK_SECRET_KEY` = `sk_live_your_secret_key_here`
   - `PAYSTACK_PUBLIC_KEY` = `pk_live_your_public_key_here`
   - `NODE_ENV` = `production`

### Step 3: Deploy
1. **Click "Deploy"**
2. **Wait for deployment to complete**
3. **Your site will be live at: `https://your-project-name.vercel.app`**

---

## Option 2: Netlify + Railway

### Frontend (Netlify)
1. **Go to [netlify.com](https://netlify.com)**
2. **Connect GitHub repository**
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Environment variables:**
   - `VITE_API_BASE_URL` = `https://your-backend.railway.app`

### Backend (Railway)
1. **Go to [railway.app](https://railway.app)**
2. **Connect GitHub repository**
3. **Select backend folder**
4. **Environment variables:**
   - `PAYSTACK_SECRET_KEY` = `sk_live_your_secret_key_here`
   - `PAYSTACK_PUBLIC_KEY` = `pk_live_your_public_key_here`
   - `NODE_ENV` = `production`
   - `FRONTEND_URL` = `https://your-site.netlify.app`

---

## Option 3: Custom Domain

### After Vercel Deployment
1. **Go to your Vercel dashboard**
2. **Click on your project**
3. **Go to "Settings" → "Domains"**
4. **Add your custom domain**
5. **Update DNS records as instructed**

---

## 🔧 Environment Variables Summary

### Frontend (.env)
```env
VITE_API_BASE_URL=https://your-backend-url.vercel.app
```

### Backend (.env)
```env
PAYSTACK_SECRET_KEY=sk_live_your_secret_key_here
PAYSTACK_PUBLIC_KEY=pk_live_your_public_key_here
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

---

## ✅ Post-Deployment Checklist

- [ ] Test payment flow with test cards
- [ ] Verify email notifications work
- [ ] Check mobile responsiveness
- [ ] Test all pages load correctly
- [ ] Verify SSL certificate is active
- [ ] Test with real payment (small amount)

---

## 🆘 Troubleshooting

### Common Issues:
1. **CORS errors**: Check FRONTEND_URL in backend env vars
2. **Payment fails**: Verify Paystack keys are correct
3. **Build fails**: Check all dependencies are in package.json
4. **API not working**: Verify serverless functions are deployed

### Support:
- Vercel docs: https://vercel.com/docs
- Paystack docs: https://paystack.com/docs
- GitHub issues: Create issue in your repository

---

## 🎉 You're Live!

Once deployed, your secure e-commerce site will be live with:
- ✅ Secure Paystack payments
- ✅ Mobile-responsive design
- ✅ Professional checkout flow
- ✅ Email notifications
- ✅ SSL security
