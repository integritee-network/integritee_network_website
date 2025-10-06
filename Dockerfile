FROM node:20.19.0

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
# RUN npm i -g npm && npm i -g yarn

RUN corepack enable && corepack prepare yarn@4.5.3 --activate
RUN rm yarn.lock
RUN yarn
RUN yarn build

ENV HOST=0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
