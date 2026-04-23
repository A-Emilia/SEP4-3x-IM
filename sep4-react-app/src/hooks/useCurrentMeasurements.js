import { useEffect, useState } from "react";
import { fetchCurrentMeasurements } from "../services/measurementsService";
export function useCurrentMeasurements(roomId){

    const [data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect( () =>
        {
            if(!roomId){
                setIsLoading(false);
                setData(null);
                setError(null);
                return;
            }
            let cancel =false;
            setIsLoading(true);
            setError(null);
            fetchCurrentMeasurements(roomId).then(
                (result) =>{
                    if(cancel) return;
                    setData(result);
                }
            ).catch(
                (error) => {
                    if(cancel) return;
                    setError(error);
                    setData(null);
                }
            ).finally(
                () => {
                    if (cancel) return;
                    setIsLoading(false);
                }
            )
            return () => { //cleanup method
                cancel=true;
            };

        }, [roomId]
    );
    return {data,isLoading,error};



}