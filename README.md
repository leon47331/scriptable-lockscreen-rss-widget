# RSS-News (Scriptable)
This is a simple widget that allows you to add your favorite news site via RSS right on your iOS lockscreen.


<p align="center"><img src="http://screenshot.onelk-server.de/files/scriptable_screenshot_nc.png" width=400 height=800 alt="Sriptable RSS News Widget"></p>

## Features
* Display a custom RSS feed right on your lockscreen
* A click on the news opens up the article in your browser

## Prepare to use the widget
In order to use this widget, you need to do the following steps:
* Install Scriptable from the [App Store]
* Download the script [here]
* Open the script and enter the link to the RSS feed of your favorite news site (here's how to do it: [Edit Script])
* After you're done with the changes, you can add the widget to your lockscreen. These are the settings after selecting the script:
    * "When interacting": Run script
    * "Parameter": leave it blank

[App Store]:https://apps.apple.com/de/app/scriptable/id1405459188
[here]:https://github.com/leon47331/scriptable-news-rss-widget/releases
[Edit Script]:https://github.com/leon47331/scriptable-news-rss-widget/#edit-script

## Edit script
Now that you have the script in Scriptable, it's time to enter your favorite news site.<br>
These are the changes you need to make in the script:

```javascript
const url = "RSS-FEED-URL";
const srcName = "SITE-NAME"
```
Replace RSS-FEED-URL with the URL of the RSS feed you'd like to add.
Replace SITE-NAME with the name of the site which will be displayed on the lockscreen.
