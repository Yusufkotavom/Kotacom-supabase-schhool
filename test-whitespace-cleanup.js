// Test script untuk memverifikasi fungsi whitespace cleanup

// Copy of the cleanup functions from supabase-direct.ts
function cleanWhitespace(text) {
  if (!text || typeof text !== 'string') return '';

  // Split by lines, process each line, then join back
  const lines = text
    .split(/\r?\n/) // Split by line endings (handle both \r\n and \n)
    .map(line => line.trim()) // Trim each line (remove leading/trailing spaces)
    .filter(line => line.length > 0); // Remove empty lines

  // Join with double line breaks for proper markdown formatting
  return lines.join('\n\n').trim();
}

function cleanMarkdownContent(content) {
  if (!content || typeof content !== 'string') return '';

  return cleanWhitespace(content)
    // Pastikan tidak ada empty lines di awal/akhir yang berlebihan
    .replace(/^\n+|\n+$/g, '')
    // Untuk markdown, pastikan ada line break minimal antara paragraphs
    // tapi jangan terlalu agresif - hanya ganti single line dengan double line jika diperlukan
    .replace(/([.!?])\n([A-Z])/g, '$1\n\n$2');
}

// Test cases
const testCases = [
  {
    name: 'Basic Windows line endings',
    input: 'Line 1\r\nLine 2\r\n\r\nLine 3',
    expected: 'Line 1\n\nLine 2\n\nLine 3'
  },
  {
    name: 'Multiple line breaks',
    input: 'Para 1\n\n\n\n\n\nPara 2\n\n\n\nPara 3',
    expected: 'Para 1\n\nPara 2\n\nPara 3'
  },
  {
    name: 'Mixed whitespace',
    input: '  \r\n  Line 1   \r\n\r\n\r\n  Line 2  \r\n  ',
    expected: 'Line 1\n\nLine 2'
  },
  {
    name: 'Markdown content with extra spacing',
    input: '# Title\n\n\n\n\nContent here\n\n\n\n## Subtitle\n\n\n\nMore content',
    expected: '# Title\n\nContent here\n\n## Subtitle\n\nMore content'
  },
  {
    name: 'Markdown with paragraph breaks',
    input: 'First paragraph.\n\n\n\n\n\nSecond paragraph starts here.',
    expected: 'First paragraph.\n\nSecond paragraph starts here.'
  },
  {
    name: 'Empty content',
    input: '',
    expected: ''
  },
  {
    name: 'Only whitespace',
    input: '   \n\n\n   \r\n   ',
    expected: ''
  },
  {
    name: 'Real world example from database',
    input: 'This is a post from Supabase.\r\n\r\n\r\n\r\nIt has multiple line breaks.\r\n\r\n\r\n\r\nAnd some trailing spaces.   \r\n\r\n',
    expected: 'This is a post from Supabase.\n\nIt has multiple line breaks.\n\nAnd some trailing spaces.'
  }
];

// Run tests
console.log('🧪 Testing whitespace cleanup functions...\n');

let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log('Input:', JSON.stringify(testCase.input));

  const result = cleanMarkdownContent(testCase.input);
  console.log('Output:', JSON.stringify(result));
  console.log('Expected:', JSON.stringify(testCase.expected));

  if (result === testCase.expected) {
    console.log('✅ PASSED\n');
    passed++;
  } else {
    console.log('❌ FAILED\n');
    failed++;
  }
});

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All tests passed! Whitespace cleanup is working correctly.');
} else {
  console.log('⚠️ Some tests failed. Please review the implementation.');
}
