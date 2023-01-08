import express from 'express'
import getCurrentPlan from '../utilities/getCurrentPlan'

const router = express.Router()

router.post('/getCurrentPlan',getCurrentPlan)

export default router