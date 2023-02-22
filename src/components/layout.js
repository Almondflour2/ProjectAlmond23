import * as React from 'react'
import { container } from './layout.module.css'

//reusable layout component (component uses props)
const Layout = ({ popcorn, children }) => {
    return (
        <div className={container}>
            <main>
                {popcorn}
                {children}
            </main>
        </div>
    )
}

export default Layout