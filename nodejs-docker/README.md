# nodejs docker 

---
### To install dependency 
* npm i 

### Application exeuction 
* node app.js 

### To hit the application 
* curl localhost:3000/espark -v


## Docker process 
* docker build . -t nodejs-docker

## To exeucte docker 
* docker run -p 3000:3000 nodejs-docker

### To hit the application 
* curl localhost:3000/espark -v

## To remove the docker container 
* $ docker ps -a 
* $ docker container rm -f <'container-id'>