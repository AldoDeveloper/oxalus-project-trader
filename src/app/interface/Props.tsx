export interface LoginActionProps{
    params?: any,
    request?: any
}

export interface LoaderLogin{
    request: any,
    params: any,
}

export interface PropsData{
    token: string,
    status: string,
    error: boolean,
    message: string
}

interface UserDataInfo{
    country: string,
    email: string,
    history_subscription: [],
    member_id :string,
    name: string,
    referral_by : string,
    status: string,
    subscription_active:any
}

export interface UserInfo{
    data: UserDataInfo,
    error: boolean,
    message: string,
    status:number
}

export interface LoaderPropsAuth{
    auth: boolean,
    users: UserDataInfo,
}

export interface StateComponentDasboard{
    
}