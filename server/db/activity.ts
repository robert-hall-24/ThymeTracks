import connection from './connection.ts'
import { Activity } from '../../models/activity.ts'

export async function getAllActivities(): Promise<Activity[]> {
    return connection("activity").select()
    
}