import NewsLetter from '../models/newsletter.schema.js';

export const subscribeNewsLetter = async(req,res)=>{
    const {email} = req.body;

    if(!email){
        res.status(400).json({message: "Email is required"});
    }

    const existingSubscription = await NewsLetter.findOne({email});
    if(existingSubscription){
        return  res.status(400).json({message: "Email is already subscribed"});
    }   
    const subscription = await NewsLetter.create({email});
    res.status(201).json({
        success: true,
        message: "Subscribed to newsletter successfully",
        data: subscription,
    }); 
}


export const getAllSubscriptions = async(req,res)=>{
    const subscriptions = await NewsLetter.find().sort("-createdAt");
    res.json(subscriptions);
}   