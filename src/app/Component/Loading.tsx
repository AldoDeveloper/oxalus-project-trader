
import { Spinner } from 'react-bootstrap'
export default function Loading(props: {loading: boolean}){
    if(props.loading){
        return (
            <>
                <div className="body-loader">
                    <div className="loader">
                    <Spinner animation="border" style={{width: '60px', height: '60px'}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
                </div>
            </>
        )
    }
    return <></>
}