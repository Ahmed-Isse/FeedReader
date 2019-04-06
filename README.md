# FeedReader
This is a Project that reads a feed from Udacity site. It then runs Tests built on Jasmine against these feeds to make sure the page and feeds are running as expected. Total Tests are run are 7 with two of them being run Asynchronously while the rest are implemented synchronously.

# Requirements
To run the Tests locally, the user needs to install the latest Jasmine bits. If not local, the user does not need to install anything. The user needs to only have a browser and internet.

# Configuration
To deploy and run the test, download/clone the bits locally. Then open the browser and browse the index.html file or Double click the Index.html file directly. The FeedReader should be loaded and Test should run automatically.

# Tests
Total Jasmine Tests implemented are 7. Here are all of the 7 and their descriptions.

## 1 RSS Feed - allFeeds variable is defined and not empty
The first Test verifies that the allFeeds variable has been defined and that it is not empty.

## 2 RSS Feed- each Feed is defined and url is not empty
The second Test verifies that each feed in allFeeds defines url and that url is not empty.

## 3 RSS Feed- each Feed is defined and name is not empty
The third Test verifies that each feed in allFeeds defines name and that name is not empty.  

## 4 The Menu- side menu is hidden by default
The fourth Test verifies that side-menu is hidden by default.

## 5 The Menu- side menu is shown after the first click and hidden in the second click
The fifth Test verifies that side-menu is shown after the first click. It then makes sure in the second click, it gets hidden

## 6 Initial Entries - there should be at least a single entry element after loadFeed is called.
The sixth verifies that there is at least one entry after loadFeed function is called.

## 7 New Feed Selection - content should change if new feed is loaded
The seventh and the last Test verifies that if loadFeed function is called with say index of 0, if loadFeed is called again with index of 1, the content of the page to change automatically
