import { gql } from '@apollo/client';

// const ADD_SONG = gql`
//   mutation AddSong(
//     $name: String!
//     $description: String!
//     $status: SongStatus!
//     $length: SongLength!
//     $setId: ID!
//   ) {
//     addSong(
//       name: $name
//       length: $length
//       description: $description
//       status: $status
//       setId: $setId
//     ) {
//       id
//       name
//       description
//       length
//       status
//       set {
//         id
//         name

//       }
//     }
//   }
// `;


const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const UPDATE_SONG = gql`
  mutation UpdateSong(
    $id: ID!
    $name: String!
    $length: SongLengthUpdate!
    $description: String!
    $status: SongStatusUpdate!
  ) {
    updateSong(
      id: $id
      name: $name
      length: $length
      description: $description
      status: $status
    ) {
      id
      name
      length
      description
      status
      set {
        id
        name

      }
    }
  }
`;

const ADD_SONG = gql`
  mutation AddSong(
    $name: String!
    $description: String!
    $status: SongStatus!
    $setId: ID!
    $length: SongLength!
  ) {
    addSong(
      name: $name
      description: $description
      status: $status
      length: $length
      setId: $setId
    ) {
      id
      name
      description
      status
      length
      set {
        id
        name
      }
    }
  }
`;


export { ADD_SONG, DELETE_SONG, UPDATE_SONG };