import 'reflect-metadata'

import { buildApp } from '@/app'
import cluster from 'cluster'
import os from 'os'
import dotenv from 'dotenv'

dotenv.config()

if (process.env.CLUSTERING) {
  const numCPUs = os.availableParallelism() // os.cpus().length
  if (cluster.isPrimary) {
    console.log(`Master process ${process.pid} is running`)

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker process ${worker.process.pid} died. Restarting...`)
      cluster.fork()
    })
  } else {
    buildApp()
      .then(([app, endpoint]) => {
        app
          .listen({ port: app.config.PORT })
          .then((address) =>
            console.log(
              `Worker process ${process.pid} is listening on ${address}${endpoint}`
            )
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
  }
} else {
  buildApp()
    .then(([app, endpoint]) => {
      app
        .listen({ port: app.config.PORT })
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
}
