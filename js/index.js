document.addEventListener('DOMContentLoaded', function () {

    // Toggle Scrollock

    // function toggleScrollLock() {
    //     const body = document.querySelector('body');
    //     body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    // }


    document.getElementById('menu-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
        const navbar = document.querySelector('.sticky-top');
        // navbar.style.width = '100vw';
        // navbar.style.position = 'sticky';
    });

    // Mobile Navbar Toggle
    const mobileNav = document.getElementsByClassName('mobile-nav')[0];
    const hamburgerBarsAll = document.querySelectorAll('.bar-nav');
    const hamburger = document.getElementsByClassName('mobile-navigation')[0];
    const hamburgerBars = document.getElementsByClassName('bars')[0];
    const header = document.getElementsByTagName('header')[0];
    const positionedElements = document.querySelectorAll('.r-item-left');
    const stickyTopNav = document.querySelector('.sticky-top');
    const boxShadowHeader = document.querySelector('.ll-nav-scroll');
    hamburger.addEventListener('click', function () {
        if (mobileNav.style.display != 'flex') {

            mobileNav.style.display = 'flex';
            hamburgerBars.style.border = 'none';
            header.style.paddingBottom = '15px !important';
            header.classList.add("boxShadowHeader");
            stickyTopNav.classList.add('ll-nav-scroll');

            hamburgerBarsAll.forEach(function (bar) {
                bar.style.height = "2.5px";
            })

            positionedElements.forEach(function (element) {
                element.style.visibility = 'hidden !important';
            })
        }

        else {
            mobileNav.style.display = 'none';
            hamburgerBars.style.border = '3px solid black';
            hamburgerBarsAll.forEach(function (bar) {
                bar.style.height = "2px";
            })
            hamburgerBarsAll.style.height = '2px';
            if (header.style.paddingBottom === '7px') {

                header.style.paddingBottom = '14px';
            }
            header.style.borderBottom = 'none';
            stickyTopNav.classList.remove('ll-nav-scroll');

            // header.classList.remove('box-shadow-bottom');
        }
    })
    function rotateSVG() {
        document.querySelector('.svg-arrow').classList.toggle('rotate-upside-down');
    }
    function showDropdown() {
        const navItems = document.getElementsByClassName('nav-link');
        // for (let i = 0; i < Array.from(navItems).length; i++) {
        //     const navItem = navItems[i];
        //     console.log(`Nav Items ${navItem}`)
        //     let dropdownContent = document.getElementsByClassName("dropdown-content")[i];
        //     console.log('Dropdowns', dropdownContent);
        //     navItem.addEventListener('mouseover', function (index) {
        //         navItem.style.color = '#df404d';
        //         dropdownContent.style.display = "block";
        //         console.log(navItems);
        //         dropdownContent.addEventListener('mouseover', function () {
        //             dropdownContent.style.display = "block";
        //             console.log(`The dropdown being shown is ${dropdownContent}`)
        //         });
        //     });
        // }
        let dropdown1 = document.getElementById('dp1');


        let dropdown2 = document.getElementById('dp2');
        let dropdown3 = document.getElementById('dp3');
        let navLink1 = document.getElementsByClassName('nav-link')[0];
        let navLink2 = document.getElementsByClassName('nav-link')[1];
        let navLink3 = document.querySelector('.button-wrapper');
        navLink1.addEventListener('mouseover', function () {
            dropdown1.classList.add('fade-in');
            dropdown1.style.display = 'block';
            if (dropdown2.style.display = 'block') {

                dropdown3.style.display = 'none'
                dropdown2.style.display = 'none'

            }
            dropdown1.addEventListener('mouseover', function () {
                dropdown3.style.display = 'none'
                dropdown1.style.display = 'block';


            })
            dropdown1.addEventListener('mouseout', function () {
                dropdown3.style.display = 'none'
                dropdown1.style.display = 'none'
            })
        })

        navLink2.addEventListener('mouseover', function () {
            console.log(`Inside navLink2 event listener function`);
            dropdown2.classList.add('fade-in');
            dropdown2.style.display = 'block';

            if (dropdown1.style.display = 'block') {
                dropdown3.style.display = 'none'
                dropdown1.style.display = 'none'
            }

            dropdown1.style.display = 'none';

            dropdown2.addEventListener('mouseover', function () {
                dropdown3.style.display = 'none'
                dropdown2.style.display = 'block';

            })

            dropdown2.addEventListener('mouseout', function () {
                dropdown3.style.display = 'none'
                dropdown2.style.display = 'none'
            })
        })



        // Navlink3

        navLink3.addEventListener('mouseover', function () {
            dropdown2.style.display = 'none';
            dropdown1.style.display = 'none';
            dropdown3.classList.add('fade-in');
            dropdown3.style.display = 'block';

        });

        dropdown3.addEventListener('mouseover', function () {
            dropdown2.style.display = 'none';
            dropdown1.style.display = 'none';
            dropdown3.style.transition = 'opacity 0.5s ease';
            dropdown3.style.display = 'block';
        });

        dropdown3.addEventListener('mouseout', function () {
            dropdown2.style.display = 'none';
            dropdown1.style.display = 'none';
            dropdown3.style.display = 'none';
        });
    }

    showDropdown();

    const dropdownContent = document.getElementsByClassName('dropdown-content');

    // Function to handle mouse enter event
    function handleMouseEnter() {
        dropdownContent.classList.add('active');
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
        dropdownContent.classList.remove('active');
    }
    // Sub dropdowns

    const mobNavItem1Content = document.getElementById('nav-subitem1');
    const mobNavItem2Content = document.getElementById('nav-subitem2');
    const mobNavItem4Content = document.getElementById('nav-subitem4');

    // const hamburgerSubnavs = document.querySelectorAll('.hamburger-subitems');

    // Array.from(hamburgerSubnavs).forEach(function(subnav,index){
    //     subnav.addEventListener('click', function(subnav){
    //         subnav.classList.toggle('hideToggle'); // To show/hide the popup
    //         toggleScrollLock(); // To disable scrolling while the popup is visible
    //     })
    // })

    const mobNavl1 = document.getElementById('mob-nav-item-1');
    mobNavl1.addEventListener('click', function () {
        mobNavItem1Content.classList.toggle('hideToggle');
        mobNavItem1Content.style.animation = 'sweep-left';
        mobNavItem1Content.style.animationDuration = '0.3s';


        toggleScrollLock();
    })

    const mobNavl2 = document.getElementById('mob-nav-item-2-h');

    mobNavl2.addEventListener('click', function () {
        mobNavItem2Content.classList.toggle('hideToggle');
        mobNavItem2Content.style.animation = 'sweep-left';
        mobNavItem2Content.style.animationDuration = '0.3s';

        // toggleScrollLock();
    })

    const mobNavl4 = document.getElementById('mob-nav-item-4-h');
    mobNavl4.addEventListener('click', function () {
        mobNavItem4Content.classList.toggle('hideToggle');
        mobNavItem4Content.style.animation = 'sweep-left';
        mobNavItem4Content.style.animationDuration = '0.3s';

        // toggleScrollLock();
    })

    // Pink Button Hover Effect

//     const pinkButton = document.querySelectorAll('.btn-pink');
//     pinkButton.forEach(function(buttons){
//         buttons.addEventListener('')
//     })

//     let isPressed = false;

// pinkButton.addEventListener('mousedown', function() {
//     isPressed = true;
//     changeButtonStyle();
// });

// pinkButton.addEventListener('mouseup', function() {
//     isPressed = false;
//     changeButtonStyle();
// });

// // Additional event listener for handling mouse leave
// pinkButton.addEventListener('mouseleave', function() {
//     isPressed = false;
//     changeButtonStyle();
// });

// function changeButtonStyle() {
//     if (isPressed) {
//         pinkButton.style.backgroundColor = 'blue';
//         pinkButton.style.color = 'white';
//     } else {
//         pinkButton.style.backgroundColor = '';
//         pinkButton.style.color = '';
//     }
// }

    // Cards Section

    const card = document.querySelectorAll('.item-card');
    const cardsDescription = document.querySelectorAll('.card-description');
    const cardsToggleBtn = Array.from(document.querySelectorAll('.trigger-plus'));

    for (let i = 0; i <= Array.from(cardsDescription.length); i++) {

        // if (cardsToggleBtn[i].style.visibility != 'hidden') {
        //     cardsToggleBtn[i].addEventListener('click', () => {
        //         cardsToggleBtn[i].style.visibility = 'hidden';

        //         // card[i].addEventListener('click', function(){
        //         //     cardsDescription[i].classList.toggle('hideToggle')
        //         // })
        //     })
        // }
        // else {
        //     cardsToggleBtn[i].style.visibility = 'flex';
        // }

        if (cardsToggleBtn[i].style.display != 'none') {

        }
        else {
            cardsToggleBtn.style.visibility = 'block';
        }

    }

    const initializeCollapse = () => {

        const cardsToggleBtn = Array.from(document.querySelectorAll('.trigger-plus'));

        const cardsDescription = document.querySelectorAll('.card-description');

        if (window.innerWidth <= 1300) {


            Array.from(cardsDescription).forEach(card => {
                card.classList.add('show');
                cardsToggleBtn.forEach(function (button) {
                    button.style.display = 'none';
                })
            });

            const itemCard = document.querySelector('.item-card');

            // Set the min-height property to 27rem
            // itemCard.style.minHeight = '27rem';
            //    cardsDescription.classList.toggle('show');

        }
        else {
            cardsToggleBtn.forEach(function (button) {
                button.style.display = 'flex';
            })
        }
    }

    // Re-initialize collapse when the window is resized
    window.addEventListener('resize', function () {
        initializeCollapse();
    });

    // Navbar Sticky Top Transition

    // Get the navbar element
    var navbar = document.querySelector('.header-wrapper')
    const headerSticky = document.querySelector('.sticky-top');

    // Get the initial position of the navbar
    var navbarPosition = headerSticky.offsetTop;

    var cardItem = document.querySelectorAll('.item-card');
    var description = document.querySelectorAll('.card-description');
    var triggerPlus = document.querySelectorAll('.trigger-plus');

    // Function to toggle collapse class and show trigger-plus
    function toggleCollapseAndTriggerPlus(description, triggerPlus) {
        description.classList.toggle('show');
        triggerPlus.style.display = description.classList.contains('show') ? 'none' : 'flex';
    }

    // Add click event listener to the card

    cardItem.forEach(function (cardItem, index) {
        cardItem.addEventListener('click', function () {
            toggleCollapseAndTriggerPlus(description[index], triggerPlus[index]);
        });
    });

    // Backbuttons

    const bkbtn1 = document.getElementById('back-subitem');
    const subitem1 = document.getElementById('nav-subitem1');
    const backButton1 = document.getElementById('back-subitem');
    const backButton2 = document.getElementById('back-subitem-2');
    const backButton4 = document.getElementById('back-subitem-4');

    backButton1.addEventListener('click', function () {
        subitem1.style.animation = 'sweep-right 0.3s'; // Apply the animation directly
        subitem1.addEventListener('animationend', () => {
            subitem1.classList.toggle('hideToggle'); // Toggle visibility after animation ends
        }, { once: true });
        // 
    })

    const subitem2 = document.getElementById('nav-subitem2');
    backButton2.addEventListener('click', function () {
        subitem2.style.animation = 'sweep-right 0.3s';
        subitem2.addEventListener('animationend', () => {
            subitem2.classList.toggle('hideToggle'); // Toggle visibility after animation ends
        }, { once: true });
        // toggleScrollLock();
    })

    const bkbtn4 = document.getElementById('back-subitem-4');
    const subitem4 = document.getElementById('nav-subitem4');
    bkbtn4.addEventListener('click', function () {
        subitem4.style.animation = 'sweep-right 0.3s';
        subitem4.addEventListener('animationend', () => {
            subitem4.classList.toggle('hideToggle');
        }, { once: true });

        // toggleScrollLock();
    })

    // cardItem.addEventListener('click', function () {
    //     toggleCollapseAndTriggerPlus();
    // });

    if (window.innerWidth <= 1200 && mobileNav.style.display === 'block') {
        const headerContainer = document.querySelector('.menu-items');
        headerContainer.classList.add('.box-shadow-mobnav')
    }


    // // Function to handle scroll events
    // function handleScroll() {
    //   if (!ticking) {
    //     window.requestAnimationFrame(function() {
    //       updateMarqueeSpeed();
    //       ticking = false;
    //     });
    //     ticking = true;
    //   }
    // }


    // Footer SVG Transform Toggle

    const footerArrows = document.querySelectorAll('.footer-grey .mob-svg-wrapper svg');
    console.log("footer arrows loaded");
    Array.from(footerArrows).forEach(function (arrows) {
        arrows.addEventListener('click', function () {
            console.log("footer arrows in event listener");
            arrows.classList.toggle("rotate-down");
        })
    })

    // Video PLayer

    // const videoContainer = Array.from(document.querySelectorAll('.quotes-image-wrapper'));
    // const videoPlaybacks = Array.from(document.querySelectorAll('.responsive-video'));
    // const videoParentContainer = document.querySelectorAll('.video-container');
    // const videoBackground = document.querySelectorAll('.video-background');
    // const blackBackground = document.querySelector('.black-bg');

    // const closeBtn = Array.from(document.querySelectorAll('.closeBtn'));

    // videoContainer.forEach(function(item, index) {
    //     item.addEventListener('click', function() {
    //         // Toggle visibility of video and close button
    //         videoPlaybacks[index].classList.toggle('hideToggle');
    //         closeBtn[index].classList.toggle('hideToggle');



    // Get the video element
    // const video = videoPlaybacks[index].querySelector('video');

    // // If video exists, play/pause it
    // if (video) {
    //     if (video.paused) {
    //         video.play(); // Start playing the video
    //     } else {
    //         video.pause(); // Pause the video
    //     }
    // }

    // toggleScrollLock();
});

// Attach click event listener to close button
// closeBtn[index].addEventListener('click', function(event) {
//     event.stopPropagation(); // Prevent event bubbling
//     videoPlaybacks[index].classList.toggle('hideToggle');
//     closeBtn[index].classList.toggle('hideToggle');
//     blackBackground.style.display = 'none';
// toggleScrollLock();



//    })

// console.log(item, index)
// });
// var isScrolling;

// window.addEventListener('scroll', function() {
//     var marquee = document.getElementById('marquee-brand-list-1');
//     marquee.classList.add('marquee-scrolling');

//     window.clearTimeout( isScrolling );

//     isScrolling = setTimeout(function() {
//         marquee.classList.remove('marquee-scrolling');
//     }, 66);
// });

const footerDropdownListButton = document.querySelectorAll('.footer-mob-arrow');
const dropdownDetails = document.querySelectorAll('.fc-inner');
footerDropdownListButton.forEach(function(buttons){
    buttons.addEventListener('click', function(){
        console.log("Before toggling fadein class");
        dropdownDetails.forEach(function(details){

            details.classList.toggle('fade-in-footer');
        })
    })
})

let sectionDiv = document.querySelectorAll('.marquee-container-brands');

// window.addEventListener('scroll', function () { 
//     var scrollTop = window.scrollY;

//     var marqueeElement = document.querySelectorAll('.marquee-brands-img-right');
//     const marqueeElementLeft = document.querySelectorAll('.marquee-brands-img-left');
//     var marqueeListElement = document.querySelectorAll('.marquee-brands-items');

//     if (scrollTop > 0) {
//         var translateValue = (scrollTop / window.innerHeight) * 8;
//         marqueeElement.forEach(function (element) {
//             element.style.transform = 'translateX(' + translateValue + '%)';
//         })
//         // marqueeElementLeft.forEach(function(element){
//         //     element.style.transform = 'translateX(' +    translateValue + '%)';
//         // })
//         // marqueeElement.style.transform = 'translateX(' + translateValue + '%)';
//         marqueeListElement.style.animation = 'none';
//     } else {
//         marqueeElement.style.transform = 'translateX(0)';
//         marqueeListElement.style.animation = 'marquee-brands 15s linear infinite';
//     }
// });

// window.addEventListener('scroll', function () {
//     var scrollTop = window.scrollY;

//     var marqueeElement = document.querySelectorAll('.marquee-brands-img-left');
//     // const marqueeElementLeft = document.querySelectorAll('.marquee-brands-img-right');
//     var marqueeListElement = document.querySelectorAll('.marquee-brands-items');

//     if (scrollTop > 0) {
//         var translateValue = (scrollTop / window.innerWidth) * 8; // Adjust this multiplier as needed
//         marqueeElement.forEach(function (element) {
//             element.style.transform = 'translateX(' + translateValue + '%)';
//         });
//         marqueeElement.forEach(function(element){
//             element.style.transform = 'translateX(-' + translateValue + '%)'; // Move left-to-right by using a negative value
//         });
//         marqueeListElement.style.animation = 'none';
//     } else {
//         marqueeElement.forEach(function (element) {
//             element.style.transform = 'translateX(0)';
//         });
//         marqueeElementLeft.forEach(function(element){
//             element.style.transform = 'translateX(0)';
//         });
//         marqueeListElement.style.animation = 'marquee-brands 15s linear infinite';
//     }
// });

// Assuming the marquee container div has a class named 'marquee-container'
// var marqueeContainer = document.querySelector('.marquee-brands');

var marqueeContainer = document.querySelector('.marquee-container-brands');

function handleViewportTransform() {
    var boundingRect = marqueeContainer.getBoundingClientRect();
    var viewportHeight = boundingRect.height;
    var scrollTop = window.scrollY - boundingRect.top;
    
    var marqueeElementsLeft = document.querySelectorAll('.marquee-brands-img-left');
    var marqueeElementsRight = document.querySelectorAll('.marquee-brands-img-right');
    var marqueeListElement = document.querySelector('.marquee-brands-items');

    var translateValueLeft = (scrollTop / viewportHeight) * 2;
    var translateValueRight = (scrollTop / viewportHeight) * 2;

    // Apply translation for left elements
    marqueeElementsLeft.forEach(function (element) {
        element.style.transform = 'translateX(-' + translateValueLeft + '%)';
    });

    // Apply translation for right elements
    marqueeElementsRight.forEach(function (element) {
        element.style.transform = 'translateX(' + translateValueRight + '%)';
    });

    // Disable animation for the list element
    marqueeListElement.style.animation = 'none';
}

window.addEventListener('scroll', handleViewportTransform);
window.addEventListener('resize', handleViewportTransform);

// Initial call to handleViewportTransform to ensure correct positioning when the page loads
handleViewportTransform();

// // Select your section divs
// var sectionDivs = document.querySelectorAll('.marquee-container-brands');

// // Loop through each section div
// sectionDivs.forEach(function(sectionDiv) {
//     // Add scroll event listener to each section div
//     sectionDiv.addEventListener('scroll', function(event) {
//         // Get the scroll position of the section div
//         var scrollTop = event.target.scrollTop;
        
//         // Select your marquee elements within this section div
//         var marqueeElements = sectionDiv.querySelectorAll('.marquee-brands-img-left');

//         // Loop through each marquee element
//         marqueeElements.forEach(function(marqueeElement) {
//             // Calculate translation based on scroll position of section div
//             var translateValue = (scrollTop / sectionDiv.clientHeight) * 8; // Adjust this multiplier as needed
//             // Apply the translation to the marquee element
//             marqueeElement.style.transform = 'translateX(-' + translateValue + '%)';
//         });
//     });
// });

const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;
// if(viewportWidth <=800){

// }



window.addEventListener('scroll', function () {

    const navbarTop = document.querySelector('.sticky-top');
    console.log("navbarTop loaded");
    if (window.scrollY > 0) {

        navbarTop.classList.add('ll-nav-scroll');
    } else {

        navbarTop.classList.remove('ll-nav-scroll');
    }
});
