
import React from 'react';
import { dev_api } from '../../config/config';
import { AuthContext } from '../Context/AuthContext';
import { Row } from 'react-bootstrap';
import CardSkeleton from '../Skeleton/SkeletonCard';
import CardContent from './Card';
import Pagination from '../Pagination/Pagination';

const SignalActive = () =>{
    const [signal, setSignal] = React.useState<{loading: boolean, data: [], error?: any}>({loading: false, data:[], error: null});
    const autho: any = React.useContext(AuthContext);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [postsPerPage]   = React.useState(6);
    const indexOfLastPost  = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts     = signal.data.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages     = Math.ceil(signal.data.length / postsPerPage);

    React.useEffect(() =>{
         setTimeout(async() =>{
            try{
                const signalActive = await fetch(`${dev_api.API_URL}api/signal/getactive`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type' : 'application/json',
                        'x-api-key'    : dev_api.API_KEY,
                        'AUTHORIZATION' : 'Bearer ' + autho?.token
                    }),
                    signal: AbortSignal.timeout(15000)
                });
                if(signalActive.status === 200){
                    const responseSignalActive = await signalActive.json();
                    setSignal({loading: true, data: responseSignalActive.data})
                }
            }
            catch(error){
                setSignal({loading: true, data:[], error: error})
            }
         }, 2000)
    }, [])

    return(
        <>
            <Row>
                {!signal.loading && <CardSkeleton card={5} size={4}/>}
                {
                    signal.loading && 
                        currentPosts.map((data, idx) =>(
                            <CardContent key={idx} data={data}/>
                        ))
                }
            </Row>
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
        </>
    )
}

export default SignalActive;