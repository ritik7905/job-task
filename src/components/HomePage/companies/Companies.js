import React from 'react'

//styles
import "./style.scss"

const Companies = (props) => {
    return (<>


       
        <div className='companies-img'>
            <img src={props.source} alt="" />
        </div>
    </>

    )
}

export default Companies