FROM node:19
WORKDIR /usr/src/module
COPY --from=module . .
WORKDIR /usr/src/app
COPY . .
CMD [ "node", "index.mjs" ]
