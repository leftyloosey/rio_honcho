export default function SongCard({ song }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{ song.name }</h5>

                        <a className="btn btn-light" href={`/song/${song.id}`}>
                            View
                        </a>
                    </div>
                    <p className="small">
                        Status: <strong>{song.status}</strong>
                        {song.description}
                    </p>
                </div>
            </div>
        </div>
    )
}