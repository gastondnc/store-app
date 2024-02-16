import { Dispatch, SetStateAction, useEffect, useState } from "react"

type UseFetchReturn<T> = {
    fetchResponse: T[], 
    setFetchUrl: Dispatch<SetStateAction<string>>, 
    fetchIsLoading: boolean,
    fetchError: null | string
}

export const useFetch = <T>(initialUrl?: string): UseFetchReturn<T> => {
    const [ url,  setUrl ] = useState<string>(initialUrl || '');
    const [ response,  setResponse ] = useState<T[]>([]);
    const [ isLoading,  setIsLoading ] = useState<boolean>(false); 
    const [ error,  setError ] = useState<null | string>(null);

    useEffect(() => {

        if(url) {
            setIsLoading(true)
            setError(null)
            fetch(url)
            .then(resp => {
                checkErrors(resp.status)
                return resp.json()
            })
            .then(data => {
                // console.log('DATAAAAAAA',data)
                if(Object.keys(data).length === 0){
                    setResponse([])
                    throw new Error('Upsss, hubo un ERROR 0X0000FFFFeEEEQUETEPARIO')   
                }else{
                    setResponse(data)
                }
            })
            .catch(err => setError(err.message  + ' --- ERROR'))
            .finally(() => setIsLoading(false))
        }

    }, [url])

    const checkErrors = (statusResponse: number): void => {
        const status = statusResponse.toString()
        if(status.startsWith('3')){
            throw new Error('No tienes permisos')
        }else if(status.startsWith('4')){
            throw new Error('No existe el recurso')
        }else if(status.startsWith('5')){
            throw new Error('No responde el servidor')
        }
    }


    // return [ response, setUrl, isLoading, error ]
    return {
        fetchResponse: response, 
        setFetchUrl: setUrl, 
        fetchIsLoading: isLoading,
        fetchError: error
    } 
}
