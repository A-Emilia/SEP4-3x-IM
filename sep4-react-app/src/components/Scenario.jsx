function Scenario({ scenario, onLiked, onDisliked, disabled }) {
  return (
    <div className="scenario">
      <div>
        <h3>Room #{scenario.roomId}</h3>
        <p>Date: {scenario.date}</p>

        <p>Temperature: {scenario.temperature}°C</p>
        <p>Humidity: {scenario.humidity}%</p>
        <p>Light: {scenario.light}</p>
      </div>

      <div>
        <button className="nav-btn" onClick={onLiked} disabled={disabled}>Like</button>
        <button className="nav-btn" onClick={onDisliked} disabled={disabled}>Dislike</button>
      </div>
    </div>
  );
}

export default Scenario;