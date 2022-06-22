### Welcome to Mario Campbell Code Test

To run this code test be sure you have `docker` installed

In you don't please follow this [docker installation guide](https://docs.docker.com/get-docker/) 

Then you can navigate into `front` and run
```
npm install
```
Then navigate into `back` and run
```
npm install
```
when you install all the dependencies please run:
```sh 
docker-compose up -d
```
This will build and run the application which contains

# Backend

In Backend basic NodeJs/ExpressJs application with connection to MongoDB
```
http://localhost:5001/api/v1
```
### Folder structure for backend
```
back
├── controller
│  └── index.ts
├── database
│  ├── index.ts
│  └── seeder.ts
├── Dockerfile
├── index.ts
├── interfaces
│  └── UserResponse.ts
├── models
│  └── User.ts
├── package-lock.json
├── package.json
├── routes
│  └── index.ts
└── services
   └── index.ts

```

# Frontend
In frontend a basic React app Styled with Chakra UI as component library and Axios to handle api calls

```
http://localhost:3000
```

### Folder structure for front
```
front
├── Dockerfile
├── package-lock.json
├── package.json
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── App.tsx
│  ├── assets
│  │  └── background.jpeg
│  ├── components
│  │  └── dashboard
│  ├── hooks
│  │  └── useAxios.ts
│  ├── index.tsx
│  ├── interfaces
│  │  └── UsersResponse.ts
│  └── react-app-env.d.ts
└── tsconfig.json
```

