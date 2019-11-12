import React from 'react'

import md5 from 'md5'

function GravatarUrl (email)  {
    // const email = props.email
    const hash = md5(email)
    const gravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`

    // return (
    //     <img
    //         className={props.className}
    //         src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
    //         alt="Avatar"
    //     />
    // )

    return gravatar
}

export default GravatarUrl