import React, {createContext} from 'react';

interface PropsContext{

}

export const WebContext = createContext({} as PropsContext);

export const WebProvider = ({children}) => {
    return(
        <WebContext.Provider value={{}}>
            {children}
        </WebContext.Provider>
    );
};