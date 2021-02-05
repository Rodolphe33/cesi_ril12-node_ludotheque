FROM node:14

WORKDIR /opt/morpio

# install deps
COPY package.json /opt/morpio
RUN npm install

# copy app files to dockerimage
COPY src src
COPY *.json .

# run
EXPOSE 3000
CMD ["npm", "start"]