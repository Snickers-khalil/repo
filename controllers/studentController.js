const asyncHandler = require('express-async-handler')
const student = require('../models/student')


//GET
const getStudents=asyncHandler(async(req,res)=>{
    const students =await Student.find()
    console.log(students);
    cls=student.classe
    res.status(200).json(students)
})


//Post
const setStudent=asyncHandler(async(req,res)=>{
    const { nom, prenom, email,classe } = req.body
    if(!nom || !prenom || !email ||!classe){
        res.status(400)
        throw new console.error(('verifier vos input'));
    }
    const studentExists = await Student.findOne({ nom })
    if (studentExists) {
      res.status(400)
      throw new Error('Student already exists')
    }
   
    {
        const student =await Student.create({
            nom,
            prenom,
            email,
            classe
        })
        res.status(200).json(student)
    }
})

//Update
const updateStudent=asyncHandler(async(req,res)=>{
    const goal =await Student.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Student not found')
    }
    const updateStudent =await Student.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json(updateStudent)
})


//Delete
const deleteStudent=asyncHandler(async(req,res)=>{
    const student =await Student.findById(req.params.id)
    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }
    await Student.findOneAndRemove()
    res.status(200).json({id:req.params.id})
})

module.exports={
    getStudents,
    setStudent,
    updateStudent,
    deleteStudent
}