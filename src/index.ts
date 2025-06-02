import express, {Request, Response, Express} from 'express' //imports express
import routes from './route'
const app: Express = express() //creates an instance of express application
import dotenv from 'dotenv'
dotenv .config()
app.use(express.json()) // middleaware to parse JSON

//creating an entry-point api
app.get('/'), (req: Request, res: Response) => {
    console.log(process.env.HOST)
    res.send("Hello, backend world")
}
app.use (routes)


//lets the app listen to a port number
app.listen(process.env.PORT, () => {
    console.log( `server runnnng on http://localhost:${process.env.PORT}`)
})



//modularizing code