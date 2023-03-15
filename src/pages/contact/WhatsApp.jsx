import React from 'react';
import emailjs from 'emailjs-com';
import { height } from '@mui/system';
import { colors } from '@mui/material';


const ContactUs= ({
    toName,
    toWhatsApp,
}) => {


    return (
        <form className="contact-form">
            <input type="hidden" name="to_name" defaultValue={toName} />
            <input name="to_whatsapp" defaultValue={toWhatsApp} style={{border:'none', fontSize:'15px', color: '#118B6D'}}/>
        </form>
    );
}

export default ContactUs;