/**
 * Extract a description from markdown content
 * Takes the first paragraph or first 160 characters
 */
export const extractDescription = (content, maxLength = 160) => {
  if (!content) return '';
  
  // Remove markdown headers, images, links, and code blocks
  let text = content
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Replace links with link text
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\*\*([^\*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^\*]+)\*/g, '$1') // Remove italic
    .replace(/^\s*>\s+/gm, '') // Remove blockquotes
    .trim();

  // Get first paragraph
  const firstParagraph = text.split('\n\n')[0] || text.split('\n')[0] || text;
  
  // Clean up whitespace
  let description = firstParagraph.replace(/\s+/g, ' ').trim();
  
  // Truncate if too long
  if (description.length > maxLength) {
    description = description.substring(0, maxLength).trim();
    // Try to cut at a sentence boundary
    const lastPeriod = description.lastIndexOf('.');
    const lastExclamation = description.lastIndexOf('!');
    const lastQuestion = description.lastIndexOf('?');
    const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion);
    
    if (lastSentenceEnd > maxLength * 0.6) {
      description = description.substring(0, lastSentenceEnd + 1);
    } else {
      description += '...';
    }
  }
  
  return description;
};
