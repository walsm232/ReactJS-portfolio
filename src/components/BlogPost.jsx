import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../posts/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="blog-background">
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1>Post Not Found</h1>
              <p>The blog post you're looking for doesn't exist.</p>
              <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-background">
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Link to="/blog" className="text-decoration-none mb-3 d-inline-block">
              ← Back to Blog
            </Link>
            <article className="blog-post">
              <h1 className="blog-post-title mb-3">{post.title}</h1>
              <p className="text-muted mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div className="blog-post-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
