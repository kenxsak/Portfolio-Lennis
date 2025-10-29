# Portfolio Website - Creative Developer Showcase

## Overview

A modern, immersive portfolio website built to showcase creative development work through interactive animations, WebGL graphics, and scroll-driven storytelling. The application features a single-page design with multiple sections including hero, about, skills showcase, project galleries, testimonials, and contact forms. Built with React, TypeScript, and a full-stack Express backend, the portfolio emphasizes visual spectacle while maintaining performance and accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering**
- React 18 with TypeScript for type-safe component development
- Single-page application (SPA) using Wouter for lightweight routing
- Vite as the build tool and development server with HMR support
- All routes resolve to the Portfolio component for seamless navigation

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent design language
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, tooltips, etc.)
- Tailwind CSS for utility-first styling with custom design tokens
- CSS custom properties for theme variables supporting light/dark modes
- Component aliases configured for clean imports (@/components, @/lib, @/hooks)

**Animation & Visual Effects**
- GSAP (GreenSock Animation Platform) for scroll-triggered animations and complex transitions
- Lenis smooth scroll library integrated with GSAP's ScrollTrigger
- Three.js for WebGL 3D graphics and particle systems
- Custom WebGLBackground component with variants (particles, gradient, waves)
- Scroll progress indicators and parallax effects throughout sections

**Design System**
- Typography: Inter and Space Grotesk from Google Fonts
- Spacing based on Tailwind's 4px scale (p-4, gap-8, py-16, etc.)
- Color system using HSL values with CSS variables for theming
- Custom border radius values (9px, 6px, 3px)
- Hover and active state elevation effects via CSS classes

**Section Architecture**
The portfolio follows a long-scrolling structure with distinct sections:
1. Hero - Full viewport with WebGL background and animated typography
2. About - Two-column layout with animated counters
3. Skills - Interactive badge cloud with category filtering
4. Projects - Grid layout with hover effects and project cards
5. ProjectDeepDive - Detailed case studies for featured projects
6. Process - Step-by-step workflow visualization
7. Testimonials - Carousel with client feedback
8. TechStack - Technology icons with animated entrance
9. Contact - Form with validation and WebGL background
10. Footer - Social links and scroll-to-top functionality

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- ESM module system (type: "module" in package.json)
- Development mode uses tsx for hot-reloading
- Production build with esbuild bundling

**API Structure**
- RESTful endpoint pattern with `/api` prefix
- POST `/api/contact` - Contact form submission handler
- Request logging middleware tracking API calls, duration, and responses
- JSON body parsing with raw body verification support for webhooks

**Session & Storage**
- In-memory storage implementation (MemStorage class)
- IStorage interface defining CRUD operations for users
- Session management via connect-pg-simple (configured for PostgreSQL)
- Placeholder user system with UUID-based IDs

**Development Experience**
- Vite dev server integrated as Express middleware in development
- Custom logging with timestamp formatting
- Runtime error overlay via Replit plugin
- Static file serving for production builds

### Data Layer

**Database Configuration**
- Drizzle ORM configured for PostgreSQL via @neondatabase/serverless
- Schema defined in shared/schema.ts for type sharing between client/server
- Migrations output to ./migrations directory
- Database URL required via DATABASE_URL environment variable

**Data Models**
- Project: Portfolio project with metadata (title, description, images, tags, role, year, case study fields)
- Skill: Technology skill with categorization (frontend/backend/tools/design)
- Testimonial: Client testimonial with author, role, company
- ContactFormData: Contact form submissions with Zod validation schema

**Validation**
- Zod schemas for runtime type checking and form validation
- contactFormSchema validates name (min 2 chars), email format, message (min 10 chars)
- drizzle-zod integration for database schema validation

### State Management

**Data Fetching**
- TanStack Query (React Query) for server state management
- Custom queryClient with disabled refetching (staleTime: Infinity)
- Custom getQueryFn helper supporting 401 unauthorized handling
- apiRequest utility for consistent fetch operations with error handling

**Form State**
- React Hook Form for form state and validation
- Hookform resolvers for Zod schema integration
- Controlled components with FormField, FormItem, FormControl pattern

### External Dependencies

**UI & Styling**
- Tailwind CSS with PostCSS for CSS processing
- class-variance-authority for component variant management
- clsx and tailwind-merge (via cn utility) for className composition
- Autoprefixer for cross-browser CSS compatibility

**Animation Libraries**
- GSAP with ScrollTrigger plugin for scroll animations
- Lenis for smooth scrolling physics
- Three.js for 3D graphics and WebGL rendering
- Embla Carousel for carousel/slider components

**Component Libraries**
- Complete Radix UI suite (accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- cmdk for command palette interface
- react-icons/si for technology stack icons
- Lucide React for general iconography

**Development Tools**
- @replit/vite-plugin-runtime-error-modal for error overlays
- @replit/vite-plugin-cartographer for Replit integration
- @replit/vite-plugin-dev-banner for development mode indicator
- date-fns for date formatting utilities

**Asset Management**
- Static assets served from attached_assets directory (aliased as @assets)
- Generated project images stored in attached_assets/generated_images
- Favicon and other static resources in public directory