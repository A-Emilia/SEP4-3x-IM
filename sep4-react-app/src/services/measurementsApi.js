import { measurements } from "../mocks/measurements.mock";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";
const API_URL = "/api/measurements";

async function getMeasurementsMock(roomId) {
  await new Promise((res) => setTimeout(res, 500));
  const room = measurements[roomId];
  if (!room) {
    throw new Error(`No measurements for room ${roomId}`);
  }
  return room;
}

function adaptServerMeasurement(roomId, dto) {
  const timeStamp = dto.TimestampUtc;
  return {
    roomId,
    temperature: { value: dto.Temperature, timeStamp },
    humidity:    { value: dto.Humidity,    timeStamp },
    light:       { value: dto.Light,       timeStamp },
  };
}

async function getMeasurementsRest(roomId) {
  const response = await fetch(`${API_URL}?roomId=${roomId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch measurements");
  }
  const dto = await response.json();
  return adaptServerMeasurement(roomId, dto);
}

export const measurementsApi = {
  getMeasurements: (roomId) =>
    USE_MOCK ? getMeasurementsMock(roomId) : getMeasurementsRest(roomId),
};
