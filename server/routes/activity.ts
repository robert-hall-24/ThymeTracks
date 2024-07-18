import { Router } from 'express'

import * as db from '../db/activity.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const activities = await db.getAllActivities()

    res.json({ activities })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


router.post("/", async (req, res, next) => {
  try {
    const create_activity = req.body
    const creatingTask = await db.addActivity(create_activity)
    res.status(200).json({ created: creatingTask })
  } catch (e) {
    next(e)
  }
  
})

export default router
