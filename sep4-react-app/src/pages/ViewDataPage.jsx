import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MeasurementContainer from "../components/MeasurementContainer";
import { measurementsService } from "../services/measurementsApi";

function ViewDataPage() {
  const [measurements, setMeasurements] = useState(null);
  const [activeType, setActiveType] = useState("Temperature");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const roomId = 1;

  //render measures data
  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const data = await measurementsService.getMeasurements(roomId);
        setMeasurements(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeasurements();
  }, []); //run only once

  if (loading) return <p>Loading measurements...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!measurements) return <p>No measurements available</p>;

  return (
    <div>
      <h1>ViewData</h1>
      
     {/*render btn for each msr type, switching between them*/}
      <div>
        {Object.keys(measurements).map((type) => (
          <button key={type} onClick={() => setActiveType(type)}>
            {type}
          </button>
        ))}
      </div>

      <MeasurementContainer
        type={activeType}
        value={measurements[activeType].value}
        timeStamp={measurements[activeType].timeStamp}
      />
      
      <Link to="/">
        <button className="nav-btn">Home</button>
      </Link>
    </div>
  );
}

export default ViewDataPage;
