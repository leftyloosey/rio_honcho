import { gql } from '@apollo/client'

const ADD_SET = gql`
  mutation addSet($name: String!, ) {
        addSet(name: $name)
        {
            id
            name
        }
    }
`

const DELETE_SET = gql`
  mutation deleteSet($id: ID!) {
      deleteSet(id: $id) {
          id
          name

        }
    }
`

export { DELETE_SET, ADD_SET }