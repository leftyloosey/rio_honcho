import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import SongCard from './SongCard'

export default function Songs() {
    const { loading, error, data } = useQuery(GET_SONGS)

    if (loading) return <Spinner />
    if (error) return <p>something is wrong!</p>

    return ( 
        <>
        { data.songs.length > 0 ? (
            <div className='row mt-4'>
                { data.songs.map((song) => (
                    <SongCard key={song.id} song=
                    {song} />
                ))}
            </div>
            ) : (
            <p>no songs</p>
            )}
                    
        </>
)}