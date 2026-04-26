const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";
const API_URL = "/api/measurements";

const mockMeasurements = {
  Temperature: { value: 22.5, timeStamp: "10:30" },
  Humidity: { value: 30, timeStamp: "10:30" },
  Light: { value: 450, timeStamp: "10:30" },
};

export const measurementsService = {
  getMeasurements: async (roomId) => {
    if (USE_MOCK) {
      console.log("MOCK: getMeasurements");
      await new Promise((res) => setTimeout(res, 500));
      return mockMeasurements;
    }

    const response = await fetch(`${API_URL}?roomId=${roomId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch measurements");
    }

    return response.json();
  },
};
