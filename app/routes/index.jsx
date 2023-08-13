import Post from '../components/Post';
import Header from '../components/Header';
import { useLoaderData } from '@remix-run/react';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import { ContainerDiv } from '~/styles/styles';

export async function loader() {
  const BlogPostsQuery = gql`
    query GetPosts {
      posts(where: { categoryName: "blog" }) {
        nodes {
          title
          content
          date
          slug
        }
      }
    }
  `;

  const ReviewsQuery = gql`
    query Reviews {
      posts(where: { categoryName: "review" }) {
        nodes {
          title
          content
          date
          slug
        }
      }
    }
  `;
  const blogResponse = await client.query({
    query: BlogPostsQuery,
  });

  const reviewResponse = await client.query({
    query: ReviewsQuery,
  });

  const blogPosts = blogResponse?.data?.posts?.nodes;
  const reviews = reviewResponse?.data?.posts?.nodes;
  return { blogPosts, reviews };
}

export default function Index() {
  const { blogPosts, reviews } = useLoaderData();

  return (
    <div>
      <Header title='Home Page'></Header>
      <h3>Reviews</h3>
      <ContainerDiv>
        {reviews.map((review) => {
          return <Post post={review} key={review.title}></Post>;
        })}
      </ContainerDiv>
      <br />
      <h3>Blogs</h3>
      <ContainerDiv>
        {blogPosts.map((post) => {
          return <Post post={post} key={post.title}></Post>;
        })}
      </ContainerDiv>
    </div>
  );
}
