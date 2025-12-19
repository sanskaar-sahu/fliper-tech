import Client from '../models/client.schema.js';

export const getClients = async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
};

export const createClient = async (req, res) => {
    const { name, email, designation ,description , image } = req.body;        
    if (!name || !email || !designation || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }     
  const client = await Client.create(req.body);
  res.status(201).json(client);
};
