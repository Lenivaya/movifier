import 'reflect-metadata'

import { buildApp } from '@/app'

buildApp()
  .then(([app, endpoint]) => {
    app
      .listen({ port: app.config.PORT, host: app.config.HOST })
      .then((address) =>
        console.log(`Server listening on ${address}${endpoint}`)
      )
      .catch((err) => {
        app.log.error(err)
        process.exit(1)
      })
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
