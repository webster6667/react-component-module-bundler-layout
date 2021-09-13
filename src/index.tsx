import React from 'react'

import './style.less'

import Img from './img.jpeg'

export const MyComponent = () => {

    const tsTest: string = 'test'


    return (<div >
        <img src={Img} alt=""/>
        <p>{tsTest}</p>
    </div>)
}