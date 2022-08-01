//Create two middlewares one should be applicable to all the routes present in backend application is containing and other should be applicable to any 2 specific routes 

const express =require("express")
const app = express()

const middleware1 = (req,res,next) =>{
    console.log('middleware1')
    next()
}
const middleware2 = (req,res,next) =>{
    console.log('middleware2')
    next()
}

app.use(middleware2)//using middleware2 globally
app.use(middleware1)

app.get('/page1',middleware1,function (req,res) {
    console.log('page1 - both middleware 1 and 2 applied')
})//here we will get both middleware 1 and 2

app.get('/page2',function (req,res) {
    console.log('page2')
})

app.get('/page3',middleware1,function (req,res) {
    console.log('page3 - - both middleware 1 and 2 applied')
})

app.get('/page4',function (req,res) {
    console.log('page4')
})

app.get('/page5',function (req,res) {
    console.log('page5')
})

app.listen(8080,function () {
    console.log('App is running')
})