// Scriptable Lockscreen RSS widget
// Version: v1.0.0

const url = "RSS-FEED-URL";
const srcName = "SITE-NAME"

async function getRSSFeed() {
  let req = new Request(url);
  let feed = await req.loadString();
  let items = [];
  
  let regex = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
  let match;
  
  while ((match = regex.exec(feed)) !== null) {
    let title = match[1];
    let link = match[2];
    title = title.replace(/&#034;/g, "\"");
    title = title.replace(/&#8222;/g, "„").replace(/&#8220;/g, "“");
    title = title.replace(/&#8211;/g, "–");
    
    items.push({ title, link });
  }
  
  return items;
}

let widget = new ListWidget();// 

async function createWidget() {
  let rssItems = await getRSSFeed();
  
  if (rssItems.length > 0) {
    let latestItem = rssItems[0];
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

    widget.url = link

  } else {
    widget.addText("Keine neuen Nachrichten");
  }
  
  Script.setWidget(widget);
  Script.complete();
}

await createWidget();
