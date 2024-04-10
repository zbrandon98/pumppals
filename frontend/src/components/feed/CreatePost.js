import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "./CreatePost.css"

const CREATE_POST_MUTATION = gql`
  mutation createPost($content: String!, $postedBy: UserInput) {
    createPost(content: $content, postedBy: $postedBy) {
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

const CreatePost = ({receiveDataFromFeed }) => {
  const [content, setContent] = useState('');
  const [createPost] = useMutation(CREATE_POST_MUTATION);
  const storedUserData = localStorage.getItem('userData');
  console.log("receiving to CreatePost: ", receiveDataFromFeed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createPost({
        variables: { content, postedBy: receiveDataFromFeed }
      });
      console.log('Created post:', data.createPost);
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className ="create-post-container">
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </label>
            </div>
            <div>
                <button type="submit">Create Post</button>
            </div>
        </form>
    </div>
  );
};

export default CreatePost;
