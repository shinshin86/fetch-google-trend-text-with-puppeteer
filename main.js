const pptr = require('puppeteer');

async function getTrendText() {
  const browser = await pptr.launch({});
  const page = await browser.newPage();
  const url = 'https://trends.google.com/trends/?geo=US';

  await page.goto(url);
  await page.waitFor(5000); // sleep

  const listSelector = '.recently-trending-list-item';
  const dataMapList = await page.evaluate(selector => {
    const list = Array.from(document.querySelectorAll(selector));
    return list.map(data => {
      const title = data.querySelector('.list-item-title').textContent;
      const searches = data.querySelector('.list-item-searches').textContent;
      return { title, searches };
    });
  }, listSelector);

  await browser.close();

  return dataMapList;
}

function createResultText(data) {
  return data.map(d => {
    return `${d.title} : ${d.searches}`;
  });
}

async function run() {
  console.log('=============> START');
  const result = await getTrendText();
  console.log('=============> FINISH');
  console.log(createResultText(result));
}

run();
