import { LoginActionProps } from "../interface/Props";
import { ApiFetchLogin } from "../Api/ApiResource";
import { LoadingPromise } from "../LoadingPromise/Loading";
import { redirect } from "react-router-dom";

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

export { ActionLogin }