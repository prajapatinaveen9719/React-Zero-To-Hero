import { useEffect } from "react";
import AboutUsComponent from "./aboutUs";

const ContactUsComponent=()=>{

    useEffect(()=>{
     const timer=setInterval(() => {
            console.log(' fn interval');
        }, 1000);

        return()=>{
            console.log('interval clear')
            clearInterval(timer)
        }
    })

    return(
        <>
        <AboutUsComponent/>
        <h1>This is Conatct Us Page...</h1>
     
        </>
    )
}

export default ContactUsComponent;
