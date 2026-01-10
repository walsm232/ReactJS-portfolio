import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from './SEO';
import { getPostBySlug } from '../posts/posts';
import { extractDescription } from '../utils/seo';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <SEO 
          title="Post Not Found - Michael Walsh"
          description="The blog post you're looking for doesn't exist."
          path={`/blog/${slug}`}
        />
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
      </>
    );
  }

  const description = extractDescription(post.content);
  const publishedTime = post.date ? new Date(post.date).toISOString() : null;

  return (
    <>
      <SEO 
        title={`${post.title} - Michael Walsh`}
        description={description || `Read ${post.title} by Michael Walsh`}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={publishedTime}
        modifiedTime={publishedTime}
      />
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
              <div className="alert alert-info mt-4 mb-0" role="alert">
                <strong>Disclaimer:</strong> The views and opinions expressed on this site are my own and do not reflect the views of my current or previous employers.
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPost;
