import express, {Router, Request, Response} from 'express'
import {users} from '../storage/data'
const router: Router = express.Router()  //creating an instance of the router
import Users from '../controller/user-controller'

const { create,read, update, deleteUser} = new Users ()

router.get('',read)

// users is a route
router.post('', create)


router.patch('', update) 

router.delete('', deleteUser)

export default router