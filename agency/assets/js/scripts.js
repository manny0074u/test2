(function($){
    'use strict';
    
    jQuery(document).ready(function(){
        

        // Owl Carousel JS for Every Section Slider!!
        if($.fn.owlCarousel){
            var agencySlider = $('.agency-slides'),
                agencySecSlider = $('.agency-sec-slider'),
                agencyCarousel = $('.agency-happy-customer-slider, .agency-team-slider');

            agencySlider.each(function(){
                $(this).addClass('agency-carousel');
                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    animateIn: 'fadeIn',
                    animateOut: 'fadeOut'
                });
            });

            agencySecSlider.each(function(){
                $(this).addClass('agency-carousel');
                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false
                });
            });
            $('.agency-arrow').each(function(){
                $(this).on('click', function(e){
                    if( $(this).hasClass('agency-prev') ){
                        $(this).parents('.col-md-6').siblings()
                            .children('.agency-sec-slider').trigger('prev.owl.carousel');
                    } else {
                        $(this).parents('.col-md-6').siblings()
                            .children('.agency-sec-slider').trigger('next.owl.carousel');
                    }
                });
            });
            // agency happy client slider - homepage
            agencyCarousel.each(function(){
                $(this).addClass('agency-carousel');
                $(this).owlCarousel({
                    items : 3,
                    nav : true,
                    navText : ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
                    margin: 30,
                    loop: true,
                    responsive:{
                        0 : {
                            items : 1
                        },
                        768 : {
                            items : 2
                        },
                        1000 : {
                            items : 3
                        }
                    }
                });
            });
        } // agency owl carousl end

        // Comment Respond
        jQuery('.author-comment-details > header > a').on('click', function(e){
            e.preventDefault();
            var agencyRespond = jQuery('#agency-respond');
            jQuery(this).parents('li').append(agencyRespond);
        });

        jQuery('.agency-cancel-reply').on('click', function() {
            var agencyRespond = jQuery('#agency-respond');
            jQuery(this).parents('.agency-comments-area').append(agencyRespond);
        });



        // Google Map
        if( jQuery('#agencyMap').length > 0 ) {
            var agencyLatLong = new google.maps.LatLng(41.0486664, -75.212284);
            function agencyMapInit() {
                var agencyMapProp = {
                    center: agencyLatLong,
                    scrollwheel: false,
                    zoom:13,
                    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-90}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}, { "featureType": 'road.highway', "elementType": 'geometry', "stylers": [{"color": '#fa7a28'}]}],
                    mapTypeId:google.maps.MapTypeId.ROADMAP,
                };
                var agencyMap = new google.maps.Map( document.getElementById("agencyMap"), agencyMapProp );
                var agencyMapMarker = new google.maps.Marker({
                    position: agencyLatLong,
                    icon:'assets/image/map-marker.png',
                });

                agencyMapMarker.setMap(agencyMap);
            }
            google.maps.event.addDomListener(window, 'load', agencyMapInit);
        }
        
    });
    
})(jQuery);