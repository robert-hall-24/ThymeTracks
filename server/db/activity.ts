import connection from './connection.ts'
import { Activity } from '../../models/activity.ts'

export async function getAllActivities(): Promise<Activity[]> {
  return connection('activity').select()
}

export function getActivityByID(id: number) {
  const active = connection('activity').where({ id }).select()
  return active
}

export function updateAct(updateTask: Activity, id: number) {
  const { hours, stats } = updateTask
  const count = connection('activity').where({ id }).update({ hours, stats })
  return count
}

export async function addActivity(activity: Activity) {
  const create_activity = connection('activity').insert({ ...activity })
  return create_activity
}

export async function getActivityName() {
  return connection('Activity').select()
}

export async function getTotalHours(cadenceID: number, activityID: number) {
  const result = await connection('Activity_Cadence as ac')
    .join('Activity as a', 'ac.Activity_ID', 'a.ID')
    .join('Cadence as c', 'ac.Cadence_ID', 'c.ID')
    .select('ac.Hours')
    .where('c.ID', cadenceID)
    .andWhere('a.ID', activityID)
    .first()
  return result
}

export async function changeCurrentHours(
  hours: number,
  cadenceID: number,
  activityID: number,
) {
  // Create a subquery to get the ids that match the conditions
  const subquery = connection('Activity_Cadence as ac')
    .join('Activity as a', 'ac.Activity_ID', 'a.ID')
    .join('Cadence as c', 'ac.Cadence_ID', 'c.ID')
    .select('ac.Activity_ID', 'ac.Cadence_ID')
    .where('c.ID', cadenceID)
    .andWhere('a.ID', activityID)

  // Use the subquery in the where clause of the update statement
  await connection('Activity_Cadence')
    .whereIn(['Activity_ID', 'Cadence_ID'], subquery)
    .update({ Hours: hours })
  console.log(hours)
}
