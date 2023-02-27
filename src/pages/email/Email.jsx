import React from 'react';
import emailjs from 'emailjs-com';


const ContactUs = ({
    closeForm,
    userName,
    userEmail,
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
            <label>User name:</label>
            <input type="text" name="to_name" />
            <label>Your name:</label>
            <input type="text" name="from_name" defaultValue={userName} />
            <br />
            <br />
            <label>User Email:</label>
            <input type="email" name="to_email" />
            <label>Your Email:</label>
            <input type="email" name="from_email" defaultValue={userEmail} />
            <br />
            <br />
            <label>Message:</label>
            <textarea style={{ width: 532 }} name="html_message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactUs;