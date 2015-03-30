# FrequentlyAskedQuestions #

## 0. "Access to data on all websites"?! What's with the scary permissions? ##

http://code.google.com/chrome/extensions/permission_warnings.html

**Your data on all websites** = caused by the requirement of ScriptNo to function on all pages and process the page's code to remove unwanted elements. Any data doesn't leave your computer (I'm not out to betray my users!) All code is made publicly available here and is always up-to-date: http://code.google.com/p/scriptno/source/browse/trunk

**Your tabs and browsing activity** = ScriptNo requires access to the chrome.tabs API for the purposes of updating the nice icon in the toolbar

**Settings that specify whether websites can use features such as cookies, JavaScript, and plug-ins** = self-explanatory, since ScriptNo v1.0.6.x and higher uses the new contentSettings API to reliably block inline elements/resources.

## 1. Why can't I install ScriptNo? ##

In ScriptNo v1.0.6.0, the minimum Chrome version required was 17.0 because of the fact that the webRequest and contentSettings APIs were made stable only in this milestone release.

These two APIs make ScriptNo blocking more reliable, and support new features in v1.0.6.0 such as referrer spoofing and cookie blocking.

**v1.0.6.2 now removes the requirement**. If you don't have Chrome v17 or higher, it will fall back to the old blocking methods and the new features that depend on the new APIs won't take effect. If you do have Chrome v17 or newer, ScriptNo will be smart enough to use the new blocking methods! :)

## 2. Why can't I see the “Allow/Trust/Deny” options for some domains in the tab options popup? ##

If you’ve ticked “Block Unwanted Content” and set “Unwanted Content Mode” to “Strict” in the options page, any blocked resources/elements will not have the usual “Allow/Deny/Bypass” options. If you do want to see them, you can set ”Unwanted Content Mode” to “Relaxed“.

## 3. The “Ratings” button that’s under each domain in the tab options popup is UGLY! How do I get rid of it? ##

If you don’t want to see the “Rating” button for each domain, in the Options page untick “Show Rating Button“

## 4. I use other Chrome extensions and they don’t work properly with ScriptNo enabled. What should I do? ##

I personally use a couple of Chrome extensions (e.g. Adblock Plus, LastPass) and have come up with a few workarounds of my own:
  * If you trust the domain and the issue occurs only on the domain, you can choose to either Whitelist or Trust it.
  * If it happens on almost every page, tick “Respect Same-Domain” AND tick “Block Unwanted Content” (second tick is optional, but HIGHLY recommended)

The fundamental issue is with the contentSettings API that will (hopefully) be fixed. Apparently it has been fixed in the canary builds of Chrome:
http://code.google.com/p/chromium/issues/detail?id=90843
https://bugs.webkit.org/show_bug.cgi?id=76704
http://trac.webkit.org/changeset/106680

You can also choose to set “Default Mode” to “Allow“, but this is not recommended as it will let content load by default (taking a blacklist approach)

## 5. The icon counter is saying that no resources have been blocked when I know they've been blocked, what's going on? ##

In v1.0.6.0, with the implementation of true inline Javascript blocking, if the page is blocked, it will appear that no resources has been blocked, where in fact they have been blocked. You can test this out by clicking on "Temp" to temporarily allow the page to load and voila, you'll see that external resources have been blocked.

## 6. Does ScriptNo provide a database of things to block? ##

Yes, it does! In fact, there are two "databases" or lists (both optional):
  1. Blacklist (user-configurable) - empty by default
  1. "Block Unwanted Content" list (not user-configurable) - contains domains that provide unwanted content

For the Blacklist, you can directly modify it in the Options page. Whenever you "Deny" a domain, the domain is added to the Blacklist. This means that over time, ScriptNo ensures what you want blocked is blocked.

To use the latter list, ensure "Block Unwanted Content" is ticked.

This approach (two lists) gives you flexibility, security and choice.

## 7. The owner of this website (www..com) has banned your access based on your browser's signature ##

Go into your Options page and set Referrer Spoof to "Off".

## I love this extension! How do I convey this love to you? ##

Thank you! I’ve put many hours into this extension to get it to this level (of course, user feedback has been helpful and important in the progress of ScriptNo). Some ways you can help ScriptNo and I out are:
  * Translation help: one of my long-term goals is to have every ScriptNo user comfortable using it, and this means being able to use it in their own language. If you are bilingual (English + another language) and are willing to help translate the sentences in ScriptNo, contact me: andryou@gmail.com
  * Donations: donations are definitely welcome, but I’m personally against me aggressively soliciting them as I firmly believe it is your choice to donate or not. Whether you do is up to you, you’ll never see any nag messages in ScriptNo about doing so. You’ll just see the clickable heart icons in the ScriptNo Options page
  * Writing: you can email me, post on the Chrome extension [wall](https://chrome.google.com/webstore/detail/oiigbmnaadbkfbmpbfijlflahbdbdgdf) and rate it, and/or tweet/share/post about ScriptNo to your friends!