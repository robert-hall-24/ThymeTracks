import request from 'superagent'
import { hours } from '../../models/activity'
const rootUrl = '/api/v1'

export async function updateHours(
  Hours: hours,
  ModeID: number,
  TileID: number,
) {
  await request.patch(rootUrl + `/activity/${ModeID}/${TileID}`).send(Hours)
}
