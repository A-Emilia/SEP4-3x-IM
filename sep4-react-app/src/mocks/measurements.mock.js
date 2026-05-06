const now = new Date().toISOString();

export const measurements = {
    1: {
        roomId: 1,
        temperature: { value: 18, timeStamp: now },
        humidity: { value: 40, timeStamp: now },
        light: { value: 40,  timeStamp: now }
    },
    2: {
        roomId: 2,
        temperature: { value: 14, timeStamp: now },
        humidity: { value: 54, timeStamp: now },
        light: { value: 70,timeStamp: now }
    },
};
