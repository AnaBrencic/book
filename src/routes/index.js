'use strict'

import Router from 'express'
const routes = new Router()

routes.get('/', (req, res) => {
  res.send('ola')
})

export default routes
