import express from 'express'
import user from './user-route.js'
const routes = express.Router()
routes.use('/users', user)
export default routes

