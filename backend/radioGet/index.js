const createMongoClient = require('../mongo/mongo')

module.exports = async context => {
  const { db, connection } = await createMongoClient()

  const Radio = db.collection('radio')
  const res = await Radio.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body
  }
}