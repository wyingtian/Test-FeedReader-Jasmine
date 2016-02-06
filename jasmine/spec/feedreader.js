/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all has URL',function(){
            allFeeds.forEach(function(feed){
                //url is defined
                expect(feed.url).toBeDefined();
                //url length is more than 0
                expect(feed.url.length).toBeGreaterThan(0);
            });
         });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all has name',function(){
            allFeeds.forEach(function(element){
                //name is defined
                expect(element.name).toBeDefined();
                //name length is more than 0
                expect(element.name.length).toBeGreaterThan(0);
            });
        });
    });


    /*  a test suite named "The menu" */
    describe('The menu',function(){
        /*  a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //'menu-hidden' class is not added to body
        it('to be hidden at first',function(){
            expect($('body')).toHaveClass('menu-hidden');
        });
         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //'menu-hidden' class is  added to body after clicked
        it('to be shown after clicked',function(){
            $('.menu-icon-link').click();
            expect($('body')).not.toHaveClass('menu-hidden');
            //click again and it is hidden
            $('.menu-icon-link').click();
            expect($('body')).toHaveClass('menu-hidden');

        });
    });
    /*  a test suite named "Initial Entries" */
    describe('Inital Entries',function(){
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });

        it('loadFeed asynchronous call has entry',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* a test suite named "New Feed Selection" */
    /* a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    describe('New Feed Selection',function(){

        var currentFeed;
         // also compare feed length, in case current and later
         // length are all 0(failed to load anything);
        var currentFeedLen;
        beforeEach(function(done){
            loadFeed(1,function(){
            currentFeed = $('.feed').html();
            currentFeedLen = $('.feed .entry').length;
            done();
            });
        });

        it('change happends when feed 0 is loaded',function(done){
            loadFeed(0,function(){
                expect(currentFeedLen).toBeGreaterThan(0);
                expect($('.feed .entry').length).toBeGreaterThan(0);
                expect($('.feed').html()).not.toEqual(currentFeed);
                done();
            });
        });

        it('change happends when feed 2 is loaded',function(done){
            loadFeed(2,function(){
                expect(currentFeedLen).toBeGreaterThan(0);
                expect($('.feed .entry').length).toBeGreaterThan(0);
                expect($('.feed').html()).not.toEqual(currentFeed);
                done();
            });
        });

    });
}());
