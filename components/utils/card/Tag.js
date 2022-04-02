import React from 'react'
import classes from './Tag.module.css'

const Tag = (props) => {
    return (
        <div className={classes.cardTag}>{props.name}</div>
    )
}

export default Tag