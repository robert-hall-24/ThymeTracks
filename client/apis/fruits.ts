import request, { get } from 'superagent'

const rootUrl = '/api/v1'

export async function getFruits(): Promise<string[]> {
  const res = await request.get(rootUrl + '/fruits')
  return res.body.fruits
}

console.log(getFruits())
