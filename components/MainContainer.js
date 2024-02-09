import React from 'react';
import A from './A';
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"nikanorburlaku, nextjs, " + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text='Main' />
                <A href={'/users'} text='Users' />
                <style jsx>
                    {`
                    .navbar{
                        background: orange;
                        padding: 15px;
                    }
                    `}
                </style>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;