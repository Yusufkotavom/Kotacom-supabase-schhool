/**
 * Fallback MDX parser untuk konten yang tidak bisa di-render oleh Astro
 */

export function parseMdxFallback(rawMdx: string): string {
  if (!rawMdx) return '';
  
  let processed = rawMdx;
  
  // Headers (harus diurutkan dari yang terbesar ke terkecil)
  processed = processed
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Code blocks (harus sebelum inline code)
  processed = processed
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Inline code
  processed = processed
    .replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Bold and italic
  processed = processed
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>');
  
  // Links
  processed = processed
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Images
  processed = processed
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
  
  // Blockquotes
  processed = processed
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  
  // Horizontal rules
  processed = processed
    .replace(/^---$/gim, '<hr>')
    .replace(/^\*\*\*$/gim, '<hr>')
    .replace(/^___$/gim, '<hr>');
  
  // Lists - Ordered
  processed = processed
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
  
  // Lists - Unordered
  processed = processed
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^\+ (.*$)/gim, '<li>$1</li>');
  
  // Wrap consecutive list items in ul/ol
  processed = wrapListItems(processed);
  
  // Paragraphs - wrap text that's not already wrapped
  processed = wrapParagraphs(processed);
  
  // Clean up
  processed = processed
    .replace(/\n\s*\n/g, '</p><p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/\n/g, '<br>');
  
  return processed;
}

function wrapListItems(content: string): string {
  // Find consecutive list items and wrap them
  const lines = content.split('\n');
  const result: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('<li>')) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(line);
    } else {
      if (inList && listItems.length > 0) {
        // Close the list
        result.push('<ul>');
        result.push(...listItems);
        result.push('</ul>');
        listItems = [];
        inList = false;
      }
      result.push(line);
    }
  }
  
  // Handle list at the end
  if (inList && listItems.length > 0) {
    result.push('<ul>');
    result.push(...listItems);
    result.push('</ul>');
  }
  
  return result.join('\n');
}

function wrapParagraphs(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let currentParagraph: string[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Skip empty lines and already wrapped content
    if (!trimmed || 
        trimmed.startsWith('<') || 
        trimmed.startsWith('#') || 
        trimmed.startsWith('>') || 
        trimmed.startsWith('-') || 
        trimmed.startsWith('*') || 
        trimmed.startsWith('+') || 
        /^\d+\./.test(trimmed)) {
      
      // Close current paragraph if exists
      if (currentParagraph.length > 0) {
        result.push('<p>' + currentParagraph.join(' ') + '</p>');
        currentParagraph = [];
      }
      
      if (trimmed) {
        result.push(line);
      }
    } else {
      // Add to current paragraph
      currentParagraph.push(trimmed);
    }
  }
  
  // Close any remaining paragraph
  if (currentParagraph.length > 0) {
    result.push('<p>' + currentParagraph.join(' ') + '</p>');
  }
  
  return result.join('\n');
}

/**
 * Clean up HTML content for better display
 */
export function cleanHtmlContent(html: string): string {
  return html
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/<p>\s*<br>\s*<\/p>/g, '')
    
    // Fix multiple line breaks
    .replace(/(<br>\s*){2,}/g, '</p><p>')
    
    // Ensure proper spacing
    .replace(/<\/p><p>/g, '</p>\n<p>')
    .replace(/<\/h[1-6]><h[1-6]>/g, '</h$1>\n<h$2>')
    
    // Clean up extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}
