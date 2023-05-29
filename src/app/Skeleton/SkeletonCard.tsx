
import Skeleton from 'react-loading-skeleton';
const CardSkeleton = (card: {card: number, size: number}) : JSX.Element =>{
   return (
    <>
        {
            Array(card.card)
            .fill(0)
            .map((_, key) => (
            <div key={key} className={`card mb-3 col-lg-5 col-xl-${card.size} col-sm-4`} style={{ backgroundColor: 'transparent' }}>
                <div className="card-body">
                    <div className="fw-bold small mb-3">
                        <Skeleton height={18} className='flex-grow-1'/>
                    </div>
                    <div className="row align-items-center mb-2">
                        <div className="col-7">
                            <Skeleton height={30}/>
                        </div>
                        <div className="col-5">
                            <Skeleton height={50}/>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Skeleton height={18} className='flex-grow-1'/>
                    </div>
                </div>
            </div>
        ))
        }
    </>
   )
}

export default CardSkeleton;