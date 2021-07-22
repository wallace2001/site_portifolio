import axios from 'axios';
import React, {createContext} from 'react';
import { useState } from 'react';
import { Loading } from '../components/Loading';

interface PropsData{
    data: {
        name: string;
        email: string;
        telphone: number;
        description: string;
    };
}

interface PropsScroll{
    about: boolean;
    contact: boolean;
    portfolio: boolean; 
}

interface PropsContext{
    status: {
        response: boolean;
        success: boolean;
        error: any;
    },
    loading: boolean;
    scrollActive: {
        about: boolean;
        contact: boolean;
        portfolio: boolean;    
    };
    handleSendEmail: ({data}: PropsData ) => void;
    handleChangeStatus: (status: boolean) => void;
    handleChangeScroll: (active: string) => void;
}

export const WebContext = createContext({} as PropsContext);

export const WebProvider = ({children}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [firstAccess, setFirstAccess] = useState<boolean>(true);
    const [scrollActive, setScrollActive] = useState<PropsScroll>({
        about: false,
        contact: false,
        portfolio: false
    });
    const [status, setStatus] = useState({
        response: false,
        success: false,
        error: {}
    });

    setTimeout(() => {
        setFirstAccess(false);
    }, 5 * 1000);

    const handleChangeStatus = (status: boolean) => {
        setLoading(status);
    };

    const handleSendEmail = ({data}: PropsData) => {
        setLoading(true);
        axios.post("/api/email", data).then(res => {
            setLoading(false);
            if(!res.data.error){
                setStatus({
                    success: true,
                    error: {},
                    response: true,
                });
                sessionStorage.setItem("send_email", "true");
                setLoading(false);
            } else {
                setStatus({
                    success: false,
                    error: res.data.error,
                    response: true,
                });
                setLoading(false);
            }
        });
    };

    const handleChangeScroll = (active: string) => {
        if(active === "about"){
            setScrollActive({...scrollActive, about: true});
        }
        if(active === "portfolio"){
            setScrollActive({...scrollActive, portfolio: true});
        }
        if(active === "contact"){
            setScrollActive({...scrollActive, contact: true});
        }
    };

    if(loading || firstAccess){
        return(
            <Loading />
        );
    }
    return(
        <WebContext.Provider value={{
            status,
            loading,
            scrollActive,
            handleChangeScroll,
            handleSendEmail,
            handleChangeStatus
        }}>
            {children}
        </WebContext.Provider>
    );
};