import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../posts/posts";

const Blog = () => {
    const posts = getAllPosts();

    return (
        <div id="blog" className="blog-background">
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="blog-heading mb-5">Blog</h1>
                        {posts.length === 0 ? (
                            <p>Nothing to see here yet.</p>
                        ) : (
                            <div className="blog-list">
                                <div className="blog-list-gradient-line"></div>
                                {posts.map((post) => (
                                    <article key={post.slug} className="blog-post-preview mb-4 pb-4 border-bottom">
                                        <h2 className="blog-post-title">
                                            <Link 
                                                to={`/blog/${post.slug}`} 
                                                className="text-decoration-none"
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-muted mb-2">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <Link 
                                            to={`/blog/${post.slug}`} 
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            Read More →
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
