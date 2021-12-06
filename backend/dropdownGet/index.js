const createMongoClient = require('../mongo/mongo')

module.exports = async context => {
  const { db, connection } = await createMongoClient()

  const Dropdown = db.collection('dropdown')
  const res = await Dropdown.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body
  }
}