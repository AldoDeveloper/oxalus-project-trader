import Skelton from 'react-loading-skeleton';;
import { Card, ListGroup } from 'react-bootstrap';

const SkeltonFind = () =>{
    return(
        <>
            <Card>
                <Card.Body className='p-3'>
                    <Card.Title className='text-center'>
                    <div className="d-flex justify-content-between">
                        <Skelton height={20}/>
                        <div className='mt-3'>
                            <Skelton height={15}/>
                        </div>
                    </div>
                    </Card.Title>
                    <Card.Text>
                        <Skelton height={15}/>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush p-3">
                    <Skelton count={5} height={18} className='mt-2'/>
                </ListGroup>
            </Card>
        </>
    )
}

export default SkeltonFind;