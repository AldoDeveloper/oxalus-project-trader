import { prettyDate } from '../Helpers/StringConvertion';
import * as Icons from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function CardContent(props: {data: any}) {
    return (
        <>
            <div className="col col-lg-4 col-xl-4 col-sm-4">
                <NavLink to={'/dasboard/find/signal'} state={props.data} className={'text-decoration-none'}>
                    <div className="card mb-3" style={{ backgroundColor: 'transparent' }}>
                        <div className="card-body">
                            <div className="d-flex fw-bold small mb-3">
                                <span className="flex-grow-1">{props.data?.status.toLocaleUpperCase()}</span>
                                <a href="#" data-toggle="card-expand" className="text-inverse text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen"></i></a>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-0 align-self-center">{props.data?.pair}</h5>
                                <div>
                                    {
                                        props.data.signals_type === 'buy' ? 
                                        <Icons.BsFillArrowUpCircleFill size={'30px'} className="text-success"/> : 
                                        <Icons.BsFillArrowDownCircleFill size={'30px'} className="text-danger"/>
                                    }
                                </div>
                            </div>
                            <div className='mt-3'>Create Date : {prettyDate(props.data?.created_at)}</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}