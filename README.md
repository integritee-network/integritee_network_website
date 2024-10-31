# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## deploy to portainer

```bash
docker buildx build -t integritee/website:1.18 .
# test the image locally
docker run integritee/website:1.18
docker login
docker push integritee/website:1.18
```

change portainer config:

Stacks -> integritee-website -> edit -> update image

there are two stages. First you should test staging: 
* node-web.image: integritee/website:X.XX -> 2 replicas for https://staging.integritee.network
* node-web-prod.image: integritee/website:X.XX -> 2 replicas for https://integritee.network

deploy the stack

https://portainer.integritee.network/#!/2/docker/stacks/incognitee-landing?id=21&type=1&regular=true&external=false&orphaned=false

### troubleshooting
#### fail to fetch docker image
can be caused by "no space left on device", but you won't see that msg in portainer. ssh into the swarm machine at portainer.integritee.network

```bash 
docker system prune
```
