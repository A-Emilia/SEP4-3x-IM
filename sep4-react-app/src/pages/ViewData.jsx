import { Link } from "react-router-dom"

function ViewData() {
  return (
    <div>
      <h1>ViewData</h1>
        <Link to="/">
            <button className="nav-btn">Home</button>
        </Link>
    </div>
  )
}

export default ViewData;