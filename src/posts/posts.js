import hiThere from './hi-there.md?raw';
import tailwindAndAiDamagingOpenSource from './tailwind-and-ai-damaging-open-source.md?raw';

export const posts = [
  {
    slug: 'tailwind-and-ai-damaging-open-source',
    title: 'The AI Paradox: How Artificial Intelligence is Damaging the Open-Source Ecosystem It Depends On',
    date: '2026-01-10',
    content: tailwindAndAiDamagingOpenSource
  },
  {
    slug: 'hi-there',
    title: 'Hi there',
    date: '2026-01-09',
    content: hiThere
  },
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
};
