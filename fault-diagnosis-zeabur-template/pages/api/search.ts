import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

const dataPath = path.resolve('./public/fault_actions.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = (req.query.q || '').toString().toLowerCase()
  const result = data.filter(item =>
    item['Main Reson  (主要原因)'].toLowerCase().includes(q)
  )
  res.status(200).json(result)
}