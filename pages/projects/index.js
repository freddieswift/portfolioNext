import Link from 'next/link'
import { Fragment } from 'react';
import Header from '../../components/sections/header/Header';

const index = () => {
    const slug = 'testing-again'
    return (
        <>
            <Header />
            <h1>Work in progress...</h1>
            <Link href={'/projects/' + slug}>Hello</Link>
        </>
    )
}

export default index