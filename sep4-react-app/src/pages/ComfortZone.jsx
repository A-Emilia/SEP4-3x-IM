import { Link } from "react-router-dom"

function ComfortZone() {
  return (
    <div>
      <h1>Comfort Zone</h1>
        <Link to="/">
            <button className="nav-btn">Home</button>
        </Link>
    </div>
  )
}

export default ComfortZone;