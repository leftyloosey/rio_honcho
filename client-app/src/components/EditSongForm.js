import { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_SONG } from "../queries/songQueries"
import { UPDATE_SONG } from "../mutations/songMutations"

export default function EditSongForm({ song }) {
  const [name, setName] = useState(song.name)
  const [description, setDescription] = useState(song.description)
  const [status, setStatus] = useState('')
  const [length, setLength] = useState('')

  const [updateSong] = useMutation(UPDATE_SONG, {
    variables: { id: song.id, name, description, status, length },
    refetchQueries: [{ query: GET_SONG, variables: { id: song.id } }]
  })


  const onSubmit = (e) => {
    e.preventDefault()

    if ( !name || !description || !status || !length) {
        return alert('please complete fields.')
    }
    console.log(name,description,status,length)
    updateSong(name, description, status, length)
  }
  
  return (
    <div className="mt-5">
        <h3>Update Song</h3>
            <form onSubmit={ onSubmit }>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                    className='form-control'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select
                    id='status'
                    className='form-select'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    >
                    <option value='opener'>opener</option>
                    <option value='closer'>closer</option>
                    <option value='other'>other</option>
                </select>
            </div>

            <div className='mb-3'>
                    <label className='form-label'>Length</label>
                    <select
                    id='length'
                    className='form-select'
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    >
                    <option value='short'>short</option>
                    <option value='long'>long</option>
                </select>
            </div>

            <button type='submit' className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
  )
}