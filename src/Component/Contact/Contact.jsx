import { useState } from 'react';
import './Contact.css'
import FormInput from './FormInput.jsx';

const Contact = () => {

    const [] = useState();

    return (
        <div className='contact-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8836693118606!2d105.87735597503051!3d20.99729978064418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aea9131a12c5%3A0x54f36db501e2c88a!2zNDIyIFAuIFbEqW5oIEjGsG5nLCBUaGFuaCBUcsOsLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1730399887585!5m2!1svi!2s" width="642" height="640" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form className='form-container'>
            <h1>Contact</h1>
            <FormInput type='text' placeholder='Name' />
            <FormInput type='text' placeholder='Email'/>
            <FormInput  placeholder = 'Phone'/>
            <textarea name="" id="" placeholder='Leave a message here'></textarea>
            <button>Send</button>
        </form>
        </div>
    )
}

export default Contact;