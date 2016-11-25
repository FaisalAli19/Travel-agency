import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTrigger = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyImages.load(function() {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll({speed: 1000});
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: this.headerTrigger[0],
            handler: function(direction) {
                if(direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                }else{
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoint(){
        var that = this;
        this.pageSections.each(function() {
            var currentPage = this;
            new Waypoint({
                element: currentPage,
                handler: function(direction) {
                    if(direction == "down"){
                        var matchingLink = currentPage.getAttribute("data-target");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPage,
                handler: function(direction) {
                    if(direction == "up"){
                        var matchingLink = currentPage.getAttribute("data-target");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;
