import { gql } from '@apollo/client'

const GET_SETS = gql`
    query getSets {
        sets {
            id
            name
        }
    }
`
const GET_USERS = gql`
    query getUsers {
        users {
            id
            name

        }
    }
`
export { GET_SETS, GET_USERS }