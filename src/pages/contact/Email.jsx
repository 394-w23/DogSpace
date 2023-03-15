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
                setShowToast(true);
                e.preventDefault();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="to_name" defaultValue={toName} />
            <input type="hidden" name="from_name" defaultValue={userName} />
            <input name="to_email" defaultValue={toEmail} style={{border:'none', fontSize:'15px', color: '#118B6D'}}/>
            <input type="hidden" name="from_email" defaultValue={userEmail} />
            <textarea style={{ width: '100%', height: '100px' }} name="html_message" />
            <input type="submit" style={{ border: 'none', background: 'white', fontSize: '15px', color: '#6FCF97' }} value="SEND" />
        </form>
    );
}

export default ContactUs;