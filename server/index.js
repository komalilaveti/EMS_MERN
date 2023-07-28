 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Event= require('./models/insertschema')
const Register=require('./models/registerschema')
const Eventregister=require('./models/eventschema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/event_manager', { useNewUrlParser: true });
app.post('/delete',async(req,res)=>{
   const DeleteEvent=req.body.delEvent
   try {
      await Event.deleteOne({name:DeleteEvent})
      res.send("deleted data..")
      console.log("data is deleted")
      } catch(err) {
      console.log(err)
      }
})
app.post('/register', async(req, res) => {
   const Name = req.body.name
   const Email = req.body.email
   const Password = req.body.password

   const registerations = new Register({
   name: Name,
   email:Email,
   password:Password
   })

   try {
   await registerations.save();
   res.send("inserted data..")
   console.log("inserted data")
   } catch(err) {
   console.log(err)
   }
})
app.post('/eventregister', async(req, res) => {
   const Name = req.body.name
   const Email = req.body.email
   const Roll = req.body.roll
   const Branch=req.body.branch

   const registerations = new Eventregister({
   name: Name,
   email:Email,
   roll:Roll,
   branch:Branch
   })

   try {
   await registerations.save();
   res.send("inserted data..")
   console.log("inserted data")
   } catch(err) {
   console.log(err)
   }
})
app.post('/login',async(req,res)=>{
   const Email=req.body.email
   const Password=req.body.password
   try {
      const query = { "email":Email, "password":Password };
      const user = await Register.findOne(query);
  
      if (user) {
         res.status(200).send({ message: 'Login successful' });
         console.log('login successful');
      } else {
         res.status(401).send({ message: 'Incorrect username or password' });
         console.log('incorrect email or password');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal server error' });
    }
   })
app.post('/insert', async(req, res) => {
   const EventName = req.body.eventName
   const Description = req.body.description
   const Venue = req.body.venue
   const Date = req.body.date
   const Time = req.body.time
   const Branch = req.body.branch

   const eventDetails = new Event({
   name: EventName,
   date:Date,
   time:Time,
   desc:Description,
   venue:Venue,
   branch:Branch
   })

   try {
   await eventDetails.save();
   res.send("inserted data..")
   console.log("inserted data")
   } catch(err) {
   console.log(err)
   }
});
app.get('/view', async(req, res) => {
   try{
   const events = await Event.find({"name":"sample"});
    res.send(events);
    res.end();
   //  client.close();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return
  }
 });
const port = process.env.PORT || 4000;

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});