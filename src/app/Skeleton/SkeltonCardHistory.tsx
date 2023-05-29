
import { Card, Col } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';

const SkeltonHistory = (props: {count: number}) =>{
    return (
        <>
            {
                Array(props?.count).fill(0).map((_, idx) => (
                   <Col lg={4}>
                         <Card key={idx} className="mb-2">
                            <Card.Body>
                                <Skeleton count={2} height={15}/>
                            </Card.Body>
                        </Card>
                   </Col>
                ))
            }
        </>
    )
}

export default SkeltonHistory;