import React from 'react'
import classes from './Grid.module.css'

const Grid = (props) => {
    return (
        <div className={`${classes[props.gridLayout]} ${props.className}`}>{props.children}</div >
    )
}

export default Grid