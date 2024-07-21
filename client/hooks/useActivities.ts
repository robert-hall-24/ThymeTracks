import { useQuery } from '@tanstack/react-query'
import { getActivity } from '../apis/fetch_activity'
import request from 'superagent'
import { hours } from '../../models/activity'

const rootUrl = '/api/v1'

export function useActivity() {
  const query = useQuery({ queryKey: ['activity'], queryFn: getActivity })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useActivitybyID(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const res = await request.get(rootUrl + `activity/${id}`)
      return res.body
    },
  })
}

export function useActivityHours(ModeID: number, TileID: number) {
  return useQuery({
    queryKey: ['hours', ModeID, TileID],
    queryFn: async () => {
      const res = await request.get(rootUrl + `/activity/${ModeID}/${TileID}`)
      return Object.values(res.body) as unknown as hours
    },
  })
}
