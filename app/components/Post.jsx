import { Link } from '@remix-run/react';

export default function Post({ post }) {
  return (
    <Link prefetch='render' to={`/posts/${post.slug}`}>
      <div>
        <div>
          <h2>{post.title}</h2>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
