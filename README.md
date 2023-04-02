## Dev Container Demo

This is a demo of an application using dev containers:

* It uses a docker-compose.yml to define mongo and redis sidecars
* It uses a Dockerfile with Ubuntu as a base
* docker.sock is mounted so that we can use Docker-in-Docker and execute docker commands from the dev container

### Getting started

1. Clone the repo
1. Open it in VSCode
1. Reopen in container when prompted
1. That's it! You're in. You can start it with `yarn install` then `yarn start`

Or, simply open the repo in a GitHub Codespace.
