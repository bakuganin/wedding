import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com.',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'roybak7@gmail.com',
    pass: '5051Peniss'
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, attendance, song } = req.body;

  const mailOptions = {
    from: 'roybak7@gmail.com',
    to: 'jegorbakunin@gmail.com',
    subject: 'New message from wedding website',
    text: `
      Name: ${name}
      Attendance: ${attendance}
      Favorite song: ${song}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
}