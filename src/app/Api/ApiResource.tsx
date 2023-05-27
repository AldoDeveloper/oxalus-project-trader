import { dev_api } from "../../config/config";
import { LoaderListSubscribtion, PropsData } from "../interface/Props";

interface Login{
    email?: string,
    password?: string,
}

async function ApiFetchLogin(bodys: Login){
    const loginFetch = await fetch(`${dev_api.API_URL}api/member/login`, {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json',
        'x-api-key'   :  dev_api?.API_KEY,
    }),
    body: JSON.stringify(bodys),
    signal: AbortSignal.timeout(15000)
    })
    return loginFetch;
}

async function ApiFetchAuth(data: PropsData){
    const infoAuth = await fetch(`${dev_api.API_URL}api/member/info`, {
        method: 'GET',
        headers: new Headers({
            'AUTHORIZATION' : `Bearer ${data.token}`,
            'x-api-key'     : dev_api.API_KEY,
        }),
        signal: AbortSignal.timeout(15000),
    });
    return infoAuth;
}

async function getListSubscribtion(props: LoaderListSubscribtion){
    try{
        const jsonObjectAuth = JSON.parse(window.localStorage.getItem('login_web') as string);
        const getListPayment = await fetch(`https://api.oxalus.trade/api/subscription/listavailablepackage`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type'  : 'Application/json',
                'x-api-key'     : dev_api.API_KEY,
                'AUTHORIZATION' : 'Bearer ' + jsonObjectAuth?.token
            }),
            signal: AbortSignal.timeout(15000)
        });
        const response = await getListPayment.json();
        return response;
    }
    catch(error){
        return {props, error};
    }
}
async function processSubscribtions(tokens: string, body: any) : Promise<Response>{
    const postProcess = await fetch(`${dev_api.API_URL}api/subscription/process`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json',
            'AUTHORIZATION' : 'Bearer ' + tokens,
        }),
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15000)
    });
    return postProcess;
}

export { ApiFetchLogin, ApiFetchAuth, getListSubscribtion, processSubscribtions }