# Email Service

A microservice to send out email to users

---

## Screenshots

### Email Template
![](./screenshorts/EmailTemplate.png)

### Actual Email 
![](./screenshorts/Email1.png)

---

## Running

### Run without Docker

- `npm install` OR `yarn`
- `node src/app.js`

### Run with Docker

- `docker build -t email-service .`
- `docker run -p 3333:3333 email-service`

---

## Push image to registry

- `docker build -t vs4vijay/email-service .`
- `docker login`
- `docker push vs4vijay/email-service`

---

## To Do

- [x] Basic Node + Express
- [x] Dockerize
- [ ] Run as non-root user
  - [ ] Multistage Build
- [ ] Kubernetes (Good to have)
- [ ] Deploy to Cloud
- [ ] nginx
- [ ] Code
  - [x] Use `yarn` instead of `npm`
  - [ ] Validation and Error Frameworks
  - [x] Enhance the code structure and decouple

---

## Development Notes

```

npm i -D prettier eslint eslint eslint-config-prettier eslint-plugin-prettier

Install ESLint
Install Prettier


printWidth: 80

curl -X POST -d '{"metadata": {}}'  "0.0.0.0:3333/api/v1/email" -v -H "Content-Type: application/json"

curl -X POST -d '{"email":"vijay.soni@srijan.net","metadata": {"name":"Jay Kumar","sale_id":888}}'  "0.0.0.0:3333/api/v1/email" -H "Content-Type: application/json"


```
