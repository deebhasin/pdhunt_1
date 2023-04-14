const KiteConnect = require("kiteconnect").KiteConnect;

const apiKey = "your_api_key";
const accessToken = "your_access_token";
const kite = new KiteConnect({
  api_key: apiKey,
});
kite.setAccessToken(accessToken);
const now = new Date();
kite.quote("NSE:INFY").then((data) => {
  console.log(`Last traded price of INFY as of ${now.toISOString()} is ${data["NSE:INFY"].last_price}`);
});
