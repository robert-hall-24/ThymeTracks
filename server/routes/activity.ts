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

export default router
