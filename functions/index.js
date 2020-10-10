const functions = require('firebase-functions');
var Scraper = require('images-scraper');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const runtimeOpts = {
  memory: '1GB'
}

exports.scrapeImages = functions.runWith(runtimeOpts).https.onRequest(async (req, res) => {
    const google = new Scraper({
    puppeteer: {
        headless: true,
    }
    });

    const results = await google.scrape(req.body.keywords, req.body.limit);
    res.send(results);

  });