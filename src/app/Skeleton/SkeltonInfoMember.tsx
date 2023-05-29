
import { Card, ListGroup } from 'react-bootstrap';
import Skelton from  'react-loading-skeleton';

const SkeltonInfoMember = () : JSX.Element =>{
    return(
        <>
           <ListGroup>
                <Skelton height={20} count={4} style={{ marginBottom: '1rem' }}/>
           </ListGroup>
        </>
    )
}
export default SkeltonInfoMember;