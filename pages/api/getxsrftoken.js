// import { withIronSessionApiRoute } from 'iron-session/next'
// import { sessionOptions } from '/lib/session'

// export default withIronSessionApiRoute(getxsrftoken, sessionOptions)

// async function getxsrftoken(req, res) {
//   try {
//     const xsrftoken = await fetch('61.74.187.4:7100')

//     const data = await response.json()

//     const xsrf = data.json()
//     req.session.xsrf = xsrf
//     await req.session.save()
//     res(xsrf)
//   } catch (error) {
//     res.status(500).json({ message: (error).message })
//   }
// }