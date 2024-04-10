import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client'
import './Signup.css';

const CREATE_USER_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;



const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    console.log(userData);

    try {
        const { data } = await createUser({ variables: userData });
        setName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error creating user:', error);
      }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}  

export default Signup;