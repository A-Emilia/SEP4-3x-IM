import { Link } from "react-router-dom"

function ViewDataPage() {
  return (
    <div>
      <h1>ViewData</h1>
        <Link to="/">
            <button className="nav-btn">Home</button>
        </Link>
    </div>
  )
}

export default ViewDataPage;