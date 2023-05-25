import { motion } from "framer-motion";
const useAnimatedRoutes = {
    show:{
        opacity: 1,
        y:0,
    },
    hidde:{
        opacity: 0,
        y:-50,
    },
};

interface PropsAnimate{
    children: JSX.Element,
}

export function SlideAnimate(props: PropsAnimate){
    return(
        <motion.div 
            variants={useAnimatedRoutes}
            initial={'hidde'}
            animate={'show'}
            transition={{ duration: 0.5 }}>
          {props.children}
        </motion.div>
    )
}