require("dotenv").config();
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.NEXT_PUBLIC_API_KEY);

export default async(req, res) => {
  const {
    name,
    description,
    email,
    telphone
  } = req.body;

  try {
    const msg = {
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVE, // Change to your recipient
      from: process.env.NEXT_PUBLIC_EMAIL_SEND, // Change to your verified sender
      subject: `${name} enviou uma mensagem para você.`,
      html: `
        <h3>E-mail: <h5>${email}</h5></h3>
        <h3>Telefone: <h5>${telphone}</h5></h3>
        <p>${description}</p>
      `,
    }
  
    await sgMail.send(msg).then(res => {}).catch(error => {});

    res.status(200).json("Mensagem enviada.");
  } catch (error) {
      return res.json({error});
  }
}
