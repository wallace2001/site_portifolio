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

interface PropsContext{
    status: {
        response: boolean;
        success: boolean;
        error: any;
    },
    handleSendEmail: ({data}: PropsData ) => void;
}

export const WebContext = createContext({} as PropsContext);

export const WebProvider = ({children}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState({
        response: false,
        success: false,
        error: {}
    });

    const handleSendEmail = ({data}: PropsData) => {
        console.log(data);
        setLoading(true);
        axios.post("/api/email", data).then(res => {
            setLoading(false);
            if(!res.data.error){
                setStatus({
                    success: true,
                    error: {},
                    response: true,
                });
                window.location.replace("/success?success=true");
                localStorage.setItem("send_email", "true");
            } else {
                setStatus({
                    success: false,
                    error: res.data.error,
                    response: true,
                });
                window.location.replace("/success?success=false");
            }
        });
    };

    if(loading){
        return(
            <Loading />
        );
    }
    return(
        <WebContext.Provider value={{
            status,
            handleSendEmail,
        }}>
            {children}
        </WebContext.Provider>
    );
};