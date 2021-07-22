import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';
import {AiFillLock} from 'react-icons/ai';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { WebContext } from '../../context/contact';

type Inputs = {
    name: string;
    email: string;
    telphone: number;
    description: string;
};

export const Contact = () => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const {handleSendEmail, handleChangeStatus, loading, scrollActive} = useContext(WebContext);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const alreadySendEmail = await sessionStorage.getItem("send_email");
        handleChangeStatus(true);

        if(alreadySendEmail === "true"){
            setError(true);
            handleChangeStatus(false);
            return;
        }

        if(submitting){
            handleChangeStatus(false);
            return;
        }
        setSubmitting(true);
        handleSendEmail({data});
        setSubmitting(false);

    }

    const propsHeader = useSpring({
        opacity: scrollActive.contact ? 1 : 0,
        x: scrollActive.contact ? 0 : -500,
        delay: 100,
    });
    const propsContent = useSpring({
        opacity: scrollActive.contact ? 1 : 0,
        x: scrollActive.contact ? 0 : -500,
        delay: 300,
    });

    return (
        <div className={styles.container}>
            <animated.h2 style={{...propsHeader}}>Entre em contato comigo</animated.h2>
            <animated.div style={{...propsHeader}} className={styles.line} />

            <div className={styles.wrapper}>
                <animated.div style={{...propsContent}} className={styles.wrap}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {error && <p style={{color: "#ff0000", fontSize: 16}}>Desculpe, você já enviou um email.</p>}
                        <label>
                            <p>Nome</p>
                            <input {...register("name", {required: true})} type="text" placeholder="Digite seu nome" />
                            {errors.name && <p style={{color: "#ff0000", fontSize: 16}}>Nome obrigatório</p>}
                        </label>
                        <label>
                            <p>E-mail</p>
                            <input {...register("email", {required: true})} type="text" placeholder="Digite seu e-mail" />
                            {errors.email && <p style={{color: "#ff0000", fontSize: 16}}>Email obrigatório</p>}
                        </label>
                        <label>
                            <p>Telefone</p>
                            <input {...register("telphone", {required: true})} type="text" placeholder="Digite seu númeo de telefone para contato" />
                            {errors.telphone && <p style={{color: "#ff0000", fontSize: 16}}>Telefone obrigatório</p>}
                        </label>
                        <label>
                            <p>Dúvida</p>
                            <textarea {...register("description")} placeholder="Digite sua dúvida" />
                        </label>
                        <button type="submit" className={!loading ? styles.button : styles.buttonDisabled}>
                            {loading ? (<AiFillLock />) : "Enviar"}
                        </button>
                    </form>
                </animated.div>
                <animated.div style={{...propsContent}} className={styles.separator}>
                    <div></div>
                    <p>ou</p>
                    <div></div>
                </animated.div>
                <animated.div style={{...propsContent}} className={styles.wrap}>
                    <label className={styles.label}>
                        <h4>E-mail</h4>
                        <p>Kollen22@outlook.com</p>
                    </label>
                    <label className={styles.label}>
                        <h4>Telefone</h4>
                        <p>(61)99178-6805</p>
                    </label>
                </animated.div>
            </div>
        </div>
    )
}
