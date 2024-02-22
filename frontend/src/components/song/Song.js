import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_SONGS = gql`
    query {
        songs {
            id
            name
        }
    }
`;

const Song = () => {
    const { loading, error, data } = useQuery(GET_SONGS);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }
    console.log(data);

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {data.songs.map(song => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Song