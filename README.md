# Blog Site
This is the codebase for my personal blog website built with Next.js, Sanity, and Tailwind CSS.

## Built With
Next.js - React framework for production
Sanity - Headless CMS for content management
Tailwind CSS - Utility-first CSS framework
React Hook Form - Form validation
next-themes - Dark mode toggle
Features
Light/dark theme toggle
Responsive design
SEO-friendly with next-seo
Blog post content sourced from Sanity
Contact form with form validation
Image optimization with next/image
Site map generation with next-sitemap
Search page with keyword filtering
Archive page for post listings
Dynamic author pages
Embedded videos with react-iframe
Code syntax highlighting with react-refractor
Theme UI styled components
Getting Started
Clone the repo:
<!---->
## Copy code

git clone https://github.com/<your-repo-url>
2.  Navigate into the project directory and install dependencies:

<!---->
Copy code

npm install
3.  Create a .env.local file with your Sanity project ID and dataset name:

<!---->
Copy code

NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId  
NEXT_PUBLIC_SANITY_DATASET=production
4.  Run Next.js in development mode:

<!---->
Copy code

npm run dev
Open http://localhost:3000 to view the site.

To build for production:
<!---->
Copy code

npm run build
## Customization
The main customization points are:

Modifying site metadata in siteConfig.ts
Changing styles and theme colors in styles/theme.ts
Adding new pages under pages directory
Creating new components in components directory
Creating new post templates in components/post
Managing content models in Sanity studio
Let me know if you need any help with setup or customization!
