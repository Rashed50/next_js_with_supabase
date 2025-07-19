This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

### Install supabase database package

First install the supabase and helper package
 
 ```bash

 npm install @supabase/supabase-js @supabase/ssr
 
```

### Set up environment variables

Create a .env.local file in your project root directory.

Fill in your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY:

 ```bash

NEXT_PUBLIC_SUPABASE_URL = 'Your account subase url' 
NEXT_PUBLIC_SUPABASE_ANON_KEY = 'Your Account Anon key'
 
```

For your better understanding I am giving demo data 

 ```bash

TIERLICH_PUBLIC_SUPABASE_PROJECT_URL= 'https://zokujhnfhgcdlfhbspic.supabase.co'
TIERLICH_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpva3VqaG5maGdjZGxmaGJzcGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MzQ0MjAsImV4cCI6MjA2ODAxMDQyMH0.VROqwLrLW9pIEgyAja-uCySLXTPgTRQdjDp2EwQ2xqI'
TIERLICH_PUBLIC_SUPABASE_ADMIN_KEY= 'SUPABASE_SERVICE_KEY'
 
```



To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
