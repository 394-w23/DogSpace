import React from 'react';
import emailjs from 'emailjs-com';
import { height } from '@mui/system';
import { colors } from '@mui/material';


const ContactUs = ({
    closeForm,
    userName,
    userEmail,
    toEmail,
    toName,
}) => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_2le5hw2', 'template_lr44ole', e.target, 'iJW7z1X3ROxNPiqVa')
            .then((result) => {
                closeForm();
                e.preventDefault();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            {/* <label>User name:</label> */}
            <input type="hidden" name="to_name" defaultValue={toName} />
            {/* <label>Your name:</label> */}
            <input type="hidden" name="from_name" defaultValue={userName} />
            {/* <label>User Email:</label> */}
            <input type="hidden" name="to_email" defaultValue={toEmail} />
            {/* <label>Your Email:</label> */}
            <input type="hidden" name="from_email" defaultValue={userEmail} />
            <textarea style={{ width: '100%', height: '100px' }} name="html_message" />
            <input type="submit" style={{ border: 'none', background: 'white', fontSize: '15px', color: '#6FCF97' }} value="SEND" />
        </form>
    );
}

export default ContactUs;