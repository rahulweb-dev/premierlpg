# Commercial LPG Landing Page + Admin Dashboard (Next.js + Firebase)

This is a ready-to-use project for a **Commercial Cooking Gas / LPG Agency** with:

- Landing page with lead form
- Firebase Firestore lead storage
- Firebase Email/Password Authentication
- Admin dashboard at `/dashboard` (protected)
- Admin login at `/login`

## 1. Install dependencies

```bash
npm install
```

## 2. Firebase setup

Create a Firebase project, then create a Web App and copy the config.

Update `.env.local` with your Firebase config values:

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_APP_ID=your_app_id_here
```

Enable:

- Firestore Database
- Authentication → Sign-in method → Email/Password

Create an admin user in Firebase Authentication with:

- Email: `admin@example.com`
- Password: `Test@123` (or your own — update default in `app/login/page.jsx` if you want)

## 3. Run the project

```bash
npm run dev
```

Then open: `http://localhost:3000`

- Landing page: `/`
- Admin login: `/login`
- Dashboard (protected): `/dashboard`

Leads are saved in Firestore collection: `commercial_lpg_leads`.
