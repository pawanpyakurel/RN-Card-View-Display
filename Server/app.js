const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require ('mongoose')

require("./employee")

app.use(bodyParser.json())

const Employee = mongoose.model("employee")
const mongoUri= "mongodb+srv://PawanRN:Pawan12345@cluster0-l1eds.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//sucess
mongoose.connection.on("Connected",()=>{
    console.log("connectes mongo sucessful")
})

//failure
mongoose.connection.on("error",(err)=>{
    console.log(err,"Error")
})



//routes

//get
app.get('/index',(req, res)=>{
    Employee.find({}).then(data=>{
        res.send(data)
    })
    .catch(err =>{
        console.log(err, "error")
    })
})


// store to database
app.post('/send-data', (req,res) =>{
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    })
    employee.save()
    .then(data =>{
        console.log(data)
        res.send(`sucess ${data}`)
    })
    .catch(err =>{
        console.log(err, "error")
    })
    
})

//delete
app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body._id)
    .then(data=>{
        console.log(data)
        res.send(`deleted ${data._id}`)
    })
    .catch(err =>{
        console.log(err)
    })
})

//update
app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body._id,{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    })
    .then(data =>{
        console.log(data)
        res.send(`updated ${data}`)
    })
    .catch(err =>{
        console.log(err)
    })
})


app.listen(3000, ()=>{
    console.log("server running")
})