import { Link } from "react-router-dom"
// import { useEffect, useState } from "react";
import Scenario from "../components/Scenario"

function ComfortZonePage() {
  return (
    <div>
      <h1>Comfort Zone</h1>
      <div>
        <Scenario roomID="1" date="2023-10-10" onLiked={() => alert("Scenario liked!")} onDisliked={() => alert("Scenario disliked!")} />
      </div>
      <div>
        <Link to="/">
            <button className="nav-btn">Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ComfortZonePage;