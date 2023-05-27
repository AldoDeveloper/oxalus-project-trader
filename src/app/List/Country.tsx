
import React from 'react';

interface CountryControler{
    loading: boolean,
    data?: [],
    error?: null
}
export default function Country(){
    const [controller, setController] = React.useState<CountryControler>({
        loading: false,
        data: [],
        error: null,
    });

    React.useEffect(() =>{
       try{
        (async() =>{
            const getCountry = await fetch('https://restcountries.com/v3.1/all', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type' : 'application/json'
                }),
                signal: AbortSignal.timeout(15000)
            });
            const resJson = await getCountry.json();
            setController({loading: true, data: resJson})
        })();
       }
       catch(error: any){
            setController({loading: true, error: error})
       }
    }, []);
    if(!controller.loading){
        return <option value="">Loading....</option>
    }else if(controller.error){
        throw new Error('Error Get Data Country')
    }else{
        return(
            <>
               {
                    controller.data?.map((val: any, idx) => {
                      return <option key={idx} value="">{val?.name?.common}</option>
                    })
               }
            </>
        )
    }
}