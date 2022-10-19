import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import { useQuery } from "@apollo/client"
import { GET_SONG } from "../queries/songQueries"
import SetInfo from "../components/SetInfo"
import DeleteSongButton from "../components/DeleteSongButton"
import EditSongForm from '../components/EditSongForm'

export default function Song() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SONG,
    { variables: { id } })

  if (loading) return <Spinner />
  if (error) return <p>nope. something wrong.</p>

  return <>
    {!loading && !error && (
      <div className="mx-auto w-75 card p-5">
        <Link to='/' className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
        </Link>

        <h1>{data.song.name}</h1>
        <p>{data.song.description}</p>

        <h5 className="mt-3">Song Status</h5>
        <p className="lead">{data.song.status}</p>

        <SetInfo set={data.song.set} />
        <DeleteSongButton songId={data.song.id} />
        <EditSongForm song={data.song}/>
      </div>

    )}
  </>
}