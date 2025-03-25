/**
 * Newzy – Multipurpose Blog Template
 * Copyright 2023 pxdraft
 * Theme core scripts
 * 
 * @author pxdraft
 * @version 1
 */

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    // Plceholder
    var preloader = d.querySelector('.loading-preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('d-none');
        }, 1000);
    }

    // Headroom
    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector(".main-header"), {
            offset: 0,
            offset: {
                up: 100,
                down: 50
            },
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }


    // Tooltips
    var ToolTipTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = ToolTipTrigger.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var PopoverTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = PopoverTrigger.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    // Swiper
    var sliderSelector = '.swiper-container',
        defaultOptions = {
            breakpointsInverse: true,
            observer: true
        };

    var nSlider = document.querySelectorAll(sliderSelector);

    [].forEach.call(nSlider, function(slider, index, arr) {
        var data = slider.getAttribute('data-swiper-options') || {};

        if (data) {
            var dataOptions = JSON.parse(data);
        }

        slider.options = Object.assign({}, defaultOptions, dataOptions);

        var swiper = new Swiper(slider, slider.options);

        //console.log(slider.options.autoplay)

        /* stop on hover */
        if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
            slider.addEventListener('mouseenter', function(e) {
                swiper.autoplay.stop();
                //console.log('stop')
            });

            slider.addEventListener('mouseleave', function(e) {
                swiper.autoplay.start();
                //console.log('start')
            });
        }
    });


});

document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.zoom-in-animation');

    function checkIfSectionInView() {
      const rect = section.getBoundingClientRect();
      const inView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (inView) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    }

    window.addEventListener('scroll', checkIfSectionInView);

    // Initial check
    checkIfSectionInView();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.fade-in-left-animation');

    function checkIfSectionInView() {
      const rect = section.getBoundingClientRect();
      const inView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (inView) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    }

    window.addEventListener('scroll', checkIfSectionInView);

    // Initial check
    checkIfSectionInView();
  });
  document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.zoom-in-right-animation');

    function checkIfSectionInView() {
      const rect = section.getBoundingClientRect();
      const inView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (inView) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    }

    window.addEventListener('scroll', checkIfSectionInView);

    // Initial check
    checkIfSectionInView();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate__animated');

    function checkIfElementsInView() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          element.classList.add('pulse-animation');
        } else {
          element.classList.remove('pulse-animation');
        }
      });
    }

    window.addEventListener('scroll', checkIfElementsInView);

    // Initial check
    checkIfElementsInView();
  });
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate_animated');

    function checkIfElementsInView() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          element.classList.add('pulse-animation');
        } else {
          element.classList.remove('pulse-animation');
        }
      });
    }

    window.addEventListener('scroll', checkIfElementsInView);

    // Initial check
    checkIfElementsInView();
  });