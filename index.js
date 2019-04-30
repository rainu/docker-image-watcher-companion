const axios = require('axios')
const envParser = require('rainu-env-parser')

let cfg = envParser.parse("", {
  endpoint: 'http://docker-image-watcher:8080',
  observation: [],
})

for (let i=0; i < cfg.observation.length; i++) {
  let curObservation = cfg.observation[i]

  console.log(`Process observation:`, curObservation)

  let data = {
    registry: curObservation.registry || 'docker.io',
    image: curObservation.image,
    tag: curObservation.tag || 'latest',
    trigger: {
      name: curObservation.trigger.name || `observation_${i}`,
      method: curObservation.trigger.method || 'GET',
      url: curObservation.trigger.url,
      header: curObservation.trigger.header || {},
    }
  }

  axios.post(`${cfg.endpoint}/api/v1/registry`, data)
    .then(() => console.log('Successfully registered observation'))
    .catch((err) => {
      console.log('Failed to register observation', err)
      process.exit(1)
    })
}