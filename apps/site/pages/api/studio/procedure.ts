import { apiRoute } from '@lib/apiRoute'
import { setupCors } from '@lib/cors'
import { checkSponsorAccess } from '@lib/getSponsorData'
import { protectApiRoute } from '@lib/protectApiRoute'

let apis
export default apiRoute(async (req, res) => {
  try {
    apis = await require('@tamagui/studio/api')
  } catch (error) {
    console.log('git-crypt is not unlocked. returning.', error)
    res.status(500).json({})
    return
  }
  setupCors(req, res)
  const { supabase } = await protectApiRoute({ req, res })
  await checkSponsorAccess({
    req,
    res,
    supabase,
    throwIfNoAccess: true,
  })

  const procedureName = req.query.procedure

  if (req.method === 'POST') {
    if (typeof procedureName !== 'string') {
      res
        .status(400)
        .json({ error: '`procedure` query param is not provided / incorrect.' })
      return
    }

    try {
      res.json(await apis[procedureName](JSON.parse(req.body)))
      return
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'an unknown error occurred' })
      return
    }
  }

  res.status(405).json({})
})
