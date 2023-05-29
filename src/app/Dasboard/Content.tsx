import React, {useState} from 'react';
import { SlideAnimate } from '../Animate/AnimateRoutes';
import { AuthContext } from '../Context/AuthContext';
import { dev_api } from '../../config/config';
import CardSkeleton from '../Skeleton/SkeletonCard';
import CardContent from './Card';
import History from './HistoryTrade';
import SignalInfo from './SignalinfoData';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../Pagination/Pagination';

interface PropsLoading{
    loading: boolean,
    data: [],
}

export default class Content extends React.Component<any, PropsLoading>{

    public constructor(props: any){
        super(props);
        this.state  = {loading : false, data: []};
        this.render = this.render.bind(this);
        this.PaginationComponent = this.PaginationComponent.bind(this);
    }

    componentDidMount(): void {
        const context : any = this.context;
        setTimeout(async () =>{
            try{
                const signal = await fetch(`${dev_api.API_URL}api/signal/getall`, {
                    method: "GET",
                    headers: new Headers({
                        'Content-type' : 'applcation/json',
                        'x-api-key' : dev_api.API_KEY,
                        'AUTHORIZATION' : 'Bearer ' + context?.token as any,
                    })
                });
                if(signal.status === 200){
                    const responseData = await signal.json();
                    this.setState({loading: true, data: responseData?.data})
                }
            }
            catch(error){}
        }, 2000)
    }
    protected HandleClientSideLocation() : JSX.Element{
        const location = useLocation();
        if(location.state?.find_signal) {
            toast.warning('Select Option Signal Trade...', {
                theme: 'dark',
                autoClose: 3000,
            })
        }
        return<></>
    }

    protected PaginationComponent() : JSX.Element{
        const stateOptions = this.state;
        const [currentPage, setCurrentPage] = useState(1)
        const [postsPerPage]   = useState(6);
        const indexOfLastPost  = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = stateOptions.data.slice(indexOfFirstPost, indexOfLastPost)
        const howManyPages = Math.ceil(stateOptions.data.length / postsPerPage);
        return(
            <>
                {
                     currentPosts.map((val, idx) => (
                        <CardContent key={idx} data={val}/>
                    ))
                }
                <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
            </>
        )

    }

    render(): React.ReactNode {
       const stateOptions = this.state;
       return(
        <>
            <this.HandleClientSideLocation/>
            <SlideAnimate>
                <section className='mb-3 mt-3'>
                    <h4 className='mb-3'>Signal Info Trade</h4>
                    <div className="row g-3">
                        {!stateOptions.loading && <CardSkeleton card={4} size={4}/>}
                        {
                            stateOptions.loading && <this.PaginationComponent/>
                        }
                    </div>
                </section>
            </SlideAnimate>
            <section className='mt-5'>
                <SignalInfo/>
            </section>
            <SlideAnimate>
                <section>
                     <h4 className='mt-3'>history Trade</h4>
                     <History/>
                </section>
            </SlideAnimate>
        </>
       )
    }
}

Content.contextType =AuthContext