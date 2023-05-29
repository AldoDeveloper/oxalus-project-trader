import React from "react";
import Content from "./Content";
import { StateComponentDasboard } from "../interface/Props";

export default class Dasboard_v1 extends React.Component<any, StateComponentDasboard>{

    public constructor(props: any){
        super(props);
    }

    public render(): React.ReactNode {
        return <Content/>
    }
}