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
    users: {
        data: UserDataInfo
    },
}

export interface LoaderListSubscribtion{
    request: any,
    params: any,
}

export interface DataListSubscribtion{
    benefit: string,
    description_package: string,
    duration_package: string,
    id_package: string,
    price_package: string
}

export interface ObjectListSubscribtion{
    data: DataListSubscribtion[],
    error: boolean,
    message:any,
    status: number
}

export interface StateComponentDasboard{
    
}