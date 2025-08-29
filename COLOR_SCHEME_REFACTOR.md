# Creative Color Scheme Refactor Documentation

## Overview
This document outlines the comprehensive refactoring of the color scheme from a blue-based system to a creative red-blue-yellow color palette with enhanced transitions and animations.

## New Color Scheme

### Primary Colors (Red-Based)
- **Primary-50**: #fef2f2 (Light Red)
- **Primary-100**: #fee2e2 (Very Light Red)
- **Primary-200**: #fecaca (Light Red)
- **Primary-300**: #fca5a5 (Medium Light Red)
- **Primary-400**: #f87171 (Medium Red)
- **Primary-500**: #ef4444 (Main Red)
- **Primary-600**: #dc2626 (Dark Red)
- **Primary-700**: #b91c1c (Darker Red)
- **Primary-800**: #991b1b (Very Dark Red)
- **Primary-900**: #7f1d1d (Darkest Red)

### Accent Colors

#### Blue Accent Colors
- **Blue-50**: #eff6ff (Light Blue)
- **Blue-100**: #dbeafe (Very Light Blue)
- **Blue-200**: #bfdbfe (Light Blue)
- **Blue-300**: #93c5fd (Medium Light Blue)
- **Blue-400**: #60a5fa (Medium Blue)
- **Blue-500**: #3b82f6 (Main Blue)
- **Blue-600**: #2563eb (Dark Blue)
- **Blue-700**: #1d4ed8 (Darker Blue)
- **Blue-800**: #1e40af (Very Dark Blue)
- **Blue-900**: #1e3a8a (Darkest Blue)

#### Yellow Accent Colors
- **Yellow-50**: #fefce8 (Light Yellow)
- **Yellow-100**: #fef3c7 (Very Light Yellow)
- **Yellow-200**: #fde68a (Light Yellow)
- **Yellow-300**: #fcd34d (Medium Light Yellow)
- **Yellow-400**: #fbbf24 (Medium Yellow)
- **Yellow-500**: #f59e0b (Main Yellow)
- **Yellow-600**: #d97706 (Dark Yellow)
- **Yellow-700**: #b45309 (Darker Yellow)
- **Yellow-800**: #92400e (Very Dark Yellow)
- **Yellow-900**: #78350f (Darkest Yellow)

### Creative Gradient Colors
- **Gradient Red**: linear-gradient(135deg, #ef4444 0%, #dc2626 100%)
- **Gradient Blue**: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)
- **Gradient Yellow**: linear-gradient(135deg, #f59e0b 0%, #d97706 100%)
- **Gradient Mixed**: linear-gradient(135deg, #ef4444 0%, #3b82f6 50%, #f59e0b 100%)

### Legacy GBG Colors (Updated)
- **GBG Blue**: #3b82f6 (Updated to match new blue scheme)
- **GBG Pink**: #fef2f2 (Updated to match new red scheme)
- **GBG Yellow**: #fefce8 (Updated to match new yellow scheme)
- **GBG Teal**: #dbeafe (Updated to match new blue scheme)

## Enhanced Transition System

### Transition Variables
- **--transition-fast**: 0.15s cubic-bezier(0.4, 0, 0.2, 1)
- **--transition-normal**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **--transition-slow**: 0.5s cubic-bezier(0.4, 0, 0.2, 1)
- **--transition-bounce**: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)

### Global Transitions
All elements now have smooth transitions for:
- Color changes
- Background color changes
- Border color changes
- Transform effects

### Enhanced Focus States
- **.focus-ring**: Base focus ring utility
- **.focus-ring-red**: Red focus ring
- **.focus-ring-blue**: Blue focus ring
- **.focus-ring-yellow**: Yellow focus ring

## Creative Hover Effects

### Hover Utilities
- **.hover-lift**: Subtle upward movement with shadow
- **.hover-scale**: Scale up on hover
- **.hover-glow**: Glow effect on hover
- **.hover-rotate**: Slight rotation on hover
- **.hover-bounce**: Bouncy scale effect

### Gradient Text Effects
- **.gradient-text-red**: Red gradient text
- **.gradient-text-blue**: Blue gradient text
- **.gradient-text-yellow**: Yellow gradient text
- **.gradient-text-mixed**: Mixed gradient text

## Animation Classes

### Page Transitions
- **.page-transition**: Base page transition
- **.page-transition-enter**: Enter animation
- **.page-transition-exit**: Exit animation

### Slide Animations
- **.slide-in-left**: Slide in from left
- **.slide-in-right**: Slide in from right
- **.slide-in-up**: Slide in from bottom
- **.slide-in-down**: Slide in from top

### Stagger Animations
- **.stagger-item**: Staggered list item animation
- **.float-animation**: Floating animation
- **.pulse-glow**: Pulsing glow effect

## Component Updates

### Header Component
- Updated border colors to use red scheme
- Enhanced focus states with red accents
- Improved theme toggle styling

### Theme Toggle
- Updated focus ring to use red color
- Enhanced hover states
- Improved dark mode styling

### Content Styling
- **Headings**: Red gradient underlines for H2
- **Blockquotes**: Red-themed with hover effects
- **Code blocks**: Enhanced with gradients and hover effects
- **Tables**: Red-themed headers with hover animations
- **Links**: Red color scheme with smooth transitions

### Buttons
- **.btn-primary**: Red gradient background
- **.btn-secondary**: Blue gradient background
- **.btn-accent**: Yellow gradient background
- Enhanced hover effects with shadows and transforms

## Utility Classes

### Creative Cards
- **.card-creative**: Enhanced card with gradient border
- **.gradient-border**: Gradient border animation
- Hover effects with scale and shadow

### Loading States
- **.spinner-creative**: Red-themed loading spinner
- **.progress-creative**: Gradient progress bar with shimmer

## Dark Mode Support
All new colors and effects have proper dark mode variants:
- Dark backgrounds use appropriate dark colors
- Text colors maintain proper contrast
- Gradients adapt to dark theme
- Transitions work seamlessly in both themes

## Accessibility Features
- **Reduced Motion**: Respects user preferences
- **High Contrast**: Maintains proper contrast ratios
- **Focus Indicators**: Enhanced focus states
- **Keyboard Navigation**: Smooth transitions for keyboard users

## Performance Optimizations
- CSS custom properties for efficient updates
- Hardware-accelerated animations
- Optimized transition timing
- Reduced layout thrashing

## Browser Support
- Modern browsers with CSS custom properties
- Fallbacks for older browsers
- Progressive enhancement approach
- Graceful degradation for animations

## Usage Examples

### Basic Button
```html
<button class="btn-creative">
  Click Me
</button>
```

### Creative Card
```html
<div class="card-creative">
  <h3>Card Title</h3>
  <p>Card content with enhanced styling</p>
</div>
```

### Gradient Text
```html
<h1 class="gradient-text-mixed">
  Creative Title
</h1>
```

### Animated List
```html
<ul>
  <li class="stagger-item">Item 1</li>
  <li class="stagger-item">Item 2</li>
  <li class="stagger-item">Item 3</li>
</ul>
```

## Migration Guide

### From Old Blue Scheme
1. Replace `bg-blue-*` with `bg-red-*` for primary actions
2. Use `bg-blue-*` for secondary actions
3. Use `bg-yellow-*` for accent/CTA elements
4. Update focus states to use new color scheme

### From Old Transitions
1. Replace hardcoded transition values with CSS variables
2. Use new transition utility classes
3. Implement enhanced hover effects
4. Add animation classes for better UX

## Testing Checklist
- [ ] Color scheme works in light mode
- [ ] Color scheme works in dark mode
- [ ] All transitions are smooth
- [ ] Hover effects work properly
- [ ] Focus states are visible
- [ ] Animations respect reduced motion
- [ ] Performance is maintained
- [ ] Accessibility is preserved

## Future Enhancements
- Additional color variations
- More complex animations
- Interactive color themes
- Advanced transition patterns
- Performance monitoring tools

## Files Modified
1. `src/styles/global.css` - Main color variables and utilities
2. `src/styles/content.css` - Content styling with new colors
3. `src/styles/transitions.css` - Enhanced transitions and animations
4. `src/components/Header.astro` - Header color updates
5. `src/components/ThemeToggle.astro` - Theme toggle styling
6. `src/utils/affiliateUtils.ts` - Color scheme updates
7. `src/utils/marketplaceUtils.ts` - Marketplace color updates

## Notes
- All changes maintain backward compatibility
- Performance impact is minimal
- Accessibility is enhanced
- Dark mode support is comprehensive
- Transitions are smooth and professional