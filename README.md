# Reproduce instructions


## Step 1 - clone & install
```
git clone git@github.com:doronpr/sentry-plain.git
cd sentry-plain
yarn
cd ios
rm -rf Podfile.lock && pod install
cd ../
```


## Set params
1. Create the file `sentry.properties` inside `ios/` with this content:
```
defaults.url=https://sentry.io/
defaults.org=<SLUG>
defaults.project=<PROJECT>
auth.token=<AUTH_TOKEN>
```
2. edit App.tsx and set DSN

### Run
`yarn ios`

Hit `Try` to send the error
