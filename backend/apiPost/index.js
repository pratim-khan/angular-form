const createMongoClient = require('../mongo/mongo');

module.exports = async function (context, req) {

  const student= req.body
  const { db, connection } = await createMongoClient()


  const Students = db.collection('students')
  const Dropdown = db.collection('uid')
  const data= Dropdown.update(
    {id:1},
    { $inc:{uid:1}},
  )
  const res = await Dropdown.findOne({id:1})
  let UID = res.uid

  try {
    if(!student){
      context.res={
        status:400,
        body:'student not enter'
      }
      return
    }

    student["uid"]=UID
    const students = await Students.insert(student)
    // const hello = await Students.insert({uid:UID})
    // connection.close()

    context.res = {
      status: 200,
      body: students
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error creating a new student registration'
    }
  }
  

  // const insert = Students.insert({value:UID})
}