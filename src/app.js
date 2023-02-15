const express = require('express');
const app = express();
require('./db/conn');
const Student = require('./models/students');
const User = require('./models/users');

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Welcome to Student page.');
})

// create new student
app.post('/students', (req, res)=>{
    // console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
})

// store record using async await
app.post('/student', async(req, res)=>{
    try{
        const user  = new Student(req.body);
        const createuser = await user.save();
        res.status(200).send(createuser);
    } catch(e){
        res.status(400).send(e);
    }
})

// get student api
app.get('/students', async(req, res)=>{
    try{
        const data = await Student.find();
        res.status(200).send(data);
        /* data.map((currEle)=> {
            return currEle.email;
        }) */
    } catch(e){
        res.status(400).send(e);
    }
})

// find specific student
app.get('/students/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        // console.log(req.params);
        const studentData = await Student.findById(_id); 
        if(!studentData){
            return res.status(404).send({});
        } else {
            res.status(200).send(studentData);
        }
    } catch(e){
        res.status(400).send(e);
    }
})

// update student record
app.patch('/student/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const studentUpdate = await Student.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        if(!studentUpdate){
            return res.status(404).send({});
        } else {
            res.status(200).send(studentUpdate);
        }
    } catch(e){
        res.status(500).send(e);
    }
})

//delete record
app.delete('/student/:id', async(req, res)=>{
    try {
        const _id = req.params.id;
        const delStudent = await Student.findByIdAndDelete(_id);
        if(!delStudent){
            return res.status(404).send();
        } else {
            res.status(200).send(delStudent);
        }
    } catch(e){
        res.status(500).send(e);
    }
    
})

// get user api
app.get('/users', async(req, res)=>{
    try{
        // req.params.id
        const data = await User.find({age: {$lt:req.query.age }});
        res.status(200).send(data);
    } catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));