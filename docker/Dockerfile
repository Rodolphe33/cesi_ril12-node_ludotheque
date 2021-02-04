FROM node:14

WORKDIR /opt/morpio

# install deps
COPY package.json /opt/morpio
RUN npm install

# copy app files to dockerimage
COPY src /opt/morpio/src/
COPY e2e /opt/morpio/e2e/
COPY *.json /opt/morpio/

# run
EXPOSE 3000
CMD ["npm", "start"]