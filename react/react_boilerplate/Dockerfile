FROM nebo15/alpine-node:6.9.5

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production

RUN apk add --update \
    python

COPY package.json /tmp/package.json
RUN cd /tmp && npm install --production && mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

COPY . /opt/app

RUN npm run build

RUN rm -rf ./app/client \
	rm -rf ./app/common \
	rm -rf ./node_modules/webpack

# Clear deps and caches
RUN apk --purge del python && rm -rf /var/cache/apk/*

CMD ["pm2-docker", "pm2.process.yml"]
