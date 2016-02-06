# Project Overview

This is a project to use Jasmine to test a Feed Reader application.


## Note
+ Jasmine-jquery framework also is used for this project.
The jasmine-jquery.js is at `jasmine/lib/jasmine-jquery.js`

### Test Includes:
	1.  Test each feed in the allFeeds object and ensures its URL and name are defined and that the URL is not empty.
	2. Test feed menu is hidden by default and react properly when clicked.
	3. Test the entries are loaded after Ajax call
	4. Test if the entries changes when a new feed is loaded. 