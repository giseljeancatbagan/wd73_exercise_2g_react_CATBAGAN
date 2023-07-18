function SongList (props) {
    const { title, duration, artist } = props;

    return (
        <>
        <div className="card">
            <div className="card-body">
                <p>Title: <span className="fw-bold">{props.title}</span></p>
                <p>Duration: <span className="fw-bold">{props.duration}</span></p>
                <p>Artist: <span className="fw-bold">{props.artist}</span></p>
            </div>
        </div>
        </>
    )
}

export default SongList