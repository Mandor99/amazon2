import React from 'react'
import { Link } from 'react-router-dom'

function ConditionalLink({children, to, condition}) {
    return (
        <>
            {
                (!!condition && to) ? (<Link to={to} className="user__cart">{children}</Link>) : (<>{children}</>)
            }
        </>
    )
}

export default ConditionalLink
