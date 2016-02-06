# Project Overview

This is a project to use Jasmine to test a Feed Reader application.

## Usage
Open `index.html` to see the test results for the feed reader web app.

## Files
+ `jasmine/spec/feedreader.js` is the test suites and specs for the feed reader.
+ `app.js` is the javascript file for feedreader to function.
+ Jasmine-jquery framework also is used for this project.
The jasmine-jquery.js is at `jasmine/lib/jasmine-jquery.js`
+ jasmine framework is under `jasmine/lib/jasmine-2.1.2`

### Test Includes:
	1. Test each feed in the allFeeds object and ensures its URL and name are defined and that the URL is not empty.
	2. Test feed menu is hidden by default and react properly when clicked.
	3. Test the entries are loaded after Ajax call
	4. Test if the entries changes when a new feed is loaded. 