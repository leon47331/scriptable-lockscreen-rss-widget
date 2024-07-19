// Scriptable Lockscreen RSS widget (with rotation feature)
// Version: v1.1.1
// Author: @leon47331

const url = "RSS-FEED-URL";
const srcName = "SITE-NAME";
const rotationValue = 5;

async function getRSSFeed() {
  let req = new Request(url);
  let feed = await req.loadString();
  let items = [];
  
  let regex = /<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
  let match;
  
  while ((match = regex.exec(feed)) !== null) {
    let title = match[1];
    let link = match[2];
    title = title.replace(/&#034;/g, "\"");
    title = title.replace(/&#8222;/g, "„").replace(/&#8220;/g, "“");
    title = title.replace(/&#8211;/g, "–");
    
    items.push({ title, link });
  }
  
  return items.slice(0, rotationValue);
}

async function getRandomEntry(items) {
  if (items.length === 0) return null;
  
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let widget = new ListWidget();

async function createWidget() {
  let rssItems = await getRSSFeed();
  let latestItem = await getRandomEntry(rssItems);
  
  if (latestItem !== null) {
    let title = latestItem.title;
    let link = latestItem.link;
    
    let stack = widget.addStack();
    stack.layoutVertically();
    
    let titleText = widget.addText(srcName);
    titleText.font = Font.boldSystemFont(13);
    titleText.textColor = new Color("#adacac");
    widget.addSpacer(1);
    let newsText = widget.addText(title);
    newsText.font = Font.semiboldMonospacedSystemFont(12);

    widget.url = link;
  } else {
    widget.addText("No new articles available");
    widget.url = "scriptable://" // FIXME: Placeholder
  }
  
  Script.setWidget(widget);
  Script.complete();
}

await createWidget();
