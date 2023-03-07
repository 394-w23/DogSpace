import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ContactUs from './WhatsApp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppForm = ({
    toName,
    toWhatsApp,
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
            <WhatsAppIcon className="contact-button" style={{ color: '#118B6D', float: 'right' }} onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Send WhatsApp</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Contact him/her at
                    </DialogContentText>
                    <ContactUs closeForm={handleClose} toName={toName} toWhatsApp={toWhatsApp} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default WhatsAppForm;