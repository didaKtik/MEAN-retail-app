# MEAN retail app

## Context
This application is written based on the examples given in the course [Introduction to MongoDB using the MEAN Stack](https://www.edx.org/course/introduction-mongodb-using-mean-stack-mongodbx-m101x).

It features:
- Data storage with MongoDB and Mongoose as ODM.
- Server configured with Node and Express.
- User authentification with Facebook OAuth.
- Front-end strucured with Angular.
- Angular code written in Node.js style and automatically browserified.
- Clear separation of concerns in the overall architecture: all the UI code is on the client-side, the server only provides API endpoints.

## Usage

For more detailed instructions on how to set up MongoDB and how to register to third-party services and get the API keys have a look at [Introduction to MongoDB using the MEAN Stack](https://www.edx.org/course/introduction-mongodb-using-mean-stack-mongodbx-m101x).

### Setup the database
Once you have MongoDB installed, you have to populate the database with mock-data:
1. Start a Mongo server:
```
mongod
```
2. From the root directory (where the dump directory is):
```
mongorestore
```
And that's it! By default mongorestore takes the data present in dump and restores it to localhost:27017, which is the default that you should have with mongod.

### Get your developer API keys to use third-party services
You will need API keys for Stripe, Facebook and openExchangeRates.
You can get these keys by registering as a developer to the corresponding websites.
Then create a `config.json` file in the root directory, with the following content:
```json
{
  "facebookClientId": "YOUR_FB_CLIENT_ID",
  "facebookClientSecret": "YOUR_FB_CLIENT_SECRET",
  "stripeKey": "YOUR_STRIPE_KEY",
  "openExchangeRatesKey": "YOUR_OPEN_EXCHANGE_RATES_KEY",
}
```

### Install Node dependencies
Install all packages that are dependencies of the project
```sh
npm install
```

### Serve!
If you want to simply serve the app run:
```sh
node ./bin/www
```

If you want live server reloads each time you change a file serve with gulp instead:
```sh
gulp serve
```