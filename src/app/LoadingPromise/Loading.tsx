import { toast } from 'react-toastify';

async function LoadingPromise(promise: Promise<Response>,
     messagesError?: string){
     const loadingFetchApi = await toast.promise(promise, {
         pending:{
            type: 'info',
            style: {backgroundColor: 'darkgray', color: 'white'},
            position: toast.POSITION.TOP_RIGHT,
            render() {
                return 'Loading...'
            },
         },
         error:{
            type: 'error',
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT,
            render(){
                return messagesError === undefined ? 'Error Get Api' : messagesError;
            }
         }
    });
    return loadingFetchApi;
}

export {LoadingPromise}