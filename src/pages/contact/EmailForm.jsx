import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ContactUs from './Email';
import EmailIcon from '@mui/icons-material/Email';

const EmailForm = ({
    userName,
    userEmail,
    toName,
    toEmail,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ overflow: 'visible' }} >
            <EmailIcon className="contact-button" style={{ color: '#118B6D', float: 'right' }} onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Send Email</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Contact 
                    </DialogContentText>
                    <ContactUs closeForm={handleClose} userName={userName} userEmail={userEmail} toName={toName} toEmail={toEmail} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EmailForm;