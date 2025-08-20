// Static blog posts data - much faster than API calls
export const staticPosts = [
  {
    slug: 'post-from-html-file-example',
    title: 'Post from HTML File Example',
    excerpt: 'This is an example post demonstrating how to create blog posts from HTML files.',
    content: `
      <h2>Welcome to Our Blog</h2>
      <p>This is a sample blog post that demonstrates how to create content using static HTML files. This approach is much faster than fetching data from external APIs.</p>
      
      <h3>Why Static HTML?</h3>
      <p>Static HTML files offer several advantages:</p>
      <ul>
        <li><strong>Speed:</strong> No API calls needed, pages load instantly</li>
        <li><strong>Reliability:</strong> No dependency on external services</li>
        <li><strong>SEO:</strong> Better search engine optimization</li>
        <li><strong>Cost:</strong> No server costs for content delivery</li>
      </ul>
      
      <h3>How It Works</h3>
      <p>Each blog post is defined as a static object with all the necessary data. This eliminates the need for database queries or API calls during build time.</p>
      
      <blockquote>
        <p>"Static sites are the future of web development. They're fast, secure, and cost-effective."</p>
      </blockquote>
      
      <h3>Getting Started</h3>
      <p>To add a new blog post, simply add a new object to the staticPosts array with the following structure:</p>
      <pre><code>{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description of your post',
  content: 'Your HTML content here'
}</code></pre>
    `,
    date: '2024-01-15',
    modified: '2024-01-15',
    author: 'Kotacom Team',
    category: 'Technology',
    tags: ['web-development', 'static-sites', 'performance']
  },
  {
    slug: 'web-development-best-practices',
    title: 'Web Development Best Practices for 2024',
    excerpt: 'Learn the essential best practices for modern web development that will help you build better, faster, and more maintainable websites.',
    content: `
      <h2>Web Development Best Practices for 2024</h2>
      <p>As we move further into 2024, web development continues to evolve rapidly. Here are the essential best practices that every developer should follow.</p>
      
      <h3>1. Performance First</h3>
      <p>Performance should always be your top priority. Users expect fast-loading websites, and search engines favor speed in their rankings.</p>
      <ul>
        <li>Optimize images and use modern formats (WebP, AVIF)</li>
        <li>Minimize HTTP requests</li>
        <li>Use lazy loading for images and components</li>
        <li>Implement proper caching strategies</li>
      </ul>
      
      <h3>2. Mobile-First Design</h3>
      <p>With mobile traffic continuing to grow, mobile-first design is no longer optional.</p>
      <p>Start with mobile layouts and progressively enhance for larger screens. This approach ensures your site works well on all devices.</p>
      
      <h3>3. Accessibility Matters</h3>
      <p>Web accessibility is not just a legal requirement—it's the right thing to do. Make your sites accessible to everyone.</p>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Provide alt text for images</li>
        <li>Ensure proper color contrast</li>
        <li>Make your site keyboard navigable</li>
      </ul>
      
      <h3>4. Security Best Practices</h3>
      <p>Security should be built into your development process from the start.</p>
      <ul>
        <li>Use HTTPS everywhere</li>
        <li>Implement proper input validation</li>
        <li>Keep dependencies updated</li>
        <li>Use security headers</li>
      </ul>
      
      <h3>5. Modern JavaScript</h3>
      <p>Stay current with modern JavaScript features and best practices.</p>
      <ul>
        <li>Use ES6+ features</li>
        <li>Implement proper error handling</li>
        <li>Write clean, readable code</li>
        <li>Use TypeScript for better type safety</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Following these best practices will help you build better websites that provide excellent user experiences while being maintainable and scalable.</p>
    `,
    date: '2024-01-20',
    modified: '2024-01-20',
    author: 'Kotacom Team',
    category: 'Web Development',
    tags: ['best-practices', 'performance', 'accessibility', 'security']
  },
  {
    slug: 'seo-optimization-guide',
    title: 'Complete SEO Optimization Guide for 2024',
    excerpt: 'Master the art of SEO with this comprehensive guide covering technical SEO, content optimization, and modern search engine strategies.',
    content: `
      <h2>Complete SEO Optimization Guide for 2024</h2>
      <p>Search Engine Optimization (SEO) is crucial for driving organic traffic to your website. Here's your complete guide to SEO success in 2024.</p>
      
      <h3>Technical SEO</h3>
      <p>Technical SEO forms the foundation of your search engine success.</p>
      
      <h4>Site Speed</h4>
      <p>Page speed is a critical ranking factor. Optimize your site for speed by:</p>
      <ul>
        <li>Compressing images and using modern formats</li>
        <li>Minimizing CSS and JavaScript</li>
        <li>Using a CDN for global content delivery</li>
        <li>Implementing browser caching</li>
      </ul>
      
      <h4>Mobile Optimization</h4>
      <p>Google uses mobile-first indexing, so your mobile site must be optimized:</p>
      <ul>
        <li>Ensure responsive design</li>
        <li>Optimize touch targets</li>
        <li>Improve mobile page speed</li>
        <li>Test mobile usability</li>
      </ul>
      
      <h3>Content Optimization</h3>
      <p>High-quality, relevant content is the backbone of SEO success.</p>
      
      <h4>Keyword Research</h4>
      <p>Start with comprehensive keyword research:</p>
      <ul>
        <li>Use tools like Google Keyword Planner</li>
        <li>Analyze competitor keywords</li>
        <li>Focus on long-tail keywords</li>
        <li>Consider search intent</li>
      </ul>
      
      <h4>Content Creation</h4>
      <p>Create content that satisfies user intent:</p>
      <ul>
        <li>Write comprehensive, valuable content</li>
        <li>Use proper heading structure (H1, H2, H3)</li>
        <li>Include relevant keywords naturally</li>
        <li>Add internal and external links</li>
      </ul>
      
      <h3>On-Page SEO</h3>
      <p>Optimize individual pages for search engines:</p>
      <ul>
        <li>Optimize title tags and meta descriptions</li>
        <li>Use descriptive URLs</li>
        <li>Add structured data markup</li>
        <li>Optimize images with alt text</li>
      </ul>
      
      <h3>Off-Page SEO</h3>
      <p>Build your site's authority through external signals:</p>
      <ul>
        <li>Earn quality backlinks</li>
        <li>Build brand mentions</li>
        <li>Engage on social media</li>
        <li>Create shareable content</li>
      </ul>
      
      <h3>Local SEO</h3>
      <p>For local businesses, optimize for local search:</p>
      <ul>
        <li>Claim and optimize Google My Business</li>
        <li>Get listed in local directories</li>
        <li>Encourage customer reviews</li>
        <li>Use local keywords</li>
      </ul>
      
      <h3>Measuring Success</h3>
      <p>Track your SEO performance with key metrics:</p>
      <ul>
        <li>Organic traffic growth</li>
        <li>Keyword rankings</li>
        <li>Click-through rates</li>
        <li>Conversion rates</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>SEO is a long-term strategy that requires consistent effort and optimization. Focus on providing value to users while following search engine best practices.</p>
    `,
    date: '2024-01-25',
    modified: '2024-01-25',
    author: 'Kotacom Team',
    category: 'Marketing',
    tags: ['seo', 'marketing', 'optimization', 'search-engines']
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  author: string;
  category: string;
  tags: string[];
} 