# base image
FROM node:14.18.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install package.json (o sea las dependencies)
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@12.2.13

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0
