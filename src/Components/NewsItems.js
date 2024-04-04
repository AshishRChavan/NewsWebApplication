export default function NewsItem(props) {
    let { title, description, imgUrl, newsUrl, author, time, sourcename } = props
    return (
        <div className="card my-4">
            <div style={{ display: "flex", position: "absolute", justifyContent: "flex-end", right: "0" }}>
                <span className="badge rounded-pill bg-danger">
                    {sourcename}
                </span>
            </div>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-body-secondary">By {author ? author : "Unknown"} updated on {new Date(time).toUTCString()}</small>
                </p>
                <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
    )
}