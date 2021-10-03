# Custody X Change Front-End Application

This project was developed with Angular version 12.2.8.

## Run the application
Follow the steps below to run the application:

- First, use the command `npm install` to install all the dependencies;
- Then, open `environment.ts` and add the right apiUrl, like below:
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```
- Finally, just run the command `npm start` and the application will start in development mode. Open your browser on `http://localhost:4200` to see the application.
