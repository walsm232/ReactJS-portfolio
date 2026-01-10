import hiThere from './hi-there.md?raw';

export const posts = [
  {
    slug: 'hi-there',
    title: 'Hi there',
    date: '2026-01-10',
    content: hiThere
  },
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
};
