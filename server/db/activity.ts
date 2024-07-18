import connection from './connection.ts'
import { Activity } from '../../models/activity.ts'

export async function getAllActivities(): Promise<Activity[]> {
    return connection("activity").select()
    
}


export async function addActivity(activity: Activity) {
    const create_activity = connection('activity').insert({ ...activity })
    return create_activity
    
}