# fetch-google-trend-text-with-puppeteer
Fetch google trend text with puppeteer



## Usage

Get google trend text

```
yarn start
```



The default setting is US.
if you want to get Japanese trend, you can do it by rewriting the source code.

```diff
 async function getTrendText() {
   const browser = await pptr.launch({});
   const page = await browser.newPage();
-  const url = 'https://trends.google.com/trends/?geo=US';
+  const url = 'https://trends.google.com/trends/?geo=JP';

   await page.goto(url);
   await page.waitFor(5000); // sleep
```

