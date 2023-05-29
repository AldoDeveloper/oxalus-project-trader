
import { Card } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';

const SkeltonHistory = (props: {count: number}) =>{
    return (
        <>
            {
                Array(props?.count).fill(0).map((_, idx) => (
                    <Card key={idx} className="mb-2">
                        <Card.Body>
                            <Skeleton count={2} height={15}/>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    )
}

export default SkeltonHistory;