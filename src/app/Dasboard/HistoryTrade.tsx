import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { dev_api } from '../../config/config';
import { AuthContext } from '../Context/AuthContext';
import SkeltonHistory from '../Skeleton/SkeltonCardHistory';
import Pagination from '../Pagination/Pagination';

const History = () => {
    const autho = React.useContext(AuthContext) as any;
    const [info, setInfo] = React.useState<{ loading: boolean, history: [] }>({ loading: false, history: [] });
    const [currentPage, setCurrentPage] = React.useState(1)
    const [postsPerPage] = React.useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = info.history.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(info.history.length / postsPerPage);

    React.useEffect(() => {
        setTimeout(async () => {
            try {
                const getInfo = await fetch(`${dev_api.API_URL}api/member/info`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-type': 'application/json',
                        'x-api-key': dev_api.API_KEY,
                        'AUTHORIZATION': 'Bearer ' + autho?.token
                    })
                });
                if (getInfo.status === 200) {
                    const responseDataInfo = await getInfo.json();
                    setInfo({ loading: true, history: responseDataInfo.data.history_subscription })
                }
            } catch (error) {
                console.log(error)
            }
        }, 3500)
    }, []);
    return (
        <>
            <Row>
                {!info.loading && <SkeltonHistory count={5} />}
                {
                    info.loading &&
                    <Col>
                        <div className={'table-responsive'}>
                            <table className="table table-striped table-hover table-responsive">
                                <thead className='text-center fw-bold'>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">ID Ref</th>
                                        <th scope="col">Payment Method</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope='col'>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        currentPosts.map((val: any, idx) => (
                                            <tr key={idx}>
                                                <td className='p-3'>{idx + 1}</td>
                                                <td>{val.id_ref}</td>
                                                <td>{val.payment_method}</td>
                                                <td>
                                                    <span 
                                                     style={{ backgroundColor: '#13DEB9', color: 'black' }}
                                                     className='p-1 rounded'>{val.payment_status}</span>
                                                 </td>
                                                <td className={val.status === 'active' ? 'text-success' : 'text-danger'}>
                                                    {val.status}
                                                </td>
                                            </tr> 
                                        ))
                                    }
                                </tbody>
                                <div className='mt-3'>
                                    <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
                                </div>
                            </table>
                        </div>
                    </Col>
                }
            </Row>
        </>
    )
}
export default History;