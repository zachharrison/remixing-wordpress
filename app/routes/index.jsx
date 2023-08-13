import Post from '../components/Post';
import Header from '../components/Header';
import { useLoaderData } from '@remix-run/react';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import { ContainerDiv } from '~/styles/styles';

export async function loader() {
  const PostsQuery = gql`
    query GetPosts {
      posts {
        nodes {
          title
          content
          date
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: PostsQuery,
  });

  const posts = response?.data?.posts?.nodes;
  return posts;
}

export default function Index() {
  const posts = useLoaderData();
  return (
    <div>
      <Header title='Home Page'></Header>
      <ContainerDiv>
        {posts.map((post) => {
          return <Post post={post} key={post.title}></Post>;
        })}
      </ContainerDiv>
    </div>
  );
}
