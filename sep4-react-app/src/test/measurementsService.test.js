import {describe, it, expect} from "vitest";
import { fetchCurrentMeasurements } from "../services/measurementsService";

describe("fetchCurrentMeasurements", () => 
{
    //happy scenario - valid room ID shows right measurements 
    it("resolves with measurements when given a valid roomId",
       async () =>  {
        const result = await fetchCurrentMeasurements(1);
        expect(result.roomId).toBe(1);
        expect(result.temperature.value).toBe(18);
        expect(result.temperature.unit).toBe("C");
        expect(result.humidity.value).toBe(40);
         expect(result.humidity.unit).toBe("%");
        expect(result.light.value).toBe(40);
        expect(result.light.unit).toBe("lx");
       }
    
    )
}
)