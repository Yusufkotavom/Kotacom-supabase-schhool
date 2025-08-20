// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Wait for page to load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.measurePerformance());
    } else {
      this.measurePerformance();
    }

    // Measure after page is fully loaded
    window.addEventListener('load', () => this.measureLoadPerformance());
  }

  measurePerformance() {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.metrics.DOMContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      this.metrics.DOMContentLoadedTotal = navigation.domContentLoadedEventEnd - navigation.fetchStart;
    }
  }

  measureLoadPerformance() {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.metrics.loadEvent = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.totalLoadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.firstPaint = this.getFirstPaint();
      this.metrics.firstContentfulPaint = this.getFirstContentfulPaint();
      this.metrics.largestContentfulPaint = this.getLargestContentfulPaint();
    }

    this.logMetrics();
  }

  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  }

  getFirstContentfulPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return firstContentfulPaint ? firstContentfulPaint.startTime : null;
  }

  getLargestContentfulPaint() {
    return new Promise((resolve) => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    });
  }

  logMetrics() {
    console.group('🚀 Performance Metrics');
    console.log('DOM Content Loaded:', this.metrics.DOMContentLoaded, 'ms');
    console.log('DOM Content Loaded Total:', this.metrics.DOMContentLoadedTotal, 'ms');
    console.log('Load Event:', this.metrics.loadEvent, 'ms');
    console.log('Total Load Time:', this.metrics.totalLoadTime, 'ms');
    console.log('First Paint:', this.metrics.firstPaint, 'ms');
    console.log('First Contentful Paint:', this.metrics.firstContentfulPaint, 'ms');
    console.groupEnd();

    // Send metrics to analytics if needed
    this.sendMetrics();
  }

  sendMetrics() {
    // You can send metrics to your analytics service here
    // Example: gtag('event', 'performance', this.metrics);
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  new PerformanceMonitor();
}