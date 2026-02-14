import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken'


// API for adding doctor
const addDoctor = async (req,res) => {

    try {


        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        
    // started to correcting code --->Check if image file is uploaded
    // This prevents error: "Cannot read properties of undefined (reading 'path')"
    if (!imageFile) {
      return res.json({ success: false, message: "Image file is required" })
    }  // Ended corrected code here



  // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

// validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

// validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
// Hashing doctor password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

// Upload image to Cloudinary
const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
const imageUrl = imageUpload.secure_url

const doctorData = {
    name,
    email,
   
    image:imageUrl,
    // hashedPassword,  //-->old
    password:hashedPassword,  //new change
    speciality,
    degree,
    experience,
    fees,
    address: JSON.parse(address),
    date: Date.now()
}
const newDoctor = new doctorModel(doctorData)
await newDoctor.save()

res.json({success:true,message:"Doctor Added"})

  
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
};


//API for admin Login
const loginAdmin = async (req,res)=>{
    try {

        const { email, password } = req.body

if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(email+password, process.env.JWT_SECRET)
    res.json({ success: true, token })
} else {
    res.json({ success: false, message: "Invalid credentials" })
}

    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API  to get all doctors list for admin panel
const allDoctors=async (req,res)=>{

    try {
        const doctors=await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
    }
    catch(error){
    
        console.log(error)
        res.json({success:false,message:error.message})
    }
}




// ////*******For causing error temporary added code then it should be removed********* *//////
// const changeAvailability = async (req, res) => {
//   try {
//     const { doctorId, availability } = req.body;

//     await doctorModel.findByIdAndUpdate(doctorId, {
//       available: availability
//     });

//     res.json({ success: true, message: "Availability updated" });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };
// //////***********Renove above commented code////////// */










export { addDoctor,loginAdmin,allDoctors};//changeAvailability newly added



