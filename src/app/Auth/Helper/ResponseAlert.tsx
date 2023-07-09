import React from 'react';
import { motion } from 'framer-motion';
import { dev_api } from '../../../config/config';
import { toast } from 'react-toastify';

interface PropInterface {
    response: {
        status: number,
        message: string,
        error: boolean,
        data?: any
    }
}

const OptionsAnimate = {
    show: { opacity: 1, y: 0 },
    hidde: { opacity: 0, y: 50 }
}

export default class AlertOxalus extends React.Component<PropInterface>{
    public constructor(props: PropInterface) {
        super(props);
        this.LinkAction = this.LinkAction.bind(this);
        this.HandleClick = this.HandleClick.bind(this);
    }

    private HandleClick(props: any) {
        props;
        async function PostVerifyEmail() {
            const email = window.localStorage.getItem('email');
            const post = await fetch(`${dev_api.API_URL}api/verification/sendagainmail`, {
                method: 'POST',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-api-key': dev_api.API_KEY,
                }),
                body: JSON.stringify({ email: email }),
                signal: AbortSignal.timeout(15000)
            });
            return post;
        }

       if(window.localStorage.getItem('email') !== null){
            (async () => {
                const promiseLoading = await toast.promise(PostVerifyEmail(), {
                    pending: {
                        render() { return 'Loading Send Verify Email...' },
                        type: 'default',
                        theme: 'dark',
                    },
                    error: {
                        render() { return 'Error Verify Email...' },
                        type: 'default',
                        theme: 'dark',
                    },
                });

                if (promiseLoading.status === 200) {
                    toast.success('Verify Email Success', {
                        theme: 'dark',
                        autoClose: 3000
                    })
                    window.localStorage.removeItem('email');
                    setTimeout(() =>{
                        window.location.reload();
                    }, 3000)
                }
            })();
       }
       else{
            toast.warning('Refresh Your Pages', {
                theme: 'dark',
                autoClose: 3000
            })
       }
    }

    private LinkAction(): JSX.Element | any {
        const statusResponse = this.props;
        if (statusResponse?.response.data !== undefined) {
            return (
                <div className="d-flex justify-content-center">
                    <button type='button' onClick={async () =>
                        this.HandleClick(statusResponse.response?.data)}
                        className='btn btn-outline-success text-center btn-sm'>
                        Verify Your Account
                    </button>
                </div>
            )
        }
        return;
    }

    public render(): React.ReactNode {
        const alertStatus = this.props;
        if (alertStatus.response.error) {
            return (
                <>
                    <motion.div initial={'hidde'}
                        transition={{ duration: 0.4 }}
                        animate={'show'}
                        variants={OptionsAnimate}
                        className='alert alert-danger'>
                        <div className='mb-2'>{alertStatus?.response.message}</div>
                        <this.LinkAction />
                    </motion.div>
                </>
            )
        }
        return <></>
    }
}