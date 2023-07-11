import nodemailer from 'nodemailer'

async function Mailer (otp) {
    let mailTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port : 587,
        auth: {
            user: 'erling30@ethereal.email',
            pass: 'BkJw4txPU59Y5X8GwR'
        }
    });
    let mailDetails = {
        from: '"Adim@Doddles" <doddles_Admin@gmail.com>',
        to: otp.email,
        subject: 'OTP Authentication for Doddles',
        text: JSON.stringify(otp.otp)
    };
    
    mailTransporter.sendMail(mailDetails, async function (err, data) {
        if (err) {
            console.log('Error Occured', err);
            return false;
        } else {
            console.log('Email sent successfully');
            return true;
        }
    });
}


export default Mailer;