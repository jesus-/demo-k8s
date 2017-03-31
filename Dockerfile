# BUILD CMD docker build -t demo-k8s .
FROM node:6.10.1-alpine

# COPY all current file in to image
COPY . .

# Install node package
RUN yarn

# default cmd 
CMD ["node", "index.js"]

EXPOSE 8080