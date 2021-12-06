const MongoClient = require('../mongo/mongo')


module.exports = async function (context, req) {
  const { db, connection } = await MongoClient()

  const Students = db.collection('students')

      try{
        let findby = {};
        if(req.query.roll){
          findby["roll"]=parseInt(req.query.roll);
        }
        if(req.query.name){
          findby["firstname"]=req.query.name
        }
    const res = await Students.find(findby)
    let body = await res.toArray()
    if(body && Array.isArray(body) && body.length == 1){
      body = body[0]
    }

    connection.close()
    context.res = {
      status: 200,
      body
    }
  }catch(error){
    context.res={
      status:500,
      body:"can not get the student"
    }

  }}