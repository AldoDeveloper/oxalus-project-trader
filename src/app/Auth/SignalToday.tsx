import { Card, Row } from "react-bootstrap";
import React from 'react';
import { AuthContext } from "../Context/AuthContext";
import { dev_api } from "../../config/config";
import { toast } from 'react-toastify';
import SkeltonHistory from "../Skeleton/SkeltonCardHistory";

const SignalToday = (): JSX.Element => {
    const autho: any = React.useContext(AuthContext);
    const [sToday, sSetToday] = React.useState<{ loading: boolean, data: [] }>({ loading: false, data: [] });
    React.useEffect(() => {
        setTimeout(async () => {
            try {
                const getFecth = await fetch(`${dev_api.API_URL}api/signal/gettoday`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-type': 'application/json',
                        'x-api-key': dev_api.API_KEY,
                        'AUTHORIZATION': 'Bearer ' + autho?.token
                    }),
                    signal: AbortSignal.timeout(15000),
                });
                if (getFecth.status === 200) {
                    const responseJsonSignal = await getFecth.json();
                    if (responseJsonSignal?.data?.length > 0) {
                        sSetToday({ loading: true, data: responseJsonSignal?.data })
                    }
                }
                if (getFecth.status >= 400) {
                    toast.warning('Error Get Data Signal Today Check Your Connection....', {
                        theme: 'dark',
                        autoClose: 3000,
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }, [])
    return (
        <>
            <h3>Signal Todays</h3>
            {
                !sToday.loading ?
                    <div className="mt-3">
                        <Row><SkeltonHistory count={4} /></Row>
                    </div> : (
                        <Card className='mt-3'>
                            <Card.Header>
                                <div className="d-flex justify-content-between">
                                    <div>Signal type</div>
                                    <div className="align-self-center">icons</div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sint?
                            </Card.Body>
                        </Card>
                    )
            }
        </>
    )
}
export default SignalToday;