import { users } from "../storage/data"
import { Request, Response } from 'express'
export default class Users {
    create(req: Request, res: Response): any {
        const { name, career } = req.body
        if (!name || !career) res.send(!name ? "Invalid name" : "Invalid career")
        users.push({ name, career, id: users.length + 1 })
        return res.json({
            status: 200,
            message: " Added a new user successfully",
            data: users
        })
    }

    read(req: Request, res: Response): any {
        const { name } = req.query //we're picking some fields inside the object query ; filter by name
        return res.json({
            status: 200,
            message: " Added a new user successfully",
            data: name ? users.filter((user) => user.name.trim().toLowerCase() === String(name).trim().toLowerCase()) : users
            // : means else
        })
    }

    update(req: Request, res: Response): any {
        const { id } = req.params //destructuring the param object
        if (!id) res.json({ statsus: 400, message: " Invalid id identifier " })
        const { name } = req.body   //destructuring the body
        users[Number(id) - 1].name = name     //updating a name field and assigning it to a new field
        const newUsers = users
        return res.json({
            status: 200,
            data: newUsers
        })
    }

    deleteUser(req: Request, res: Response): any {
        const { id } = req.params //access the ID
        if (!id) res.json({ statsus: 400, message: " Invalid id identifier " })
        const newUsers = users.filter((user) => user.id !== Number(id))
        return res.json({
            status: 200,
            data: newUsers
        })
    }
}