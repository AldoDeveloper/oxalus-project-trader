import { dev_api } from "../../config/config";
import { PropsData } from "../interface/Props";

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

export { ApiFetchLogin, ApiFetchAuth }