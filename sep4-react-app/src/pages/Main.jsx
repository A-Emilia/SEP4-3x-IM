import { Link } from "react-router-dom"

function Main() {
  return ( 
    <div>
      <div>
        <h1>Main page</h1>
      </div>
      <div>
        <Link to="/comfort-zone">
          <button className="nav-btn">Comfort Zone</button>
        </Link>
      </div>
      <div>
        <Link to="/view-data">
          <button className="nav-btn">View Data</button>
        </Link>
      </div>
    </div>
  )
}

export default Main;