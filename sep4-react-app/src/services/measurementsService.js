import { measurements } from "../mocks/measurements.mock";

export function fetchCurrentMeasurements(roomId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const room = measurements[roomId];
            if (!room) {
                reject(new Error(`No measurements for room ${roomId}`));
                return;
            }
            resolve(room);
        }, 500);
    });
}