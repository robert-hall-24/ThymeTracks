import { Router } from 'express'

import * as db from '../db/activity.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const activities = await db.getActivityName()
    res.json(activities)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/', async (req, res) => {
  try {
    const activities = await db.getAllActivities()

    res.json({ activities })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id1/:id2', async (req, res, next) => {
  try {
    const id1 = Number(req.params.id1) // The mode id
    const id2 = Number(req.params.id2) // The card ID
    const event = await db.getTotalHours(id1, id2)
    if (!event) {
      res.sendStatus(404)
    }
    res.json(event)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id1/:id2', async (req, res, next) => {
  try {
    const id1 = Number(req.params.id1)
    const id2 = Number(req.params.id2)
    const updatedHours = req.body.hours
    console.log(updatedHours)
    const hours = await db.changeCurrentHours(updatedHours, id1, id2)
    res.status(200).json({ updated: hours })
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const event = await db.getActivityByID(id)
    if (!event) {
      res.sendStatus(404)
    }
    res.json(event)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedAct = req.body
    const updateTask = await db.updateAct(updatedAct, id)
    res.status(200).json({ updated: updateTask })
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const create_activity = req.body
    const creatingTask = await db.addActivity(create_activity)
    res.status(200).json({ created: creatingTask })
  } catch (e) {
    next(e)
  }
})

export default router
