import { Link } from "react-router-dom"
import { useState } from "react";
import {rooms} from "../mocks/rooms.mock";
import { useCurrentMeasurements } from "../hooks/useCurrentMeasurements";
function MainPage() {
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const {data, isLoading, error}  = useCurrentMeasurements(selectedRoomId);
  function renderMeasurements() {
  if (!selectedRoomId) {
    return <p>Select a room to see current measurements.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return null;     //should never happen
  }
  return (
    <div>
      <p>Temperature: {data.temperature.value} °C </p>
      <p>Humidity: {data.humidity.value} %</p>
      <p>Light: {data.light.value} lx</p>
    </div>
  );
}

  return ( 
    <div>
      <div>
        <h1>Main page</h1>
        <div>
          <label htmlFor="room-select">Room: </label>
          <select id="room-select" value={selectedRoomId ?? ""} 
          onChange={(e) => setSelectedRoomId(e.target.value || null)}>
            <option value= "" >Select Room</option>
            {rooms.map(
              (r) => (
                <option key={r.id} value ={r.id}>{r.name}</option>
              )
            )}
          </select>
        </div>
        <div>
            {renderMeasurements()}
    </div>

      </div>
      <div>
        {selectedRoomId ? (
          <Link to={`/comfort-zone/${selectedRoomId}`}>
            <button className="nav-btn">Comfort Zone</button>
          </Link>
        ) : (
          <button className="nav-btn" disabled>Comfort Zone</button>
        )}
      </div>
      <div>
        {selectedRoomId ? (
          <Link to={`/view-data/${selectedRoomId}`}>
            <button className="nav-btn">View Data</button>
          </Link>
        ) : (
          <button className="nav-btn" disabled>View Data</button>
        )}
      </div>
    </div>
  )
}

export default MainPage;