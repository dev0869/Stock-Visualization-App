import React from 'react'
import Header from '../components/Header'
const Layout = (props) => {
    return (
        <div className='p-2'>
            <Header />
            <br />
            {props.children}
        </div>
    )
}

export default Layout