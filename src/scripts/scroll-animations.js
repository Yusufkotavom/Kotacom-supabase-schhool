// Scroll Animation Script
class ScrollAnimations {
  constructor() {
    this.elements = [];
    this.observer = null;
    this.init();
  }

  init() {
    // Wait for DOM to load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
  }

  setupAnimations() {
    // Get all elements with reveal-on-scroll class
    this.elements = document.querySelectorAll('.reveal-on-scroll');

    if (this.elements.length === 0) return;

    // Set initial state
    this.elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Create intersection observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.revealElement(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Start observing elements
    this.elements.forEach(element => {
      this.observer.observe(element);
    });

    // Add staggered animation for multiple elements
    this.addStaggeredAnimation();
  }

  revealElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';

    // Stop observing once revealed
    this.observer.unobserve(element);
  }

  addStaggeredAnimation() {
    // Add staggered delay for elements in the same container
    const containers = document.querySelectorAll('.grid, .flex');

    containers.forEach(container => {
      const children = container.querySelectorAll('.reveal-on-scroll');
      if (children.length > 1) {
        children.forEach((child, index) => {
          if (index > 0) {
            child.style.transitionDelay = `${index * 0.1}s`;
          }
        });
      }
    });
  }

  // Method to manually trigger animation (useful for dynamic content)
  reveal(element) {
    if (element && element.classList.contains('reveal-on-scroll')) {
      this.revealElement(element);
    }
  }

  // Method to add new elements to observe
  addElements(selector) {
    const newElements = document.querySelectorAll(selector);
    newElements.forEach(element => {
      if (!this.elements.contains(element)) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        this.elements.push(element);
        this.observer.observe(element);
      }
    });
  }
}

// Initialize scroll animations
if (typeof window !== 'undefined') {
  window.scrollAnimations = new ScrollAnimations();
}

// Export for module usage
export default ScrollAnimations;
