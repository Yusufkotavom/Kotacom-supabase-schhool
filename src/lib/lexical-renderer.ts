// @ts-nocheck
import { logger } from './logger';

// ✅ Helper function untuk extract text dari block atau render Lexical content
function extractTextFromBlock(block: any): string {
  if (!block) return '';
  
  // Jika block adalah string, return langsung
  if (typeof block === 'string') {
    return block;
  }
  
  // Jika block adalah Lexical structure dengan root
  if (block.root && block.root.children) {
    // Simplified Lexical rendering untuk caption (avoid circular dependency)
    let text = '';
    try {
      block.root.children.forEach((child: any) => {
        if (child.type === 'paragraph') {
          text += extractTextFromBlock(child);
        } else if (child.type === 'heading') {
          text += extractTextFromBlock(child);
        } else if (child.type === 'text') {
          text += child.text || '';
        }
      });
    } catch (error) {
      logger.warn('⚠️ Error extracting text from Lexical block:', error);
    }
    return text;
  }
  
  // Jika block memiliki children (standard Lexical node)
  if (block.children && Array.isArray(block.children)) {
    let text = '';
    block.children.forEach((child: any) => {
      if (child.type === 'text') {
        text += child.text || '';
      } else if (child.type === 'link') {
        const linkText = extractTextFromBlock(child);
        const url = child.fields?.url || child.url || '#';
        text += `<a href="${url}" target="_blank">${linkText}</a>`;
      } else if (child.type === 'linebreak') {
        text += '<br>';
      } else if (child.children) {
        text += extractTextFromBlock(child);
      }
    });
    return text;
  }
  
  return '';
}

// ✅ Helper function untuk escape HTML
function escapeHtml(text: string): string {
  if (typeof text !== 'string') return '';
  
  // ✅ Safe HTML escaping without DOM dependency
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ✅ Helper function untuk extract media URL dari Payload Media object
function getMediaUrl(media: any): string | null {
  if (!media) return null;
  
  // Jika media adalah string (ID), return null karena kita butuh full object
  if (typeof media === 'string') {
    logger.warn('⚠️ MediaBlock: Received media ID instead of full media object:', media);
    return null;
  }
  
  let extractedUrl: string | null = null;
  
  // Jika media object memiliki sizes, gunakan size yang sesuai terlebih dahulu
  if (typeof media === 'object' && media.sizes) {
    // Prioritas: medium > small > large > xlarge > original url
    const sizePreference = ['medium', 'small', 'large', 'xlarge'];
    
    for (const size of sizePreference) {
      if (media.sizes[size]?.url) {
        extractedUrl = media.sizes[size].url;
        break;
      }
    }
  }
  
  // Fallback ke url utama jika sizes tidak tersedia
  if (!extractedUrl && typeof media === 'object' && media.url) {
    extractedUrl = media.url;
  }
  
  if (!extractedUrl) {
    logger.warn('⚠️ MediaBlock: Unable to extract URL from media object:', media);
    return null;
  }
  
  // ✅ Convert relative URLs ke absolute URLs yang mengarah ke Payload server
  if (extractedUrl.startsWith('/')) {
    // Get Payload server URL dari environment atau fallback
    const payloadUrl = 
      import.meta.env.PAYLOAD_PUBLIC_SERVER_URL ||
      import.meta.env.PUBLIC_PAYLOAD_URL ||
      'http://localhost:3000'; // fallback untuk development
    
    const absoluteUrl = `${payloadUrl}${extractedUrl}`;
    logger.debug(`🔗 Converting relative URL "${extractedUrl}" to absolute: "${absoluteUrl}"`);
    return absoluteUrl;
  }
  
  // Jika sudah absolute URL, return as-is
  logger.debug(`✅ Using absolute URL: "${extractedUrl}"`);
  return extractedUrl;
}

// ✅ Function untuk render custom blocks yang sesuai dengan content.css
function renderCustomBlock(block: any): string {
  const blockType = block.fields?.blockType || block.blockType;
  if (!block || !blockType) return '';

  const blockName = block.fields?.blockName || block.blockName || '';



  try {
    switch (blockType) {
      case 'banner':
        const bannerContent = extractTextFromBlock(block.fields?.content?.root || block.fields?.content);
        const style = block.fields?.style || 'info'; // info, success, warning, error
        
        // ✅ Flowbite alert styling dengan proper colors
        const alertStyles = {
          info: 'text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800',
          success: 'text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800',
          warning: 'text-yellow-800 border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800',
          error: 'text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
        };
        
        const bannerHtml = `
          <div class="flex p-4 mb-4 text-sm border rounded-lg ${alertStyles[style]}" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div>
              ${blockName ? `<div class="font-medium mb-2">${blockName}</div>` : ''}
              <div>${bannerContent}</div>
            </div>
          </div>`;

        return bannerHtml;

      case 'code':
        const code = block.fields?.code || '';
        const language = block.fields?.language || 'typescript';
        
        // ✅ Flowbite code block styling dengan syntax highlighting
        const codeHtml = `
          <div class="my-6">
            ${blockName ? `
              <div class="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200 rounded-t-lg">
                <h4 class="text-sm font-medium text-gray-700">${blockName}</h4>
                <span class="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">${language}</span>
              </div>
            ` : ''}
            <div class="relative bg-gray-900 rounded-lg ${blockName ? 'rounded-t-none' : ''}">
              <div class="flex items-center justify-between px-4 py-2 border-b border-gray-600">
                <div class="flex space-x-1">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <button class="text-gray-400 hover:text-white text-sm" onclick="navigator.clipboard.writeText(\`${escapeHtml(code).replace(/`/g, '\\`')}\`)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>
              <pre class="p-4 overflow-x-auto"><code class="language-${language} text-gray-300 text-sm leading-relaxed">${escapeHtml(code)}</code></pre>
            </div>
          </div>`;

        return codeHtml;

      case 'mediaBlock':
        const media = block.fields?.media;
        
        logger.mediaDebug('MediaBlock Debug:', {
          blockType,
          blockName,
        });
        
        if (!media) {
          logger.warn('⚠️ MediaBlock: No media object found in block.fields.media');
          return '';
        }
        
        // ✅ Extract URL dari Payload Media object
        const mediaUrl = getMediaUrl(media);
        
        if (!mediaUrl) {
          logger.warn('⚠️ MediaBlock: Unable to extract media URL from object:', media);
          return '';
        }
        
        logger.success('MediaBlock: Successfully extracted media URL:', mediaUrl);
        
        // ✅ Extract additional media properties
        const altText = media.alt || `Media ${media.id || 'image'}`;
        const caption = media.caption;
        const filename = media.filename || '';
        
        // ✅ Render image dengan proper HTML dan styling untuk Payload Media
        const mediaHtml = `
          <div class="prose">
            ${blockName ? `<h5 class="text-lg font-semibold mb-3">${blockName}</h5>` : ''}
            <div class="media-container">
              <img 
                src="${mediaUrl}" 
                alt="${altText}"
                class="w-full h-auto rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/cccccc/666666?text=Media+Not+Found';"
                onload=""
              />
              ${caption ? `
                <div class="mt-3 text-sm text-gray-600 text-center italic">
                  ${typeof caption === 'string' ? caption : (caption.root ? extractTextFromBlock(caption.root) : '')}
                </div>
              ` : ''}
              ${filename ? `
                <div class="mt-1 text-xs text-gray-500 text-center">
                  ${filename}
                </div>
              ` : ''}
            </div>
          </div>`;

        return mediaHtml;

      case 'gallery':
        const galleryTitle = block.fields?.title || '';
        const galleryDescription = block.fields?.description || '';
        const images = block.fields?.images || [];
        const layout = block.fields?.layout || 'grid';
        const columns = block.fields?.columns || '3';
        const spacing = block.fields?.spacing || 'normal';
        const showCaptions = block.fields?.showCaptions !== false;
        
        if (!images || images.length === 0) {
          logger.warn('⚠️ Gallery: No images found');
          return '';
        }
        
        const spacingClasses = {
          tight: 'gap-2',
          normal: 'gap-4',
          loose: 'gap-8',
        };
        
        const columnClasses = {
          '2': 'grid-cols-1 md:grid-cols-2',
          '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          '5': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        };
        
        // Generate unique ID for this gallery
        const galleryId = `gallery-${Math.random().toString(36).substr(2, 9)}`;
        
        const getLayoutClass = () => {
          switch (layout) {
            case 'masonry':
              return `columns-1 md:columns-2 lg:columns-${columns} ${spacingClasses[spacing]}`;
            case 'carousel':
              return `flex overflow-x-auto ${spacingClasses[spacing]} snap-x snap-mandatory pb-4 scrollbar-hide`;
            case 'slideshow':
              return 'relative w-full';
            default: // grid
              return `grid ${columnClasses[columns]} ${spacingClasses[spacing]}`;
          }
        };
        
        const galleryImages = images.map((item: any, index: number) => {
          if (!item.image) return '';
          
          const imageUrl = getMediaUrl(item.image);
          if (!imageUrl) return '';
          
          const imageAlt = item.alt || item.image.alt || `Gallery image ${index + 1}`;
          const imageCaption = item.caption || '';
          
          if (layout === 'slideshow') {
            return `
              <div class="carousel-item duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}" data-carousel-item="${index === 0 ? 'active' : ''}">
                <img src="${imageUrl}" 
                     alt="${imageAlt}"
                     class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                     loading="lazy">
                ${showCaptions && imageCaption ? `
                  <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 px-4 py-2 rounded-lg">
                    <p class="text-sm text-gray-800 text-center">${imageCaption}</p>
                  </div>
                ` : ''}
              </div>
            `;
          }
          
          const imageClass = layout === 'carousel' ? 'flex-none w-80 snap-start' : 'w-full';
          
          return `
            <div class="${imageClass} group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="${imageUrl}" 
                  alt="${imageAlt}"
                  class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                ${layout !== 'slideshow' ? `
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </div>
                  </div>
                ` : ''}
              </div>
              ${showCaptions && imageCaption && layout !== 'slideshow' ? `
                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-700">${imageCaption}</p>
                </div>
              ` : ''}
            </div>
          `;
        }).join('');
        
        const galleryHtml = `
          <div class="my-8 max-w-full">
            ${galleryTitle || galleryDescription ? `
              <div class="text-center mb-8">
                ${galleryTitle ? `<h3 class="text-3xl font-bold text-gray-900 mb-4">${galleryTitle}</h3>` : ''}
                ${galleryDescription ? `<p class="text-lg text-gray-600 max-w-2xl mx-auto">${galleryDescription}</p>` : ''}
              </div>
            ` : ''}
            
            ${layout === 'slideshow' ? `
              <div id="${galleryId}" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                  ${galleryImages}
                </div>
                
                <!-- Slider indicators -->
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  ${images.map((_, index) => `
                    <button type="button" class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300" 
                            aria-current="${index === 0 ? 'true' : 'false'}" 
                            aria-label="Slide ${index + 1}" 
                            data-carousel-slide-to="${index}"></button>
                  `).join('')}
                </div>
                
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
              
              <script>
                document.addEventListener('DOMContentLoaded', function() {
                  const carousel = document.getElementById('${galleryId}');
                  if (carousel) {
                    let currentSlide = 0;
                    const slides = carousel.querySelectorAll('[data-carousel-item]');
                    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
                    const totalSlides = slides.length;
                    
                    function showSlide(index) {
                      slides.forEach((slide, i) => {
                        slide.classList.toggle('hidden', i !== index);
                        slide.classList.toggle('block', i === index);
                      });
                      indicators.forEach((indicator, i) => {
                        indicator.classList.toggle('bg-opacity-100', i === index);
                        indicator.classList.toggle('bg-opacity-50', i !== index);
                      });
                      currentSlide = index;
                    }
                    
                    // Next/Previous buttons
                    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
                      showSlide((currentSlide + 1) % totalSlides);
                    });
                    
                    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
                      showSlide((currentSlide - 1 + totalSlides) % totalSlides);
                    });
                    
                    // Indicators
                    indicators.forEach((indicator, index) => {
                      indicator.addEventListener('click', () => showSlide(index));
                    });
                    
                    // Auto-slide (optional)
                    setInterval(() => {
                      showSlide((currentSlide + 1) % totalSlides);
                    }, 5000);
                  }
                });
              </script>
            ` : `
              <div class="${getLayoutClass()}">
                ${galleryImages}
              </div>
            `}
          </div>`;
        
        return galleryHtml;

      case 'quotes':
        const quotesTitle = block.fields?.title || '';
        const quotesSubtitle = block.fields?.subtitle || '';
        const quotes = block.fields?.quotes || [];
        const quotesLayout = block.fields?.layout || 'grid';
        const quotesColumns = block.fields?.columns || '2';
        const quotesStyle = block.fields?.style || 'modern';
        const showRatings = block.fields?.showRatings !== false;
        const showAuthorImages = block.fields?.showAuthorImages !== false;
        const backgroundColor = block.fields?.backgroundColor || 'none';
        
        if (!quotes || quotes.length === 0) {
          logger.warn('⚠️ Quotes: No quotes found');
          return '';
        }
        
        const bgClasses = {
          none: 'bg-white dark:bg-gray-900',
          gray: 'bg-gray-50 dark:bg-gray-800',
          brand: 'bg-red-50 dark:bg-red-900',
          dark: 'bg-gray-900 dark:bg-gray-900',
        };
        
        const quotesColumnClasses = {
          '1': 'grid-cols-1',
          '2': 'grid-cols-1 lg:grid-cols-2',
          '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        };
        
        const getQuotesLayoutClass = () => {
          switch (quotesLayout) {
            case 'carousel':
              return 'flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4';
            case 'featured':
              return 'flex justify-center';
            case 'list':
              return 'space-y-8';
            default: // grid
              return `grid ${quotesColumnClasses[quotesColumns]} gap-8`;
          }
        };
        
        const getQuoteCardClass = () => {
          switch (quotesStyle) {
            case 'classic':
              return 'max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 border-l-4 border-red-500 pl-6 py-4';
            case 'minimal':
              return 'max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 border-b border-gray-200 pb-6';
            case 'card':
              return 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6';
            default: // modern
              return 'max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100';
          }
        };
        
        const renderStars = (rating: number) => {
          return Array.from({ length: 5 }, (_, i) => i + 1)
            .map(star => `
              <svg class="w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            `).join('');
        };
        
        const quotesItems = quotes.map((quote: any, index: number) => {
          const quoteContent = extractTextFromBlock(quote.quote?.root || quote.quote);
          const authorImage = showAuthorImages && quote.authorImage ? getMediaUrl(quote.authorImage) : null;
          const isFeatured = quotesLayout === 'featured';
          const isCarousel = quotesLayout === 'carousel';
          
          return `
            <figure class="${getQuoteCardClass()} ${isCarousel ? 'flex-none w-80 snap-start' : ''} ${isFeatured ? 'mx-auto' : ''} mx-auto">
              <!-- Rating -->
              ${showRatings && quote.rating ? `
                <div class="flex items-center mb-4 ${isFeatured ? 'justify-center' : ''}">
                  ${renderStars(quote.rating)}
                </div>
              ` : ''}
              
              <!-- Quote Content -->
              <blockquote>
                <p class="${isFeatured ? 'text-2xl italic font-medium leading-relaxed' : 'text-xl italic font-medium'} text-gray-900 dark:text-white">
                  "${quoteContent}"
                </p>
              </blockquote>
              
              <!-- Author Info -->
              <figcaption class="flex items-center ${isFeatured ? 'justify-center' : ''} mt-6 space-x-3">
                ${authorImage ? `
                  <img class="w-6 h-6 rounded-full" src="${authorImage}" alt="${quote.author}">
                ` : `
                  <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                `}
                <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite class="pe-3 font-medium text-gray-900 dark:text-white">${quote.author}</cite>
                  ${quote.authorTitle || quote.company ? `
                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      ${quote.authorTitle ? quote.authorTitle : ''}
                      ${quote.authorTitle && quote.company ? ' at ' : ''}
                      ${quote.company ? quote.company : ''}
                    </cite>
                  ` : ''}
                </div>
              </figcaption>
            </figure>
          `;
        }).join('');
        
        const quotesHtml = `
          <section class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ${bgClasses[backgroundColor]}">
            ${quotesTitle || quotesSubtitle ? `
              <div class="mx-auto max-w-screen-sm">
                ${quotesTitle ? `<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">${quotesTitle}</h2>` : ''}
                ${quotesSubtitle ? `<p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">${quotesSubtitle}</p>` : ''}
              </div>
            ` : ''}
            <div class="${getQuotesLayoutClass()}">
              ${quotesItems}
            </div>
          </section>`;
        
        return quotesHtml;

      case 'cta':
        const ctaRichText = extractTextFromBlock(block.fields?.richText?.root || block.fields?.richText);
        const ctaLinks = block.fields?.links || [];
        
        if (!ctaRichText && (!ctaLinks || ctaLinks.length === 0)) {
          logger.warn('⚠️ CTA: No content or links found');
          return '';
        }
        
        const ctaLinksHtml = ctaLinks.map((linkItem: any) => {
          const link = linkItem.link;
          if (!link) return '';
          
          const linkUrl = link.url || (link.reference?.slug ? `/${link.reference.slug}` : '#');
          const linkLabel = link.label || 'Learn More';
          const linkAppearance = link.appearance || 'default';
          
          const linkClasses = linkAppearance === 'outline' 
            ? 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 transition-all duration-300'
            : 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 transition-all duration-300';
          
          return `
            <a href="${linkUrl}" class="inline-flex items-center justify-center ${linkClasses}">
              ${linkLabel}
              <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          `;
        }).join('');
        
        // ✅ Flowbite CTA section dengan buttons di bawah text dan rata tengah
        const ctaHtml = `
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              ${ctaRichText ? `
                <div class="mx-auto max-w-4xl mb-8 text-gray-900 dark:text-white">
                  ${ctaRichText}
                </div>
              ` : ''}
              ${ctaLinksHtml ? `
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  ${ctaLinksHtml}
                </div>
              ` : ''}
            </div>
          </section>`;
        
        return ctaHtml;

      default:
        const defaultContent = extractTextFromBlock(block.fields?.content);
        
        // ✅ Gunakan styling yang konsisten dengan content.css
        const defaultHtml = `
          <div class="prose">
            ${blockName ? `<h5>${blockName}</h5>` : ''}
            <div>${defaultContent}</div>
          </div>`;

        return defaultHtml;
    }
  } catch (error) {

    return '';
  }
}

// ✅ Function untuk render Lexical Editor blocks dengan safety checks
export function renderLexicalBlocks(content: any): string {
  // Safety check untuk content
  if (!content) {
    return '';
  }

  // Jika content adalah string, return langsung
  if (typeof content === 'string') {
    return content;
  }

  // Jika content adalah object dengan struktur Lexical
  if (content.root && content.root.children && Array.isArray(content.root.children)) {
    let html = '';
    
    try {
      content.root.children.forEach((block: any) => {
        if (!block || !block.type) return;
        

        
        switch (block.type) {
          case 'heading':
            const tag = block.tag || 'h2';
            const text = extractTextFromBlock(block);
            if (text) {
              html += `<${tag}>${text}</${tag}>`;
            }
            break;
            
          case 'paragraph':
            const paraText = extractTextFromBlock(block);
            if (paraText) {
              html += `<p>${paraText}</p>`;
            }
            break;
            
          case 'block':
            const blockHtml = renderCustomBlock(block);
            if (blockHtml) {
              html += blockHtml;
            }
            break;
            
          case 'linebreak':
            // Handle linebreak dalam heading atau paragraph
            html += '<br>';
            break;
            
          default:
            // Fallback untuk block types yang tidak dikenal
            const fallbackText = extractTextFromBlock(block);
            if (fallbackText) {
              html += `<div>${fallbackText}</div>`;
            }
        }
      });
      

      return html;
    } catch (error) {

      return '';
    }
  }

  // Fallback: jika bukan struktur yang dikenali, return string kosong
  return '';
}
