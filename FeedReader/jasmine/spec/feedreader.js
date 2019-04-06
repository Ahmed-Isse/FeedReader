/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {
    /* These Tests check RS Feed
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This Test loops through each feed and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Feed Url is defined and it is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This Test loops through each feed and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feed Name is defined and it is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /* This two Test concern the Menu area of the page */
    describe('The menu', function () {
        /* This Test checks the side menu by defaul is set to false by checking
           'menu-hidden' class is added to body element.
         */
        it('Menu is hidden', function () {
            var bodyElement = document.querySelector('body');
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
        });

        /*  This Test checks the side menu changes visible with the first Click
            Second CLick should reset to hidden by adding the 'menu-hidden' class to body
         */
        it('Menu is changed to visible and again to hidden when clicked first and then second', function () {
            // Trigger the first click. We expect menu-hidden to not be added to body. Meaning, the menu to be shown.
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //Trigger the second click. We should expect menu-hidden to be added to body
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* In this test, we call the loadFeed again and make sure content has been loaded */
    describe('Initial Entries', function () {
        let firstLoad;
        beforeEach(function (done) {
            $('feed').empty();
            loadFeed(0, function () {
                firstLoad = document.querySelector('.feed').childElementCount;
                done();
            });
        });

        it('There should be at least a single element within .feed container', function (done) {
            expect(firstLoad >= 1).toBe(true);
            done();
        });
    });



    /* This Test checks that content of the feed changes when different feed is loaded. 
    We first load feed 1 and then feed 2 by first calling loadFeed(0,..) and then loadFeed(1,..)*/
    describe('New Feed Selection', function () {
        var firstFeed;
        var secondFeed;
        beforeEach(function (done) {
            $('feed').empty();
            loadFeed(0, function () {
                firstFeed = document.querySelector('.feed').children[0].href;
                loadFeed(1, function () {
                    secondFeed = document.querySelector('.feed').children[0].href;
                    done();
                });
            });
        });

        it('Content changes when a new feed is loaded by the loadFeed function', function (done) {
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });
}());
