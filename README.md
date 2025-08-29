# Kotacom Site - School Theme

A modern, colorful, and creative website built with Astro, featuring a school-themed design with blue, red, and yellow color scheme.

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

### Components Updated
- `ProjectCard.astro` - School theme with gradient background
- `ServiceCard.astro` - Enhanced with school colors
- `ProductCard.astro` - Updated styling for school theme
- `PostCard.astro` - New colorful design
- `HomeHero.astro` - Gradient backgrounds and school colors
- `LatestPosts.astro` - Added Lottie separators
- `LatestProducts.astro` - School theme integration
- `LatestProjects.astro` - Enhanced with animations
- `LatestServices.astro` - Colorful updates

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

## 📱 Demo Page

Visit `/school-theme-demo` to see all the new school theme components in action, including:
- Color palette showcase
- Component demonstrations
- Button style examples
- Lottie animation previews

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

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic theme switching
- **Performance Optimized**: Fast loading with Astro
- **SEO Friendly**: Built-in meta tags and structured data
- **Accessibility**: WCAG compliant design patterns

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.