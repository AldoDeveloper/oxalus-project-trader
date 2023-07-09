import React from 'react'
import { AuthContext } from '../Context/AuthContext';
import { dev_api } from '../../config/config';
import { Row } from 'react-bootstrap';
import CardContent from './Card';
import CardSkeleton from '../Skeleton/SkeletonCard';

const SignalCutlos = () =>{
    const [signal, setSignal] = React.useState<{loading: boolean, data: [], error?: any}>({loading: false, data:[], error: null});
    const autho: any = React.useContext(AuthContext);
    React.useEffect(() =>{
        setTimeout(async () =>{
            try{
                const fetchSignal = await fetch(`${dev_api.API_URL}api/signal/getcutloss`, {
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
    return (
        <>
            {
                !signal.loading || signal.data.length < 1 &&
                <Row><CardSkeleton card={6} size={4}/></Row>
            }
            <Row>
                {
                   signal.data.length > 0 && signal.loading && 
                    signal.data.map((data, idx) =>(
                        <CardContent key={idx} data={data}/>
                    ))
                }
            </Row>
        </>
    )
}
export default SignalCutlos;