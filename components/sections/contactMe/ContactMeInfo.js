import React from 'react'
import classes from './ContactMeInfo.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactMeInfo = () => {
    return (
        <div className={classes.contactMeInfo}>
            <h2 className={classes.contactMeTitle}>Contact Me</h2>
            <p className={classes.contactMeDesc}>
                Got any suggestions for projects? Or just fancy a chat? Please reach out to me using the
                form or get in touch via my social channels!
            </p>
            <div className={classes.socialLinks}>
                <a href='https://github.com/freddieswift' target="_blank" rel="noreferrer">
                    <FaGithub className={classes.socialIcon} color='#007acc' size='2.4rem' />
                </a>
                <a href='https://www.linkedin.com/in/freddie-swift/' target="_blank" rel="noreferrer">
                    <FaLinkedin className={classes.socialIcon} color='#007acc' size='2.4rem' />
                </a>
            </div>
        </div>
    )
}

export default ContactMeInfo