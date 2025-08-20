// Performance optimization utilities

/**
 * Debounce function to limit function calls
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function calls
 */
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

/**
 * Preload image for better performance
 */
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preload multiple images
 */
export function preloadImages(sources) {
  return Promise.all(sources.map(src => preloadImage(src)));
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImages(selector = 'img[data-src]') {
  const images = document.querySelectorAll(selector);
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
}

/**
 * Optimize scroll performance
 */
export function optimizeScroll(callback) {
  let ticking = false;
  
  return function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Measure performance metrics
 */
export function measurePerformance() {
  return new Promise((resolve) => {
    if (window.performance && window.performance.getEntriesByType) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadEvent: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      };
      
      resolve(metrics);
    } else {
      resolve(null);
    }
  });
}

/**
 * Add loading states to elements
 */
export function addLoadingState(element, loadingClass = 'loading') {
  element.classList.add(loadingClass);
  return () => element.classList.remove(loadingClass);
}

/**
 * Optimize images with WebP support
 */
export function optimizeImageSrc(src, fallback = true) {
  if (typeof window === 'undefined') return src;
  
  // Check if WebP is supported
  const webpSupported = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
  
  if (webpSupported && src.match(/\.(png|jpg|jpeg)$/i)) {
    return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }
  
  return src;
}

/**
 * Cache DOM queries
 */
export function createDOMCache() {
  const cache = new Map();
  
  return function(selector) {
    if (cache.has(selector)) {
      return cache.get(selector);
    }
    
    const element = document.querySelector(selector);
    cache.set(selector, element);
    return element;
  };
}

/**
 * Optimize event listeners
 */
export function addOptimizedEventListener(element, event, handler, options = {}) {
  const optimizedHandler = debounce(handler, options.debounce || 0);
  element.addEventListener(event, optimizedHandler, options);
  return () => element.removeEventListener(event, optimizedHandler);
}