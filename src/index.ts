import * as dotenv from 'dotenv'
dotenv.config()

import app from './server'

app.listen(3021, () => {
  console.log('server is running on http://localhost:3021/')
})