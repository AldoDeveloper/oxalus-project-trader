
import chartSvg from '../../assets/svg_graps.svg';

export default function Card() {
    return (
        <>
            <div className="col-xl-3 col-lg-6">
                <div className="card mb-3" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                        <div className="d-flex fw-bold small mb-3">
                            <span className="flex-grow-1">SITE VISITORS</span>
                            <a href="#" data-toggle="card-expand" className="text-inverse text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen"></i></a>
                        </div>
                        <div className="row align-items-center mb-2">
                            <div className="col-7">
                                <h3 className="mb-0">4.2m</h3>
                            </div>
                            <div className="col-5">
                                <img src={chartSvg} alt="" />
                            </div>
                        </div>
                        <div className="small text-inverse text-opacity-50 text-truncate">
                            <i className="fa fa-chevron-up fa-fw me-1"></i> 33.3% more than last week
                            <i className="far fa-user fa-fw me-1"></i> 45.5% new visitors
                            <i className="far fa-times-circle fa-fw me-1"></i> 3.25% bounce rate
                        </div>
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left"></div>
                        <div className="card-arrow-top-right"></div>
                        <div className="card-arrow-bottom-left"></div>
                        <div className="card-arrow-bottom-right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}