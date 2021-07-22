import React from 'react';
import styles from '../../styles/Success.module.scss';
import { useRouter } from 'next/dist/client/router';

export default function Success(){
    const router = useRouter();
    const query: any = router.query;

    return(
        <div className={styles.container}>
            <div className={styles.header}></div>
            {query.success === "true" ? (
                <div className={styles.box}>
                    <h3>E-mail enviado com sucesso.</h3>
                    <p>Muito obrigado por entrar em contato comigo, fique de olho no seu email que jájá te respondo.</p>
                    <button onClick={() => router.push('/')}>Voltar para a página</button>
                </div>
            ) : (
                <div className={styles.box}>
                    <h3>Ocorreu algum erro ao enviar o email.</h3>
                    <p>Desculpe pelo transtorno, por favor, volte para a página anterior e tente novamente.</p>
                    <button onClick={() => router.push('/')}>Voltar para a página</button>
                </div>               
            )}

        </div>
    );
};