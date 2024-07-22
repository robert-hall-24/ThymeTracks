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
  const hoursTotalResult = await connection('Activity_Cadence as ac')
    .join('Cadence as c', 'ac.Cadence_ID', 'c.ID')
    .join('Activity as a', 'ac.Activity_ID', 'a.ID')
    .select('ac.Cadence_ID', 'c.Hours_Max')
    .sum('ac.Hours as total_hours')
    .where('c.ID', cadenceID)
    .andWhere('a.ID', activityID)
    .groupBy('ac.Cadence_ID', 'c.Hours_Max')
    .first()

  // Default inputHours to the provided hours if no total_hours was found
  let inputHours = hours

  // If the user inputs hours that go over max available,
  // Then hours can only be the difference of Max - total
  if (hoursTotalResult) {
    const { Hours_Max, total_hours } = hoursTotalResult
    /*console.log("Check total + hours", total_hours + hours)
    console.log("Max is", Hours_Max)*/
    // If Total_hours in database + new hours is greater than max
    // Hours allowed then 'cap off' off the amount
    // (e.g. User = 30, total = 20, max = 24, the user value is capped at 4)
    if (total_hours + hours > Hours_Max) {
      inputHours = Hours_Max - total_hours
      console.log('running this statement if')
    }
    inputHours = Math.max(inputHours, 0)
  }

  const subquery = connection('Activity_Cadence as ac')
    .join('Activity as a', 'ac.Activity_ID', 'a.ID')
    .join('Cadence as c', 'ac.Cadence_ID', 'c.ID')
    .select('ac.Activity_ID', 'ac.Cadence_ID')
    .where('c.ID', cadenceID)
    .andWhere('a.ID', activityID)

  // Where we've ended up with a final input of 0
  // We only update where the original value is
  // zero or less (e.g. negative/zeroing value)
  if (inputHours > 0 || (inputHours == 0 && hours <= 0)) {
    // Use the subquery in the where clause of the update statement
    await connection('Activity_Cadence')
      .whereIn(['Activity_ID', 'Cadence_ID'], subquery)
      .update({ Hours: inputHours })
  }
  /*
  console.log("Result of Checking input vs max", hoursTotalResult)
  console.log("Input ", hours)
  console.log("Updated input", inputHours)
  */
}
