import jwt from 'jsonwebtoken'

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    // const {dtoken} = req.headers   //Most recently changed
    const dtoken = req.headers.dtoken || req.headers.dToken


    if (!dtoken) {
      return res.json({success:false, message:'Not Authorized Login Again'})
    }

    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)

    // req.body.docId=token_decode.id  //Older ONeee
    req.docId = token_decode.id;   // store docId safely


    next()
  } catch (error) {
    console.log(error)
    return res.json({success:false, message:error.message})
  }
}

export default authDoctor