import { gql } from '@apollo/client'

const GET_SONGS = gql`
  query getSongs {
    songs {
        id
        name
        status
        length
    }
  }
  `
  const GET_SONG = gql`
  query getSong($id: ID!) {
    song(id: $id) {
        id
        name
        status
        length
        description
        set {
            id
            name

        }
    }
  }
  `


  export { GET_SONGS, GET_SONG }