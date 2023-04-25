const StudentRecord = require("../model/studentModel");

// @desc  Get -- Gets Students from Database
// @route get /api/students
// @access Private
const getAllStudents = async (req, res) => {
  try {
    const getStudents = await StudentRecord.find();
    res.status(200).json(getStudents);
  } catch (error) {
    res.json({ message: error });
  }
};

// @desc  Get -- Gets Specific Students from Database
// @route get /api/students/id
// @access Private
const getSpecificStudent = async (req, res) => {
    try {
      const getASpecificStudents = await StudentRecord.findById(req.params.id);
      res.status(200).json(getASpecificStudents);
    } catch (error) {
      res.json({ message: error });
    }
  };
  
// @desc  Creates A New Student Record
// @route Post /api/students
// @access Private
const createNewStudent = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.regNumber ||
      !req.body.phone ||
      !req.body.gender ||
      !req.body.department
    ) {
      return res.status(400).send("Please Enter The Required Field");
    }
    const newStudent = await StudentRecord.create({
        name: req.body.name,
        regNumber: req.body.regNumber,
        phoneNumber: req.body.phone,
        gender: req.body.gender,
        department: req.body.department
    })
    res.status(201).json(newStudent)

  } catch (error) {
    res.status(500).send("Unable to save to database");
  }
};

// @desc  Updates a Record for a Student using the Student ID
// @route Put /api/students/id
// @access Private
const UpdateStudentRecord = async (req, res) => {
    const checkIfStudentExist = await StudentRecord.findById(req.params.id) 
    if ( !checkIfStudentExist) {
        res.status(400)
        throw new Error ('Student not Found')
    }
    const updatedStudent = await StudentRecord.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedStudent)
};

// @desc  Delete Student Record from the database using the Student ID
// @route Delete /api/students/id
// @access Private
const DeleteStudentfromRecord = async (req, res) => {
    const checkIfStudentExist = await StudentRecord.findById(req.params.id)
    if (!checkIfStudentExist) {
      res.status(400)
      throw new Error ('Student not Found')
    }
    await StudentRecord.findByIdAndRemove({_id: req.params.id})
    res.status(200).json({id: req.params.id})
};

module.exports = {
  getAllStudents,
  getSpecificStudent,
  createNewStudent,
  UpdateStudentRecord,
  DeleteStudentfromRecord,
};
