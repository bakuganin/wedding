// // api/save_form.js

// const nodemailer = require('nodemailer');

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, attendance, song } = req.body;

//         // Настройки для отправки почты
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'roybak7@gmail.com',
//                 pass: '5051Peniss'
//             }
//         });

//         let mailOptions = {
//             from: 'roybak7@gmail.com',
//             to: 'jegorbakunin@gmail.com',
//             subject: 'New Wedding RSVP',
//             text: `Name: ${name}\nAttendance: ${attendance}\nFavorite Song: ${song}`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({ error: 'Failed to send email' });
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 return res.status(200).json({ message: 'Email sent successfully' });
//             }
//         });

//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
