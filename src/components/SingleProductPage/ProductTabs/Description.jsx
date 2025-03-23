import React from 'react'

const Description = ({ description }) => {
    return (
        <div className=''>
            <p className='text-secondary text-sm font-light'>
                {description}
            </p>
        </div>
    )
}

export default Description