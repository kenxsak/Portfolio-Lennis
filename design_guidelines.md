# Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from award-winning creative portfolios (Awwwards, Bruno Simon, ActiveTheory) that masterfully combine WebGL, scroll animations, and immersive experiences. This portfolio leverages cutting-edge web technologies to create a memorable, interactive showcase.

## Core Design Principles
1. **Immersive Storytelling**: Each section reveals itself through scroll-triggered animations
2. **Technical Showcase**: WebGL and GSAP demonstrate technical prowess while enhancing UX
3. **Generous Scrolling**: 8-12 distinct sections create a journey through the portfolio
4. **Performance-Conscious Spectacle**: Impressive visuals that remain performant

## Typography System
- **Primary Font**: Inter or Space Grotesk (Google Fonts) - modern, technical aesthetic
- **Display Font**: Optional: Outfit or Syne for hero headlines
- **Hierarchy**:
  - Hero Headline: text-6xl to text-8xl font-bold
  - Section Headers: text-4xl to text-5xl font-semibold
  - Project Titles: text-2xl to text-3xl font-medium
  - Body Text: text-base to text-lg font-normal
  - Captions: text-sm font-light

## Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24, 32 (p-4, gap-8, mt-12, py-16, etc.)
- Section padding: py-24 to py-32 on desktop, py-16 on mobile
- Container: max-w-7xl with px-6 to px-8
- Grid gaps: gap-8 to gap-12

## Section Architecture (Long-Scrolling Structure)

### 1. Hero Section (100vh)
- Full-viewport WebGL canvas background with interactive particle system or 3D scene
- Large hero image optional: If included, use professional headshot or workspace photo with WebGL overlay effects
- Centered typographic hierarchy with animated entrance
- Scroll indicator with GSAP pulse animation
- Hero text: Name + role/tagline with staggered reveal

### 2. About/Introduction (80vh)
- Two-column layout: Left side text (max-w-2xl), right side WebGL visual element or profile image
- Animated counter stats (years of experience, projects completed, clients served)
- Text reveals on scroll with GSAP SplitText or fade-up animations

### 3. Skills Showcase (100vh)
- Interactive skill cloud or animated grid with WebGL background particles
- Skill cards with hover states and 3D transforms
- Categorized: Technical Skills, Design Tools, Frameworks
- Floating labels with parallax depth effects

### 4. Featured Projects Grid (Multi-section: 2-3 viewports)
- Masonry or staggered grid layout (2-3 columns on desktop)
- Each project card includes: Large preview image, title, tech stack tags, brief description
- Hover reveals with GSAP scale/blur effects
- Scroll-triggered entrance animations (stagger by 0.1s per card)
- Click to expand modal or dedicated project page

### 5. Project Deep Dive Sections (2-3 featured projects, ~120vh each)
- Full-width layouts with alternating image/text positions
- Large project screenshots or mockups (use placeholder images)
- Project description, role, technologies, outcomes
- WebGL transition effects between projects
- Case study format: Challenge → Solution → Result

### 6. Process/Methodology Section (80vh)
- Horizontal timeline or step-by-step cards
- Icons representing each phase (Design → Develop → Deploy)
- Animated progression line with GSAP DrawSVG or morphing paths
- Brief descriptions with scroll-triggered reveals

### 7. Testimonials/Recognition (60-80vh)
- Rotating testimonials with GSAP carousel
- Quote cards with client name, role, company
- Optional: Award badges or certification logos
- Subtle parallax background

### 8. Tech Stack Visualization (60vh)
- Animated logo grid or orbital arrangement (WebGL)
- Technologies orbiting around central element
- Interactive hover states with GSAP scale/glow effects
- Categories: Frontend, Backend, Tools, Design

### 9. Contact/CTA Section (80-100vh)
- Split layout: Contact form on left, WebGL interactive element on right
- Form fields: Name, Email, Message with floating labels
- Social media links with animated icons
- Email address and location (if desired)
- Submit button with GSAP morph/success state

### 10. Footer (40vh)
- Minimal navigation links
- Copyright and build credits
- Social links repeated
- "Back to top" animated button

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-md)
- Logo/name on left, navigation links on right
- Hamburger menu for mobile
- Active section indicator with GSAP smooth transition
- Scroll progress bar at top (thin, animated width)

### Project Cards
- Rounded corners (rounded-xl to rounded-2xl)
- Image aspect ratio: 16:9 or 4:3
- Overlay gradient on hover with GSAP opacity transition
- Tech stack tags as small pills below title
- "View Project" CTA appears on hover

### Interactive Elements
- Cursor follower (optional): Custom cursor with GSAP smooth follow
- Magnetic buttons: Elements that follow cursor proximity with GSAP
- Parallax layers: Multiple depth levels throughout sections

### WebGL Integration Points
- Hero background: Particle system or animated gradient mesh
- Section transitions: Morphing shapes or wave distortions
- Skills section: Interactive 3D elements
- Project backgrounds: Subtle animated textures
- Contact section: Interactive 3D object (e.g., rotating globe, abstract shape)

## Animation Strategy
**GSAP ScrollTrigger Patterns**:
- Fade-up on scroll: Stagger text and card elements
- Parallax: Different scroll speeds for background/foreground
- Pin sections: Temporarily pin sections while animations play
- Scrub animations: Progress tied directly to scroll position
- Horizontal scroll: Optional horizontal project carousel section

**Lenis Smooth Scroll**:
- Configure with lerp: 0.1 for buttery smoothness
- Sync with GSAP ScrollTrigger via Lenis callback
- Disable smooth scroll on mobile for performance

## Accessibility Considerations
- Maintain focus states on all interactive elements
- Prefers-reduced-motion: Disable complex animations, maintain functionality
- Keyboard navigation for all sections and links
- Alt text for all project images and screenshots
- Sufficient contrast ratios for text overlays on WebGL backgrounds

## Images
**Required Images**:
1. **Hero**: Professional headshot or workspace photo (1920x1080+) - WebGL overlay will add visual interest
2. **Project Previews**: 6-9 project screenshots/mockups (1600x900 each) showing diverse work
3. **Featured Project Deep Dives**: 2-3 high-res project images per featured case study
4. **About Section**: Optional workspace or candid professional photo
5. **All images should be optimized, use lazy loading for below-fold content**

## Performance Notes
- Lazy load WebGL contexts for below-fold sections
- Use intersection observers to trigger GSAP animations only when in viewport
- Optimize WebGL shaders for mobile devices
- Preload critical hero assets, defer others

This portfolio maximizes visual impact through strategic use of WebGL and GSAP while maintaining professional credibility and usability. The long-scrolling format creates an engaging narrative journey through your work.