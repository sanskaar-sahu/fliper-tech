import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import connectDB from './config/db.js';

//routes import 
import projectRoutes from './routes/project.routes.js';
import clientRoutes from './routes/client.routes.js';   
import contactRoutes from './routes/contact.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';
import adminRoutes from './routes/admin.routes.js';



const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes); 
app.use('/api/contacts', contactRoutes); 
app.use('/api/newsletter', newsletterRoutes);
app.use('/' , adminRoutes)



app.get('/' , (req,res)=>{
    res.send("API is running...");
})

const PORT   = process.env.PORT || 3000;  

app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});