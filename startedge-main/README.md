# Startedge Global Pvt. Ltd. | Premium Consulting Website

This is the official website for Startedge Global Pvt. Ltd., a premier strategic business consulting and leadership development firm. The website features a high-end, modern, and responsive design, built using modern web development technologies to ensure performance, maintainability, and a premium user experience.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Prerequisites

Before setting up the project, make sure you have the following installed on your local machine:

- **Node.js**: v18.x or higher (v20+ recommended)
- **npm** (comes with Node.js) or **yarn** / **pnpm** / **bun**

## Getting Started

Follow these steps to set up the project locally:

1. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using another package manager:
   ```bash
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the outcome. The page will auto-update as you edit files.

## Project Structure

- `/src/app`: Contains the Next.js App Router files (`layout.tsx`, `page.tsx`). The main entry point for the website is `src/app/page.tsx`.
- `/src/components`: Contains all the reusable UI components (e.g., `Hero.tsx`, `Navbar.tsx`, `Leadership.tsx`, `Footer.tsx`). These are modular to make editing specific sections easier.
- `/public/images`: Stores all the static images used across the website, such as logos, leadership team photos, and gallery images.
- `/src/app/globals.css`: Contains global Tailwind/CSS styles and custom CSS configurations.

## How to Edit Content

### Updating Text and Content
Most of the text, titles, and copy are coded directly within the respective components found in `/src/components`. 
For instance, to modify the "Leadership" section, simply go to `src/components/Leadership.tsx` and update the content within the component.

### Managing Images
1. Place new images in the `/public/images/` directory.
2. In the Next.js components, reference them with the absolute path starting from the root of the public folder. For example, if you add `team-photo.png`, use `<Image src="/images/team-photo.png" alt="..." fill />`.

## Available Scripts

- `npm run dev`: Starts the application in development mode with Hot-Module Replacement (HMR).
- `npm run build`: Compiles and optimizes the application for production deployment.
- `npm run start`: Runs the compiled Next.js application in production mode.
- `npm run lint`: Runs ESLint to check for code quality and syntax errors.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect that it's a Next.js app and configure the build settings (`npm run build`).
4. Click Deploy!

For deploying to other hosting providers, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
