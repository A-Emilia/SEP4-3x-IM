const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";
const API_URL = "/api/scenarios";

const mockScenario = {
  id: "mocekd-scenario-1",
  roomId: 1,
  date: "2026-04-29",
  predictionHoursAhead: 6,
  values: [
    {
      type: "temperature",
      label: "Temperature",
      currentValue: 22,
      predictedValue: 23,
      unit: "°C"
    },
    {
      type: "humidity",
      label: "Humidity",
      currentValue: 45,
      predictedValue: 50,
      unit: "%"
    },
    {
      type: "light",
      label: "Light",
      currentValue: 300,
      predictedValue: 250,
      unit: "lx"
    }
  ]
};

export const scenarioService = {
  getScenario: async (roomId) => {
    if (USE_MOCK) {
      console.log("MOCK: getScenario");
      await new Promise((res) => setTimeout(res, 500));
      return mockScenario;
    }

    const response = await fetch(`${API_URL}?roomId=${roomId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch scenario");
    }

    return response.json();
  },

  sendFeedback: async ({ scenarioId, feedback }) => {
    if (USE_MOCK) {
      console.log("MOCK: sendFeedback", { scenarioId, feedback });
      await new Promise((res) => setTimeout(res, 300));
      return { success: true };
    }

    const response = await fetch(`${API_URL}/feedback`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ scenarioId, feedback })
    });

    if (!response.ok) {
      throw new Error("Failed to send feedback");
    }

    return response.json();
  }
};