var nodemailer =requre ('nodemailer')

var transporter= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: '*******@gmail.com',
        pass:'@@@@@'
    }
})

var mailOptions = {
    from:'*********@gmail.com',
    to: '*********@yahoo.fr',
    subject: 'Test Email',
    text: 'this is a test email sent from Node.js using Nodemailer'
}

transporter.sendMail(mailOptions,(error,info)=>{
    if (error){
        console.error(error)
    }else console.log('email sent'+info.response)
})