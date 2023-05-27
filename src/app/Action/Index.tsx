import { LoginActionProps } from "../interface/Props";
import { ApiFetchLogin, ApiFetchRegister } from "../Api/ApiResource";
import { LoadingPromise } from "../LoadingPromise/Loading";
import { redirect } from "react-router-dom";
import {toast} from 'react-toastify';

async function ActionLogin(props: LoginActionProps){
    const formDataSubmit = await props?.request.formData();
    const body = Object.fromEntries(formDataSubmit);
    try{
         const Apis = ApiFetchLogin(body)
         const useLoading   = await LoadingPromise(Apis, 'Login Success');
         const responseJson = await useLoading.json();
         if(responseJson?.status >= 400) return { responseJson };
         if(responseJson?.status === 200){
            window.localStorage.setItem('login_web', JSON.stringify(responseJson));
            return redirect('/dasboard');
         }
    }catch(error){
        return {};
    }
}

async function ActionRegister(props: LoginActionProps){
    const getFormData = await props?.request.formData();
    const bodys = Object.fromEntries(getFormData) ;
    try{
       const getPromiseFetch = ApiFetchRegister(bodys as any);
       const useLoading   = await LoadingPromise(getPromiseFetch, 'Register Success');
       const responseJson = await useLoading.json();
       if(responseJson?.status >= 400){
            toast.error('Error Validasi', {
                type: 'error',
                theme: 'dark',
                autoClose: 3000,
            })
            return { responseJson }
       }
       if(responseJson?.status === 200){
         toast.success('Register Success Verify Your Account...',{
            type: 'success',
            theme: 'dark',
            autoClose: 5000,
         })
         return redirect('/auth/login')
       }
    }
    catch(error){
        return {error}
    }
    
    return bodys;
}

export { ActionLogin, ActionRegister }