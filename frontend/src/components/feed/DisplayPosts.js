import React from 'react';
import { useQuery, gql } from '@apollo/client';
import "./DisplayPosts.css"

const GET_POSTS_QUERY = gql`
  query {
    posts {
      id
      content
      postedBy {
        id
        name
        email
      }
    }
  }
`;

const DisplayPosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="display-posts-container">
      {data.posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <p>{post.postedBy.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
