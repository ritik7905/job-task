import React from 'react'


//styles
import "./style.scss"

const WhyUs = (props) => {
    return (
        <div className='Card'>
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.para}</p>

        </div>
    )
}

export default WhyUs