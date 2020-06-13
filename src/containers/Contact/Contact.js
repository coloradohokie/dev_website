import React from 'react'
import classes from './Contact.module.css'

const contact = () => (
    <div>
        <h1>contact</h1>
        <p>To inquire about professional work, please contact me via LinkedIn.com</p>
        <p>You may also fill out the form below.</p>

        <div className={classes.ContactForm}>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="company" placeholder="Company/Organization" />
                <input type="text" name="phone" placeholder="Phone Number" />
                <textarea name="message" placheolder="Please enter your message"></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
)

export default contact