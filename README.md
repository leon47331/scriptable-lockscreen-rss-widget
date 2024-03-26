# RSS Lockscreen Widget (Scriptable)
This is a simple widget that allows you to add your favorite news site via RSS right on your iOS lockscreen.


<p align="center"><img src="https://i.imgur.com/DBX2kLD.png" width=55% height=50% alt="Sriptable RSS News Widget"></p>

## Features
* Display a custom RSS feed right on your lock screen
* A click on the news opens up the article in your browser
* Display the latest article
  * to use that, download [lockscreen-rss-widget_no_rotation.js][download_script]
* Display the five latest articles in rotation
  * to use that, download [lockscreen-rss-widget_rotation.js][download_script]
  * see more under [Rotation feature]

## Prepare to use the widget
To use this widget, you need to do the following steps:
* Install Scriptable from the [App Store]
* Download the script [here][download_script]
* Open the script and enter the link to the RSS feed of your favorite news site (see [Edit Script])
* After you're done with the changes, you can add the widget to your lock screen. These are the settings after selecting the script:
    * "When interacting": Run script
    * "Parameter": leave it blank

[App Store]:https://apps.apple.com/de/app/scriptable/id1405459188
[download_script]:https://github.com/leon47331/scriptable-lockscreen-rss-widget/releases
[Edit Script]:https://github.com/leon47331/scriptable-lockscreen-rss-widget/#edit-script
[Rotation Feature]:https://github.com/leon47331/scriptable-lockscreen-rss-widget/#rotation-feature


## Edit script
Now that you have the script in Scriptable, it's time to enter your favorite news site.<br>
These are the changes you need to make in the script:

```javascript
const url = "RSS-FEED-URL";
const srcName = "SITE-NAME";
```
Replace ```RSS-FEED-URL``` with the URL of the RSS feed you'd like to add.
Replace ```SITE-NAME``` with the name of the site that should be displayed on the lock screen.

## Rotation feature
Version 1.1.0 supports a rotation feature where the script automatically selects one of the 5 latest articles from the RSS feed. This value can be changed by editing the following value:
```javascript
const rotationValue = 5;
```