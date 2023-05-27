import { ApiFetchAuth } from "../Api/ApiResource";
import { LoaderLogin, PropsData } from "../interface/Props";


export async function LoaderAuth(loader: LoaderLogin){
    if(window.localStorage.getItem('login_web') !== null){
         const tokensData : PropsData = JSON.parse(window.localStorage.getItem('login_web') as string);
         const responses  = tokensData;
         try{
            const getInfo = await ApiFetchAuth(responses);
            if(getInfo.status === 200){
                const Usersinfo = await getInfo.json();
                return { users: Usersinfo, auth: true, token: responses?.token};
            }
            if(getInfo.status === 400) return { auth: false }
         }
         catch(error){
            console.log(error)
         }
    }
    return { loader };
}