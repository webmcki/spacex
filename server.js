const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()

//cros-origin 허용
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`포트: ${PORT} 에서 서버가 시작되었습니다!`))
