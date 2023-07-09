import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { dev_api } from "../../config/config";
import { Row } from "react-bootstrap";
import CardSkeleton from "../Skeleton/SkeletonCard";
import CardContent from "./Card";

const SignalExpired = () : JSX.Element =>{

    const [signal, setSignal] = React.useState<{loading: boolean, data: [], error?: any}>({loading: false, data:[], error: null});
    const autho: any = React.useContext(AuthContext);

    React.useEffect(() =>{
        setTimeout(async () =>{
            try{
                const fetchSignal = await fetch(`${dev_api.API_URL}api/signal/getexpired`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type'  : 'application/json',
                        'x-api-key'     : dev_api.API_KEY,
                        'AUTHORIZATION' : 'Bearer ' + autho?.token
                    }),
                    signal: AbortSignal.timeout(15000)
                });
                if(fetchSignal.status === 200){
                    const responsesData = await fetchSignal.json();
                    setSignal({loading: true, data: responsesData.data});
                }
            }
            catch(error){
                setSignal({loading: true, data:[], error: error})
            }
        }, 2500)
    }, [])
    return(
        <>
            <Row>
                {!signal.loading && <CardSkeleton card={3} size={4}/>}
                {
                    signal.data.map((data, idx) =>(
                        <CardContent key={idx} data={data}/>
                    ))
                }
            </Row>
        </>
    )
}

export default SignalExpired;