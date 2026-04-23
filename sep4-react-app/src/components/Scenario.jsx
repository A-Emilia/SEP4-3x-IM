function Scenario({ roomID, date, onLiked, onDisliked }) {
  return (
    <div className="scenario">
        <div>
            <h3>Room #{roomID}</h3>
            <p>Date: {date}</p>
        </div>
        <div>
            <button className="nav-btn" onClick={onLiked}>
                Like
            </button>
            <button className="nav-btn" onClick={onDisliked}>
                Dislike
            </button>
        </div>
    </div>
  )
}

export default Scenario