const { restClient } = require('@polygon.io/client-js');
require('dotenv').config();
const rest = restClient(process.env.API_KEY, "https://api.polygon.io");

// https://polygon.io/docs/stocks/get_v2_aggs_ticker__stocksticker__prev
rest.stocks.previousClose("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
