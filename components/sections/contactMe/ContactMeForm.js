import React from 'react'
import formClasses from './ContactMeForm.module.css'

const ContactMeForm = () => {
    return (
        <form className={formClasses.contactMeForm} action="https://formsubmit.co/freddie_swift@outlook.com" method="POST">
            <div>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" type="text" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" required />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" type="text" required></textarea>
            </div>
            <button className="btn formBtn">Send</button>
        </form >
    )
}

export default ContactMeForm