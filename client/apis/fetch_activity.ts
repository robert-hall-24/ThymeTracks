import request, { get } from 'superagent'
import { Activity } from '../../models/activity'

const rootUrl = '/api/v1'

export async function getActivity(): Promise<Activity[]> {
  const res = await request.get(rootUrl + '/activity')
  return res.body
}

// export async function getActivityByID(id: number) {
//   const res = await request.get(rootUrl + `activity/${id}`)
//   return res.body
// }
