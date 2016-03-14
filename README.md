# MEAN retail app

## Usage

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

Install all packages that are dependencies of the project
```sh
npm install
```

If you want to simply serve the app run:
```sh
node ./bin/www
```

If you want live server reloads each time you change a file serve with gulp instead:
```sh
gulp serve
```