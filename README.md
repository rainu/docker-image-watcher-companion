# docker image watcher companion

This little docker image is responsible for putting observations to a running docker-image-watcher
instance. Therefor it reads ENV-Variables and interpret them as observations.

## Installation

You need a running docker-image-watcher instance. See [docker-image-watcher documentation](https://github.com/rainu/docker-image-watcher#installation)

After that you can start a container like this:

```bash
docker run \
    --link docker-image-watcher \
    -e OBSERVATION_0_IMAGE=alpine \ 
    -e OBSERVATION_0_TRIGGER_NAME=myTrigger \ 
    -e OBSERVATION_0_TRIGGER_URL=http://example.org/myTrigger \ 
    rainu/docker-image-watcher-companion
```

Or see the [docker-compose](./docker-compose.yml) for example

## Documentation

### Configuration

| ENV-Variable                       | Default-Value | required | Description  |
| ---------------------------------- |:-------------:|:--------:| -------------|
| ENDPOINT                           | http://docker-image-watcher:8080 | false    | The endpoint to the docker-image-watcher instance |
| OBSERVATION_*N*_REGISTRY           | docker.io            | false    | The registry of the image which you want observe  |
| OBSERVATION_*N*_IMAGE              | -            | true    | The name of the image which you want to observe |
| OBSERVATION_*N*_TAG                | latest            | false    | The tag of the image which you want to observe |
| OBSERVATION_*N*_TRIGGER_NAME       | observation_*N*            | true    | The name of the trigger which should be called after the watched image will changed |
| OBSERVATION_*N*_TRIGGER_METHOD     | GET            | false    | The http-method of the trigger which should be called after the watched image will changed |
| OBSERVATION_*N*_TRIGGER_URL        | -            | true    | The url of the trigger which should be called after the watched image will changed |
| OBSERVATION_*N*_TRIGGER_HEADER_KEY | -            | false    | The headers (*KEY* is the name of the HEADER) of the trigger which should be called after the watched image will changed |


## Release History
* 0.0.1 The first implementation

## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing

1. Fork it (<https://github.com/rainu/docker-image-watcher-companion/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
