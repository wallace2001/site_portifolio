import React, {createContext} from 'react';
import { useState } from 'react';
import { Loading } from '../components/Loading';

interface PropsContext{

}

export const WebContext = createContext({} as PropsContext);

export const WebProvider = ({children}) => {
    const [loading, setLoading] = useState<boolean>(false);

    if(loading){
        return(
            <Loading />
        );
    }
    return(
        <WebContext.Provider value={{}}>
            {children}
        </WebContext.Provider>
    );
};