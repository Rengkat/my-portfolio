# Alexander Rengkat — Developer Portfolio

A personal portfolio website for **Alexander Rengkat**, a Full-Stack Developer & UI/UX Enthusiast. The site showcases projects, work experience, education, skills, blog posts, and a contact form — all powered by a headless CMS ([Sanity.io](https://www.sanity.io/)) and built with **React + Vite + TypeScript**.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Sections](#pages--sections)
  - [Home](#home)
  - [Projects](#projects)
  - [Blogs](#blogs)
- [Key Features](#key-features)
- [Content Management (Sanity CMS)](#content-management-sanity-cms)
- [State Management](#state-management)
- [Animations](#animations)
- [Contact Form (EmailJS)](#contact-form-emailjs)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)

---

## Overview

This portfolio is a single-page-style application built with React Router v6. It presents Alexander's professional profile across three main routes — a rich home page with multiple sections, a dedicated projects gallery with category filtering, and a blog listing powered entirely by Sanity's content lake. All dynamic content (projects, blogs, testimonials) is fetched at runtime from Sanity using GROQ queries.

---

## Live Demo

> Add your live URL here once deployed (e.g. `https://alexanderrengkat.vercel.app`)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite 4](https://vitejs.dev/) | Build tool and dev server |
| [TypeScript 5](https://www.typescriptlang.org/) | Static typing |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling with custom gradient animations |
| [Framer Motion](https://www.framer.com/motion/) | Page and element animations |
| [Sanity.io](https://www.sanity.io/) | Headless CMS for projects, blogs, and testimonials |
| [@sanity/client](https://www.npmjs.com/package/@sanity/client) | Sanity GROQ query client |
| [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url) | Sanity image URL builder |
| [EmailJS](https://www.emailjs.com/) | Contact form email delivery (no backend required) |
| [MUI (Material UI)](https://mui.com/) | Icons and select UI components |
| [React Icons](https://react-icons.github.io/react-icons/) | Tech stack and UI icons |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Scroll-triggered animations |
| [react-portable-text](https://www.npmjs.com/package/react-portable-text) | Rendering Sanity Portable Text content |

---

## Project Structure

```
src/
├── App.tsx                        # Route definitions
├── main.tsx                       # App entry point with Provider + Router
├── SharedRoute.tsx                # Layout wrapper (Footer, sidebar overlay, back-to-top)
├── index.css                      # Global styles
│
├── Home/
│   └── Index.tsx                  # Home page — composes all homepage sections
│
├── Projects/
│   ├── Index.tsx                  # Projects listing page with category filter
│   ├── SingleProject.tsx          # Individual project card
│   └── SharedRoute.tsx            # Projects layout wrapper (Outlet)
│
├── DetailProject/
│   └── Index.tsx                  # Full project detail page (fetched by slug)
│
├── Blogs/
│   ├── Index.tsx                  # Blog listing with category/tag filter
│   └── Blog.tsx                   # Individual blog card component
│
├── Components/                    # Shared/reusable components
│   ├── Nav.tsx                    # Top navigation bar
│   ├── SideBar.tsx                # Mobile sidebar menu
│   ├── Hero.tsx                   # Full-screen hero section
│   ├── HeroComponent.tsx          # Reusable hero banner for sub-pages
│   ├── PersonalDetail.tsx         # About me section
│   ├── Education.tsx              # Education timeline
│   ├── Experiances.tsx            # Work experience timeline
│   ├── Skills.tsx                 # Skills grid with tech icons
│   ├── ProjectShow.tsx            # Projects preview on homepage
│   ├── Testimonials.tsx           # Auto-rotating testimonials carousel
│   ├── Hire.tsx                   # "Hire Me" CTA section
│   ├── BlogsShowcase.tsx          # Blog preview on homepage
│   ├── ContactForm.tsx            # EmailJS-powered contact form
│   ├── SingleBlog.tsx             # Reusable blog item component
│   ├── Footer.tsx                 # Site footer
│   └── Particles.tsx              # Animated particle background for hero
│
├── Context/
│   ├── AppContext.tsx             # Global context provider (data fetching + state)
│   └── Reducer.tsx                # useReducer reducer for global state
│
├── Types/
│   └── index.tsx                  # TypeScript interfaces + date utility
│
├── assets/                        # Static images and media
│
└── public/
    └── logo.png                   # Site logo

lib/
└── sanity.ts                      # Sanity client + image URL builder setup
```

---

## Pages & Sections

### Home

The home page (`/`) is composed of the following sections rendered in order:

| Section | Component | Description |
|---|---|---|
| **Hero** | `Hero.tsx` | Full-screen section with name, title, animated particle background, teal/cyan gradient overlay, and CTA buttons |
| **About Me** | `PersonalDetail.tsx` | Personal introduction and background |
| **Education** | `Education.tsx` | Academic degrees (University of Nigeria, University of Jos) and online certifications |
| **Experience** | `Experiances.tsx` | Work history timeline with roles, companies, responsibilities, and tech stacks |
| **Skills** | `Skills.tsx` | Visual grid of technology icons covering frontend, backend, databases, tools, and platforms |
| **Projects** | `ProjectShow.tsx` | Featured projects preview with link to the full projects page |
| **Testimonials** | `Testimonials.tsx` | Auto-rotating carousel of client/colleague testimonials fetched from Sanity |
| **Hire Me** | `Hire.tsx` | Call-to-action section encouraging visitors to get in touch |
| **Blog Showcase** | `BlogsShowcase.tsx` | Preview of recent blog posts fetched from Sanity |
| **Contact** | `ContactForm.tsx` | Contact form powered by EmailJS |

---

### Projects

The projects page (`/projects`) features:

- **Full project grid** — All projects fetched from Sanity, displayed as cards with title, subtitle, thumbnail, and GitHub link.
- **Category filtering** — Dynamic filter buttons are built from the unique categories assigned to each project in Sanity. Selecting a category uses `AnimatePresence` for smooth entry/exit animations.
- **Project detail page** (`/projects/:slug`) — Each project has a dedicated detail page fetched at runtime by its Sanity slug, featuring:
  - Auto-rotating image slider (switches every 5 seconds) with manual previous/next controls.
  - Full description, client name, technologies used, GitHub link, and live URL.
  - Back navigation to the projects listing.

---

### Blogs

The blogs page (`/blogs`) features:

- **Blog listing** — All blog posts fetched from Sanity with title, short description, category, tags, publication date, and external URL.
- **Category filter** — Sidebar filter built dynamically from blog categories in Sanity, with a text search input for filtering categories.
- **Tag display** — All unique tags across blogs are listed for reference.
- Blog entries link out to external URLs (e.g. published articles on third-party platforms) rather than hosting full post content internally.

---

## Key Features

- **CMS-driven content** — Projects, blogs, and testimonials are all managed in Sanity Studio with no code changes needed to add or update content.
- **Animated UI** — Extensive use of Framer Motion for scroll-triggered reveals, staggered children, spring animations, hover effects, and image slider transitions.
- **Particle hero background** — Custom animated particle canvas in the hero section for a dynamic visual effect.
- **Mobile-responsive** — Fully responsive layout with a collapsible sidebar for mobile navigation.
- **Scroll-to-top button** — Fixed bottom-right button always visible for quick navigation back to the top.
- **Smooth scrolling** — Section-based anchor navigation with `scroll-smooth` behaviour.
- **Auto-rotating testimonials** — Carousel cycles through testimonials every 8 seconds with a fallback to initials avatar when no photo is available.
- **Gradient animations** — Custom Tailwind keyframes (`gradient-x`, `gradient-y`, `gradient-xy`) for animated gradient text and backgrounds.

---

## Content Management (Sanity CMS)

All dynamic content is managed through Sanity and fetched using GROQ queries. The Sanity client is configured in `lib/sanity.ts`.

### Sanity Document Types

| Type | Fields |
|---|---|
| `projects` | `title`, `slug`, `subtitle`, `mainImage`, `imageSlider`, `description`, `client`, `githubLink`, `liveUrl`, `technologiesUsed`, `category` |
| `blogs` | `title`, `category`, `keywords`, `tags`, `image`, `shortDescription`, `dateOfPublication`, `externalUrl` |
| `testimonial` | `firstName`, `surname`, `testimony`, `image` |

### Image Handling

Sanity images are resolved using the `@sanity/image-url` builder, exposed via the `sanityImageUrl()` utility in `lib/sanity.ts`. This generates optimised, CDN-delivered image URLs from Sanity's image asset references.

---

## State Management

Global state is managed with React's built-in `useContext` + `useReducer` pattern — no external state library is used.

**Context:** `AppContext` (in `Context/AppContext.tsx`) provides:

| State | Type | Description |
|---|---|---|
| `isMainMenuOpen` | `boolean` | Controls the mobile sidebar overlay |
| `projects` | `Project[]` | All projects fetched from Sanity |
| `projectsLoading` | `boolean` | Loading state for projects |
| `blogs` | `Blog[]` | All blogs fetched from Sanity |
| `blogsLoading` | `boolean` | Loading state for blogs |
| `testimonials` | `Testimonials[]` | All testimonials fetched from Sanity |
| `testminialsLoading` | `boolean` | Loading state for testimonials |
| `openMainNav()` | `function` | Toggles the mobile menu |

All three data fetches (projects, blogs, testimonials) happen in `useEffect` hooks on mount inside the `Provider` component, making the data available globally throughout the app immediately on load.

---

## Animations

Framer Motion is used throughout the site for:

- **Hero entrance** — Name, subtitle, and CTA buttons animate in sequentially using spring transitions and stagger delays.
- **Scroll-triggered reveals** — `whileInView` with `viewport={{ once: true }}` is used on most sections so elements animate in once as the user scrolls down.
- **Staggered children** — Experience cards, skill icons, and project cards use `staggerChildren` in container variants for a cascading reveal effect.
- **Project image slider** — `AnimatePresence` handles the enter/exit transitions between images on the detail page.
- **Filter transitions** — The projects grid uses `AnimatePresence` to smoothly animate cards in and out when the category filter changes.
- **Contact form inputs** — Each input field has a staggered `whileInView` entrance animation.

---

## Contact Form (EmailJS)

The contact form in `Components/ContactForm.tsx` uses **EmailJS** to send emails directly from the browser without a backend server.

The form collects:
- Name (`user_name`)
- Email (`user_email`)
- Message (`message`)

It provides four visual states: `idle`, `sending`, `success`, and `error` — with animated feedback messages after submission. The form auto-resets to `idle` after 3 seconds.

Configuration requires three EmailJS environment variables (see [Environment Variables](#environment-variables)).

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- A [Sanity.io](https://www.sanity.io/) account and project with the content schema set up
- An [EmailJS](https://www.emailjs.com/) account with a service and email template configured

### Installation

```bash
# Clone the repository
git clone https://github.com/Rengkat/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
# Sanity CMS
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2021-10-21

# EmailJS
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> All variables must be prefixed with `VITE_` to be exposed to the Vite client bundle.

---

## Scripts

```bash
# Start the development server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

---

## Deployment

The project builds to a standard static output compatible with any static hosting platform.

**Recommended platforms:**
- [Vercel](https://vercel.com/) — zero-config deployment for Vite projects
- [Netlify](https://www.netlify.com/) — Git-connected deployment

**Build settings:**
- Build command: `npm run build`
- Output directory: `dist`

Make sure to add all [environment variables](#environment-variables) in your hosting platform's dashboard before deploying.

---

## Skills Showcased

Based on the Skills section, the portfolio highlights expertise across:

**Frontend:** HTML5, CSS3, JavaScript, TypeScript, React, React Native, Next.js, Tailwind CSS, Sass, Redux, WordPress

**Backend:** Node.js, Express, NestJS

**Databases:** MongoDB, PostgreSQL

**Testing:** Jest, Cypress

**Tools & Platforms:** Git, GitHub, Docker, Vite, Vercel, Netlify

---

*Built with ❤️ by Alexander Rengkat*
