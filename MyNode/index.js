const express = require('express')
const server = express()
const parser = require('body-parser')
const service = require('./user-serve')

let userData = require('./array').users
let projectData=require('./array').project

server.use(parser.json())

const PORT = 12345

server.get('/status',(rq,rs)=>{
    rs.send({message:'Server is up & Running'})
})

server.get('/users',(rq,rs)=>{
    rs.send({ data: userData })
})

server.post('/users/project_id/:project_id',(rq,rs)=>{
    rs.send({
        data : service.byId(userData,parseInt(rq.params.project_id))
    })
})
server.post('/usersByProject',(rq,rs)=>{
    rs.send(service.byProject(userData,projectData));
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})