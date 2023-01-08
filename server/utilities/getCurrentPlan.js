import User from '../models/auth'
import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const plan = await User.findById(req.body.id).planOpted
        return res.status(200).json({plan: plan})
    } catch (error) {
        console.log('serv utils getCurrentPlan ', error);
        return res.status(500).json({error})
    }
})

export default router