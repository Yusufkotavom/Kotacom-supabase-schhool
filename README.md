# Kotacom Site - School Theme

A modern, colorful, and creative website built with Astro, featuring a school-themed design with blue, red, and yellow color scheme, page transitions, and scroll reveal animations.

## 🎨 School Theme Features

### Color Scheme
- **Blue**: Primary brand color for buttons, links, and borders
- **Red**: Accent color for highlighting important information
- **Yellow to Orange**: Gradient backgrounds for cards and warm accents

### Design Elements
- **Yellow to Orange Gradient Cards**: All cards now feature beautiful gradient backgrounds
- **Lottie-style Animations**: Simple SVG animations as separators between components
- **Enhanced Shadows & Borders**: More prominent borders and shadows for better visual hierarchy
- **Gradient Text**: Headings use gradient text effects for visual appeal

### New Components
- `PageTransition.astro` - Colorful page transitions with school theme
- `MasonryGallery.astro` - Responsive masonry gallery for school images
- `SchoolFAQ.astro` - Interactive FAQ section with school information
- `SchoolInfo.astro` - School features and statistics showcase
- Updated all existing components with scroll reveal animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd kotacom-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎭 Page Transitions

Smooth, colorful transitions between pages featuring the school theme colors:

```astro
---
import PageTransition from '../components/PageTransition.astro';
---

<!-- Automatically included in MainLayout -->
<PageTransition />
```

**Features:**
- Blue to red to yellow gradient overlay
- School icon with animated decorative elements
- Smooth fade in/out animations
- Works across all pages automatically

## 🖼️ Masonry Gallery

A responsive masonry gallery component for showcasing school images:

```astro
---
import MasonryGallery from '../components/Homepage/MasonryGallery.astro';
---

<MasonryGallery />
```

**Features:**
- Responsive grid layout (1-4 columns)
- Hover effects with category overlays
- Animated decorative elements
- Scroll reveal animations

## ❓ FAQ Component

Interactive FAQ section with school-related questions:

```astro
---
import SchoolFAQ from '../components/Homepage/SchoolFAQ.astro';
---

<SchoolFAQ />
```

**Features:**
- Expandable/collapsible questions
- Smooth animations
- School-themed content
- Contact CTA buttons

## 📊 School Information

Comprehensive school information showcase:

```astro
---
import SchoolInfo from '../components/Homepage/SchoolInfo.astro';
---

<SchoolInfo />
```

**Features:**
- School features grid with icons
- Statistics section
- Call-to-action section
- Scroll reveal animations

## ✨ Scroll Reveal Animations

Every section on the homepage features scroll reveal animations:

```astro
<!-- Basic reveal -->
<div data-reveal="fade-up">Content</div>

<!-- With delay -->
<div data-reveal="fade-up" data-reveal-delay="200">Content</div>

<!-- Different animations -->
<div data-reveal="fade-left">Content</div>
<div data-reveal="fade-right">Content</div>
```

**Available Animations:**
- `fade-up` - Fade in from bottom
- `fade-left` - Fade in from left
- `fade-right` - Fade in from right

## 🎭 Lottie Animation Separators

The `SchoolLottieSeparator.astro` component provides simple SVG animations as visual separators:

```astro
---
import SchoolLottieSeparator from '../components/SchoolLottieSeparator.astro';
---

<!-- Available animations: school, books, pencil, star, heart -->
<SchoolLottieSeparator animation="school" height="h-16" className="mt-8" />
```

### Available Animations
- `school` - School building icon with blue theme
- `books` - Stack of books with red theme  
- `pencil` - Pencil icon with yellow theme
- `star` - Star icon with orange theme
- `heart` - Heart icon with pink theme

## 🎨 CSS Classes

### School Theme Cards
```css
.school-card {
  /* Yellow to orange gradient background */
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  border: 2px solid #3b82f6; /* Blue border */
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
}
```

### Button Styles
```css
.school-btn-primary    /* Blue gradient button */
.school-btn-secondary /* Red gradient button */
.school-btn-accent    /* Yellow to orange gradient button */
```

## 📱 Demo Pages

- `/school-theme-demo` - Complete school theme showcase
- `/test-transitions` - Page transition and scroll reveal testing

## 🏠 Homepage Structure

The new homepage features:
1. **HomeHero** - Hero section with gradient backgrounds
2. **ServicesHighlight** - IT services showcase
3. **MasonryGallery** - School image gallery
4. **SchoolInfo** - School features and statistics
5. **SchoolFAQ** - Interactive FAQ section
6. **ClientTestimonials** - Client feedback
7. **LatestPosts** - Recent blog posts

*Note: Project, Product, and Service sections have been removed from the homepage as requested.*

## 🛠️ Customization

### Adding New Colors
Update `src/styles/global.css` to add new school theme colors:

```css
@theme {
  --color-school-new: #your-color;
  --color-school-new-light: #your-light-color;
  --color-school-new-dark: #your-dark-color;
}
```

### Creating New Animations
Add new animations to `SchoolLottieSeparator.astro`:

```typescript
const animations = {
  // ... existing animations
  newAnimation: {
    path: "your-svg-path",
    color: "#your-color"
  }
};
```

### Adding Scroll Reveal
Use the `data-reveal` attribute on any element:

```astro
<div data-reveal="fade-up" data-reveal-delay="200">
  Your content here
</div>
```

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic theme switching
- **Performance Optimized**: Fast loading with Astro
- **SEO Friendly**: Built-in meta tags and structured data
- **Accessibility**: WCAG compliant design patterns
- **Page Transitions**: Smooth, colorful page transitions
- **Scroll Reveal**: Engaging scroll-based animations
- **School Theme**: Colorful, creative design perfect for education

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.