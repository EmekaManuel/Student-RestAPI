const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getSpecificStudent,
  createNewStudent,
  UpdateStudentRecord,
  DeleteStudentfromRecord,
} = require("../controllers/routeControllers");

router.get("/", getAllStudents);
router.get("/:id", getSpecificStudent);

router.post("/", createNewStudent);

router.put("/:id", UpdateStudentRecord);
router.delete("/:id", DeleteStudentfromRecord);

module.exports = router;
