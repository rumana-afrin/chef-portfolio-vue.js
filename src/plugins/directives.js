import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'aos/dist/aos.js';
import '../assets/css/owl.carousel.min.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/js/owl.carousel.min.js'
// Initialize AOS globally
AOS.init({
    duration: 2000, // Default duration for animations
});

import { nextTick } from 'vue';
export default {

    //aos
    aos: {
        mounted(el, binding) {
            // Extract directive binding value
            const options = binding.value || {};
            el.setAttribute('data-aos', options.name || 'fade-up'); // Default animation

            if (options.duration) {
                el.setAttribute('data-aos-duration', options.duration);
            }
            if (options.delay) {
                el.setAttribute('data-aos-delay', options.delay);
            }
        },
    },

    // Global OwlCarousel directive
    owlCarousel: {
        mounted(el) {
            nextTick(() => {
                // Clean up if already initialized
                if ($(el).hasClass('owl-loaded')) {
                    $(el).trigger('destroy.owl.carousel');
                }

                // Initialize carousel with options
                $(el).owlCarousel({
                    loop: true,
                    margin: 30,
                    center: true,
                    autoplay: true,
                    dots: false,
                    responsive: {
                        0: { 
                            items: 1
                         }, // 1 item for very small devices
                        600: {
                             items: 2
                            }, // 2 items for slightly larger devices
                        1000: {
                             items: 4 
                            }, // 4 items for desktops
                      },
                });
            });
        },
        unmounted(el) {
            // Destroy carousel on unmount
            if ($(el).hasClass('owl-loaded')) {
                $(el).trigger('destroy.owl.carousel');
            }
        },
    },
};
