import { connectToDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Unable to connect to database.' });
      return;
    }

    try {
      await insertDocument(client, 'blog-contact', newMessage);
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Unable to insert data.' });
      return;
    }
    res.status(201).json({
      message: 'Contact message saved to database successfully.',
      newMessage,
    });
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed.` });
  }
}
export default handler;
