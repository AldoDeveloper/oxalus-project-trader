import React from 'react';
import { motion } from 'framer-motion';

interface PropInterface{
    response:{
        status: number,
        message: string,
        error: boolean,
        data?: any
    }
}
const OptionsAnimate = {
    show:{
        opacity:1,
        y:0,
    },
    hidde:{
        opacity: 0,
        y:50
    }
}

export default class AlertOxalus extends React.Component<PropInterface>{
  public constructor(props: PropInterface){
      super(props);
      this.LinkAction = this.LinkAction.bind(this);
  }

  private HandleClick(props: any){
      console.log(props)
  }

  private LinkAction() : JSX.Element | any{
     const statusResponse = this.props;
     if(statusResponse?.response.data !== undefined){
        return(
            <div className="d-flex justify-content-center">
                <button type='button' onClick={async() => 
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
      if(alertStatus.response.error){
        return (
            <>
                <motion.div initial={'hidde'}
                   transition={{ duration: 0.4 }}
                   animate={'show'}
                   variants={OptionsAnimate}
                   className='alert alert-danger'>
                     <div className='mb-2'>{ alertStatus?.response.message }</div>
                     <this.LinkAction/>
                </motion.div>
            </>
        )
      }
      return <></>
  }
}