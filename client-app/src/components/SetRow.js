import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'
import { GET_SONGS } from '../queries/songQueries'

export default function SetRow({ set }) {
    const [deleteSet] = useMutation(DELETE_SET, {
        variables: { id: set.id },
        refetchQueries: [{ query: GET_SETS }, {query: GET_SONGS}],
        // update(cache, { data: { deleteSet }}) { 
        //     const { sets } = cache.readQuery({ query: 
        //     GET_SETS })
        //     cache.writeQuery({
        //         query: GET_SETS,
        //         data: { sets: sets.filter(set => set.id !== deleteSet.id) },
        //     })
        //  }
    })

    return (
        <tr>
            <td>{ set.name }</td>

            <td>
                <button className="btn btn-danger btn-sm" onClick={deleteSet}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}