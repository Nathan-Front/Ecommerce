
const titlePanel = document.querySelector('.title-cart-panel');
const burgerLinks = document.querySelector("#burger-menu");
const burgerOpen = document.getElementById("burger");
const burgerClose = document.getElementById("burger-close");
 const menuHomeBtn = document.getElementById('newsHomeBtn');
document.addEventListener("DOMContentLoaded", mobileDesktopInit);
window.addEventListener("resize", mobileDesktopInit);

function mobileDesktopInit() {
    const isMobile = window.innerWidth <= 430;
    if (isMobile) {
        enableMobile();
    } else {
        enableDesktop();
    }
}
function enableMobile() {
    //Initializer for mobile viewport
    if (window.__mobileEnabled) return; 
    window.__mobileEnabled = true;
    window.__desktopEnabled = false;

    //const titlePanel = document.querySelector('.title-cart-panel');
    //const burgerLinks = document.querySelector("#burger-menu");

    const homeItemBtn = document.createElement('button');
    homeItemBtn.className = 'cpHomeBtn';

    //For adding the elements during mobile viewport        
    if (!titlePanel.querySelector('.cpHomeBtn')) {
      titlePanel.prepend(homeItemBtn);
    }
    //Event for the home button
      homeItemBtn.addEventListener('click', () =>{
      location.href = 'index.html';
    });
    if(menuHomeBtn){
      menuHomeBtn.addEventListener('click', () => {
        location.href = 'index.html';
      });
    }
      burgerOpen.style.display = 'flex';
      titlePanel.append(burgerOpen);
      //Burger open button click event
      burgerOpen.onclick = () => {
      if(cartContentEmpty.classList.contains('navActive') || loginPage.classList.contains('log-in')){
        cartContentEmpty.classList.remove('navActive');
        loginPage.classList.remove('log-in');
      }
      burgerOpen.style.display = 'none';  
      burgerLinks.classList.add("burger-links");
      coverPage.style.display = 'block';
      // Always prepend home button again (safe)
      titlePanel.prepend(homeItemBtn);
      // Add close button
      burgerClose.style.display = "flex";
      titlePanel.appendChild(burgerClose);
      //Stop scrolling of the main page even after opening a page on top of it
      document.body.classList.add("no-scroll");
    };
    //Burger close button click event
    if (burgerClose) {
        burgerClose.onclick = () => {
        burgerLinks.classList.remove("burger-links");
        coverPage.style.display = 'none';
        // Remove close button
        if (titlePanel.contains(burgerClose)) {
            titlePanel.removeChild(burgerClose);
        }
        // Always add home button back
        titlePanel.prepend(homeItemBtn);
        // Show burger open button again
        burgerOpen.style.display = "flex";
        document.body.classList.remove("no-scroll");
    };
    }
}
function enableDesktop() {
    
    if (window.__desktopEnabled) return;
    window.__desktopEnabled = true;
    window.__mobileEnabled = false;

    const titlePanel = document.querySelector('.title-cart-panel');
    const burgerLinks = document.querySelector("#burger-menu");
    const burgerOpen = document.getElementById("burger");
    const burgerClose = document.getElementById("burger-close");

    // Remove mobile classes
    burgerLinks.classList.remove("burger-links");
    document.body.classList.remove("no-scroll");

    // Remove burger buttons if present
    if (titlePanel.contains(burgerOpen)) titlePanel.removeChild(burgerOpen);
    if (titlePanel.contains(burgerClose)) titlePanel.removeChild(burgerClose);

    // Remove home button safely
    const homeBtn = titlePanel.querySelector(".cpHomeBtn");
    if (homeBtn) homeBtn.remove();
}

const loginPage = document.getElementById('login-page');
const closeLoginPage = document.getElementById('close-login-page');
document.addEventListener("DOMContentLoaded", () =>{

        const loginBtn = document.getElementById('login-button');
        const loginBtnMenu = document.getElementById('login-button-menu-header');
        const loginBtnMenuCart = document.getElementById('login-button-menu-header-cart');
       // const loginBtnMenuCartTab = document.getElementById('login-button-menu-header-cart-tab');        
        
        //For diplaying login page
        if(loginBtn){
        loginBtn.addEventListener('click', () =>{
            loginPage.classList.add('log-in');
            document.body.classList.add('no-scroll');
            coverPage.style.display = 'flex';
        });
          }
         if(loginBtnMenu){
        loginBtnMenu.addEventListener('click', () =>{
            loginPage.classList.add('log-in');
            document.body.classList.add('no-scroll');
            cartContentEmpty.classList.remove('navActive');
            burgerLinks.classList.remove("burger-links");
            burgerClose.style.display = 'none';
            burgerOpen.style.display = 'flex'; 
        });
      }
      if(loginBtnMenuCart){
        loginBtnMenuCart.addEventListener('click', () =>{
            loginPage.classList.add('log-in');
            document.body.classList.add('no-scroll');
            cartContentEmpty.classList.remove('navActive');
            burgerLinks.classList.remove("burger-links");
        });
      }
      /*
      if(loginBtnMenuCartTab){
        loginBtnMenuCartTab.addEventListener('click', () =>{
              loginPage.classList.add('log-in');
            document.body.classList.add('no-scroll');
        });
      }*/
        //For closing login page
        closeLoginPage.addEventListener('click', () => {
            loginPage.classList.remove('log-in');
            document.body.classList.remove('no-scroll');
            coverPage.style.display = 'none';
        });
        if(window.innerWidth > 540) return;
        const upperPanel1 = document.querySelector('.main-panel-upper-first');
        const upperPanel2 = document.querySelector('.main-panel-upper-second');
        const upperPanel3 = document.querySelector('.main-panel-upper-third');
        upperPanel1.addEventListener('click', () =>{
          alert('clicked first panel. Content under planning');
        });
        upperPanel2.addEventListener('click', () =>{
           alert('clicked second panel. Content under planning');
        });
        upperPanel3.addEventListener('click', () =>{
          alert('clicked third panel. Content under planning');
        });
        
        //For the carousel at the very top of the page
        if(window.innerWidth <= 430){

        const newUpperPanel = document.createElement('div');
        newUpperPanel.classList = 'new-upper-panel';
        const firstUpper = document.querySelectorAll('.upper-carousel');
        newUpperPanel.append(...firstUpper);
        const mainPanel = document.getElementById('Main-Panel');
        mainPanel.prepend(newUpperPanel);
        
        const contactContainer = document.querySelector('#contact-div-for-mobile');
        const footerContainer = document.querySelector('.alright-reserve');
        footerContainer.classList.add('temporary-footer-reserve');
        contactContainer.appendChild(footerContainer);
        if(window.innerWidth > 430){
          newUpperPanel.remove(...firstUpper);
          mainPanel.remove(newUpperPanel);
          contactContainer.removeChild(footerContainer);
          return;
        }
        }                  
});

function loginCreateAccnt(){
  const loginBtn = document.getElementById('sign-in');
  const createAccBtn = document.getElementById('register');

  loginBtn.addEventListener('click', () =>{
    alert('Link to login page');
  });
  createAccBtn.addEventListener('click', () =>{
    alert('Link to create account page');
  });
}loginCreateAccnt();

window.__mobileUpperSliderActive = false;
window.__mobileMainSliderActive = false;
function mobileUpperPanelSlider(){
        if (window.innerWidth > 430) {
        window.__mobileUpperSliderActive = false;

        // Clean dots when switching to desktop
        const dots = document.querySelector('.mobile-slider-dots');
        if (dots) dots.innerHTML = "";

        return;
    }
    if (window.__mobileUpperSliderActive) return;
    window.__mobileUpperSliderActive = true;
        const slider = document.querySelector('.new-upper-panel');
        if(!slider) return;
        const upperPanelContent = document.querySelectorAll('.upper-carousel');
        const dotsContainer = document.querySelector('.mobile-slider-dots');

        let index = 0;
        let startX = 0;
        let isDragging = false;

        dotsContainer.innerHTML = '';
        upperPanelContent.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'mobile-dot' + (i === 0 ? ' mobile-active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        });
        

        const dots = document.querySelectorAll('.mobile-dot');
        function updateSlider(){
                upperPanelContent.forEach((s, i) => {
                        s.style.transform =  `translateX(${-index * 100}%)`;
                });
                dots.forEach((d, i) => {
                d.classList.toggle('mobile-active', i === index);
                });
        }
        
        function goToSlide(i) {
                index = i;
                updateSlider();
        }

        function nextSlide() {
                index = (index + 1) % upperPanelContent.length;
                updateSlider();
        }
         slider.addEventListener('touchstart', e => {startX = e.touches[0].clientX;
          isDragging = true;},
          { passive: true }
        );

        slider.addEventListener('touchmove', e => {
                if (!isDragging) return;
        }, { passive: true });
        slider.addEventListener('touchend', e => {
                if (!isDragging) return;
                        const endX = e.changedTouches[0].clientX;
                        const diff = endX - startX;

        if (diff > 50) {
            index = index === 0 ? upperPanelContent.length - 1 : index - 1;
        } else if (diff < -50) {
            index = (index + 1) % upperPanelContent.length;
        }

        updateSlider();
                isDragging = false;
        });
          updateSlider();
        
}
document.addEventListener('DOMContentLoaded', mobileUpperPanelSlider);
window.addEventListener("resize", () => {
    mobileUpperPanelSlider();
});

function mobileMainPanelSlider(){
  if (window.innerWidth > 430) {
    if (window.__mobileMainSliderActive) {
        window.__mobileMainSliderActive = false;

        document.querySelectorAll(
            ".mobile-main-panel-carousel-dots, .mobile-main-panel-slider-dots"
        ).forEach(el => el.remove());
    }
    return;
}

  const wrapper = document.querySelector('.owl-carousel-container');
  const list = document.querySelector('.owl-carousel');
  const items = Array.from(document.querySelectorAll('.carousel-item'));  

  let index = 0;
  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let animating = false;
  
  // --- CREATE DOT CONTAINER ---
  let dotsContainer = document.querySelector('.mobile-main-panel-slider-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.className = 'mobile-main-panel-carousel-dots';
    wrapper.appendChild(dotsContainer);
  }

  // --- CREATE DOTS ---
  dotsContainer.innerHTML = '';
  const dots = items.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'mobile-main-panel-dots';
    if (i === 0) dot.classList.add('mobile-main-panel-active');
    dotsContainer.appendChild(dot);
    return dot;
  });

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('mobile-main-panel-active', i === index);
    });
  }

  // calculate widths including margins
  function getSlideMetrics() {
    const item = items[0];
    const itemRect = item.getBoundingClientRect();
    const style = getComputedStyle(item);
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    const slideWidth = itemRect.width; // doesn't include margins
    const listStyle = getComputedStyle(list);
    let gap = parseFloat(listStyle.gap) || 0;//Get also the gap style from the carousel container
    // If gap is percentage, convert it to px:
  if (listStyle.gap.includes('%')) {
        const wrapperWidth = wrapper.getBoundingClientRect().width;
         gap = wrapperWidth * (parseFloat(listStyle.gap) / 100);
        }
    const fullSlideWidth = slideWidth + marginLeft + marginRight + gap;
    const wrapperWidth = wrapper.getBoundingClientRect().width;

    return { slideWidth, fullSlideWidth, wrapperWidth };
  }

  function updateTransform(translateX, withTransition = true) {
    list.style.transition = withTransition ? 'transform 300ms ease' : 'none';
    list.style.transform = `translateX(${translateX}px)`;
  }

  function goToIndex(i) {
    const { slideWidth, fullSlideWidth, wrapperWidth } = getSlideMetrics();
    // --- WRAP AROUND LOGIC ---
    if (i < 0) {
        index = items.length - 1;      // go to last slide
    } else if (i >= items.length) {
        index = 0;                     // go to first slide
    } else {
        index = i;
    }
    // center offset so the active slide sits in the middle of wrapper
    const centerOffset = (wrapperWidth - slideWidth) / 2;
    const translateX = -(index * fullSlideWidth) + centerOffset;
    currentTranslate = translateX;
    updateTransform(translateX, true);
    updateDots();
  }

  // Touch handlers (basic swipe)
  list.addEventListener('touchstart', (e) => {
    if (animating) return;
    const t = e.touches[0];
    startX = t.clientX;
    isDragging = true;
    list.style.transition = 'none'; // disable transition while dragging
  }, {passive: true});

  list.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const t = e.touches[0];
    const { fullSlideWidth } = getSlideMetrics();
    const delta = t.clientX - startX;
    // show follow-drag feedback by applying delta to currentTranslate
    updateTransform(currentTranslate + delta, false);
  }, {passive: true});

  list.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    isDragging = false;

    // threshold
    const THRESH = 50;
    if (diff > THRESH) {
      goToIndex(index - 1);
    } else if (diff < -THRESH) {
      goToIndex(index + 1);
    } else {
      // snap back to same slide
      goToIndex(index);
    }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToIndex(i));
  });
/*Original code but due to erro when manually resizing the width
  error occurs and read null to our appended items so use below code instead
  // Recenter on resize (recompute metrics)
  window.addEventListener('resize', () => {
    // re-center currently active slide
    goToIndex(index);
  });*/
  // Recenter on resize (recompute metrics)
  // init
  goToIndex(0);  
}
document.addEventListener('DOMContentLoaded', mobileMainPanelSlider);
//window.addEventListener('resize', mobileMainPanelSlider);
window.addEventListener("resize", mobileMainPanelSlider);





function mobileMainPanelSlider2(){
    if (window.innerWidth > 430) {
    if (window.__mobileMainSliderActive) {
        window.__mobileMainSliderActive = false;

        document.querySelectorAll(
            ".mobile-main-panel-carousel-dots, .mobile-main-panel-slider-dots-2"
        ).forEach(el => el.remove());
    }
    return;
}

  const wrapper2 = document.querySelector('.owl-carousel-container-shoes');
  const list2 = document.querySelector('.owl-carousel-shoes');
  const items2 = Array.from(document.querySelectorAll('.carousel-item-shoes'));

  let index2 = 0;
  let startX2 = 0;
  let isDragging2 = false;
  let currentTranslate2 = 0;
  let animating2 = false;
  
  // --- CREATE DOT CONTAINER ---
  let dotsContainer2 = document.querySelector('.mobile-main-panel-slider-dots-2');
  if (!dotsContainer2) {
    dotsContainer2 = document.createElement('div');
    dotsContainer2.className = 'mobile-main-panel-carousel-dots';
    wrapper2.appendChild(dotsContainer2);
  }

  // --- CREATE DOTS ---
  dotsContainer2.innerHTML = '';
  const dots2 = items2.map((_, i) => {
    const dot2 = document.createElement('button');
    dot2.className = 'mobile-main-panel-dots-2';
    if (i === 0) dot2.classList.add('mobile-main-panel-active-2');
    dotsContainer2.appendChild(dot2);
    return dot2;
  });

  function updateDots2() {
    dots2.forEach((dot2, i) => {
      dot2.classList.toggle('mobile-main-panel-active-2', i === index2);
    });
  }
  // calculate widths including margins
    // If gap is percentage, convert it to px:
  function getSlideMetrics2() {
    const item2 = items2[0];
    const itemRect2 = item2.getBoundingClientRect();
    const style2 = getComputedStyle(item2);
    const marginLeft2 = parseFloat(style2.marginLeft) || 0;
    const marginRight2 = parseFloat(style2.marginRight) || 0;
    const slideWidth2 = itemRect2.width; // doesn't include margins
    const listStyle2 = getComputedStyle(list2);
    let gap2 = parseFloat(listStyle2.gap) || 0;//Get also the gap style from the carousel container
    // If gap is percentage, convert it to px:
  if (listStyle2.gap.includes('%')) {
        const wrapperWidth2 = wrapper2.getBoundingClientRect().width;
         gap2 = wrapperWidth2 * (parseFloat(listStyle2.gap) / 100);
        }
    const fullSlideWidth2 = slideWidth2 + marginLeft2 + marginRight2 + gap2;
    const wrapperWidth2 = wrapper2.getBoundingClientRect().width;

    return { slideWidth2, fullSlideWidth2, wrapperWidth2 };
  }

  function updateTransform2(translateX, withTransition = true) {
    list2.style.transition = withTransition ? 'transform 300ms ease' : 'none';
    list2.style.transform = `translateX(${translateX}px)`;
  }

  function goToIndex2(i) {
    const { slideWidth2, fullSlideWidth2, wrapperWidth2 } = getSlideMetrics2();
    // --- WRAP AROUND LOGIC ---
    if (i < 0) {
        index2 = items2.length - 1;      // go to last slide
    } else if (i >= items2.length) {
        index2 = 0;                     // go to first slide
    } else {
        index2 = i;
    }
    // center offset so the active slide sits in the middle of wrapper
    const centerOffset = (wrapperWidth2 - slideWidth2) / 2;
    const translateX = -(index2 * fullSlideWidth2) + centerOffset;
    currentTranslate2 = translateX;
    updateTransform2(translateX, true);
    updateDots2();
  }

  // Touch handlers (basic swipe)
  list2.addEventListener('touchstart', (e) => {
    if (animating2) return;
    const t = e.touches[0];
    startX2 = t.clientX;
    isDragging2 = true;
    list2.style.transition = 'none'; // disable transition while dragging
  }, {passive: true});

  list2.addEventListener('touchmove', (e) => {
    if (!isDragging2) return;
    const t = e.touches[0];
    const { fullSlideWidth } = getSlideMetrics2();
    const delta = t.clientX - startX2;
    // show follow-drag feedback by applying delta to currentTranslate
    updateTransform2(currentTranslate2 + delta, false);
  }, {passive: true});

  list2.addEventListener('touchend', (e) => {
    if (!isDragging2) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX2;
    isDragging2 = false;

    // threshold
    const THRESH = 50;
    if (diff > THRESH) {
      goToIndex2(index2 - 1);
    } else if (diff < -THRESH) {
      goToIndex2(index2 + 1);
    } else {
      // snap back to same slide
      goToIndex2(index2);
    }
  });
  dots2.forEach((dot2, i) => {
    dot2.addEventListener('click', () => goToIndex2(i));
  });
  // Recenter on resize (recompute metrics)
  /*window.addEventListener('resize', () => {
    // re-center currently active slide
    goToIndex2(index2);
  });*/

  // inititilization
  goToIndex2(0);    
}
document.addEventListener('DOMContentLoaded', mobileMainPanelSlider2);
window.addEventListener('resize', mobileMainPanelSlider2);
const mq = window.matchMedia("(max-width: 430px)");

mq.addEventListener("change", e => {
    if (!e.matches) {
        // Desktop now → remove ALL dots
        document.querySelectorAll(
          ".mobile-main-panel-carousel-dots, .mobile-main-panel-slider-dots, .mobile-main-panel-slider-dots-2"
        ).forEach(el => el.remove());

        // Unlock slider initialization if user goes back to mobile
        window.__mobileMainSliderActive = false;
    } 
});

let lowerSliderInitialized = false;
function mobileLowerPanelSlider(){
  if (window.innerWidth > 430) return;
  const lowerWrapper = document.querySelector('.outdoor-panel-wrapper');
  const lowerList = document.querySelector('.outdoor-panel-mobile-container');
  const lowerItems = Array.from(document.querySelectorAll('.outdoor-panel-item'));  

  if (window.innerWidth > 430) {

    if (lowerSliderInitialized) {
      // Remove transform
      lowerList.style.transform = "";
      lowerList.style.transition = "";

      // Remove all touch listeners by cloning
      const clone = lowerList.cloneNode(true);
      lowerList.parentNode.replaceChild(clone, lowerList);

      lowerSliderInitialized = false;
    }

    return;
  }
  if (lowerSliderInitialized) return;
  lowerSliderInitialized = true;
  
  let index3 = 0;
  let startX3 = 0;
  let isDragging3 = false;
  let currentTranslate3 = 0;
  let animating3 = false; 

  // calculate widths including margins
  function getSlideMetrics3() {
    const item3 = lowerItems[0];
    const itemRect3 = item3.getBoundingClientRect();
    const style3 = getComputedStyle(item3);
    const marginLeft3 = parseFloat(style3.marginLeft) || 0;
    const marginRight3 = parseFloat(style3.marginRight) || 0;
    const slideWidth3 = itemRect3.width; // doesn't include margins
    const listStyle3 = getComputedStyle(lowerList);
    let gap = parseFloat(listStyle3.gap) || 0;//Get also the gap style from the carousel container
    // If gap is percentage, convert it to px:
  if (listStyle3.gap.includes('%')) {
        const wrapperWidth3 = lowerWrapper.getBoundingClientRect().width;
         gap = wrapperWidth3 * (parseFloat(listStyle3.gap) / 100);
        }
    const fullSlideWidth3 = slideWidth3 + marginLeft3 + marginRight3 + gap;
    const wrapperWidth3 = lowerWrapper.getBoundingClientRect().width;

    return { slideWidth3, fullSlideWidth3, wrapperWidth3 };
  }

  function updateTransform3(translateX, withTransition = true) {
    lowerList.style.transition = withTransition ? 'transform 300ms ease' : 'none';
    lowerList.style.transform = `translateX(${translateX}px)`;
  }

  function goToIndex3(i) {
    const { slideWidth3, fullSlideWidth3, wrapperWidth3 } = getSlideMetrics3();
    // --- WRAP AROUND LOGIC ---
    if (i < 0) {
        index3 = lowerItems.length - 1;      // go to last slide
    } else if (i >= lowerItems.length) {
        index3 = 0;                     // go to first slide
    } else {
        index3 = i;
    }
    // center offset so the active slide sits in the middle of wrapper
    const centerOffset = (wrapperWidth3 - slideWidth3) / 2;
    const translateX = -(index3 * fullSlideWidth3) + centerOffset;
    currentTranslate3 = translateX;
    updateTransform3(translateX, true);
  }

  // Touch handlers (basic swipe)
  lowerList.addEventListener('touchstart', (e) => {
    if (animating3) return;
    const t = e.touches[0];
    startX3 = t.clientX;
    isDragging3 = true;
    lowerList.style.transition = 'none'; // disable transition while dragging
  }, {passive: true});

  lowerList.addEventListener('touchmove', (e) => {
    if (!isDragging3) return;
    const t = e.touches[0];
    const { fullSlideWidth } = getSlideMetrics3();
    const delta = t.clientX - startX3;
    // show follow-drag feedback by applying delta to currentTranslate
    updateTransform3(currentTranslate3 + delta, false);
  }, {passive: true});

  lowerList.addEventListener('touchend', (e) => {
    if (!isDragging3) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX3;
    isDragging3 = false;

    // threshold
    const THRESH = 50;
    if (diff > THRESH) {
      goToIndex3(index3 - 1);
    } else if (diff < -THRESH) {
      goToIndex3(index3 + 1);
    } else {
      // snap back to same slide
      goToIndex3(index3);
    }
  });
 // Recenter on resize (recompute metrics)
  window.addEventListener('resize', () => {
    // re-center currently active slide
    goToIndex3(index3);
  });

  // init
  goToIndex3(0);  
}
document.addEventListener('DOMContentLoaded', mobileLowerPanelSlider);
window.addEventListener('resize', mobileLowerPanelSlider);

function backToTop(){
  const backToTopBtn = document.querySelector('#back-to-top');
  backToTopBtn.addEventListener('click', () =>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}backToTop();

 function mostAskedQuestions(){
     
        const newsMenuBtn1 = document.getElementById('newsMenuBtn1');
        const newsMenuBtn2 = document.getElementById('newsMenuBtn2');
        const newsMenuBtn3 = document.getElementById('newsMenuBtn3');
        let newsMenuArray = [newsMenuBtn1, newsMenuBtn2,newsMenuBtn3];
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-div-pop';
      
        const upperHeaderContainer = document.querySelector('.mobile-header');
        upperHeaderContainer.classList.add('mobile-header-menu');
        burgerLinks.prepend(upperHeaderContainer);  

             
        burgerLinks.append(menuDiv);
        const burgerLinkFooter = document.querySelector('.burger-links-hidden-footer');
        burgerLinkFooter.classList.add('alright-reserve-burgerlinks-footer');
        burgerLinks.appendChild(burgerLinkFooter);

        menuDiv.addEventListener('click', (e) => {
        const dropQuestionsBtn = e.target.closest('#drop-questions');
        if (dropQuestionsBtn) {
                const dropAnswers = menuDiv.querySelector('#questions');
                if (dropAnswers) {
                        dropAnswers.style.display = 
                        dropAnswers.style.display === 'none' ? 'flex' : 'none';
                }
         }
        
        const policyBtn = e.target.closest('#policy');
        if(policyBtn){
                const policyContent = menuDiv.querySelector('#policies');
                if(policyContent){
                       policyContent.style.display = 
                       policyContent.style.display === 'none' ? 'flex' : 'none'; 
                }
        }
        const communityBtn = e.target.closest('#community');
        if(communityBtn){
                const communityContent = menuDiv.querySelector('#communities');
                if(communityContent){
                        communityContent.style.display =
                        communityContent.style.display === 'none' ? 'flex' : 'none';
                }
        }
        });
        
        
        for(let i = 0; i < newsMenuArray.length; i++){
                newsMenuArray[i].addEventListener('click', () => {  
                        if(newsMenuArray[i].id === 'newsMenuBtn1'){ 
                                        
                        menuDiv.innerHTML =`
                        <span class="news-menu-cp-head">News</span>
                        <div class="news-menu-cp">
                                <span class="news-menu-cp-title">Title 1</span> 
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem praesentium at alias velit cum. Eius optio maiores delectus unde ipsam labore a numquam quod aperiam temporibus, corporis qui accusamus!</p>
                                <img src="images/category/communication-social-media-icons.jpg" alt="Trend icon">
                        </div>
                        <div class="news-menu-cp">
                                <span class="news-menu-cp-title">Title 2</span> 
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem praesentium at alias velit cum. Eius optio maiores delectus unde ipsam labore a numquam quod aperiam temporibus, corporis qui accusamus!</p>
                                <img src="images/category/couple-backpacks-rocks-sunset.jpg" alt="New release">
                        </div>
                        <div class="news-menu-cp">
                                <span class="news-menu-cp-title">Title 3</span> 
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem praesentium at alias velit cum. Eius optio maiores delectus unde ipsam labore a numquam quod aperiam temporibus, corporis qui accusamus!</p>
                                <img src="images/category/denim-sneakers-street-style.jpg" alt="Most ordered">
                        </div>
                        <div class="news-menu-cp">
                                <span class="news-menu-cp-title">Title 4</span> 
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem praesentium at alias velit cum. Eius optio maiores delectus unde ipsam labore a numquam quod aperiam temporibus, corporis qui accusamus!</p>
                                <img src="images/upper-panel/vecteezy_antique-table-holds-old-literature-rustic-elegance_24642428.jpg" alt="Creative styles">
                        </div>
                        `;          
                        }else if(newsMenuArray[i].id === 'newsMenuBtn2'){
                        menuDiv.innerHTML = `
                        <span class="news-menu-cp-head">About us</span>
                        <div class="about-us-menu-cp">
                                <div class="about-us-menu-cp-img">
                                        <img src="images/logo/agency.jpg" alt=""> 
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>    
                                </div>
                                <p class="menu-contact">Contact #: 000-0000-0000</p>
                                <p>Email: oOo@testmail.com</p>
                                <p>Address: somewhere down d street Ave.</p>
                                <div class="social-media">
                                        <img src="images/logo/facebook-svgrepo-com.svg" alt="facebook">
                                        <img src="images/logo/instagram-rounded-border-svgrepo-com.svg" alt="instagram">
                                        <img src="images/logo/linkedin-boerder-svgrepo-com.svg" alt="instagram">
                                </div>
                        </div>
                        `;
               
                        }else if(newsMenuArray[i].id === 'newsMenuBtn3'){
                        menuDiv.innerHTML = `
                        <div class="drop-question-container">
                                <span class="news-menu-cp-head" id="drop-questions">Most asked questions</span>
                                <div class="question-hidden" id="questions">   
                                        <h2>Question 1</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <h2>Question 2</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <h2>Question 3</h2>
                                        <p>Some text here</p>
                                </div>
                        </div>
                        <div>
                                <span class="news-menu-cp-head" id="policy">Policies</span>
                                <div class="question-hidden" id="policies">   
                                        <h2>Scam</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <h2>Selling items on our site</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <h2>Return policy</h2>
                                        <p>Some text here</p>
                                </div>
                        </div>
                        <div>
                                <span class="news-menu-cp-head" id="community">Community</span>
                                <div class="question-hidden" id="communities">   
                                        <h2>Our sponsors</h2>
                                        <p><span>Sponsor 1</span></br>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <p><span>Sponsor 2</span></br>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <h2>Local community</h2>
                                        <p>Some text here</p>
                                        <h2>Foundations we are supporting</h2>
                                        <p><span>Foundation 1</span></br>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        <p><span>Foundation 2</span></br>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias temporibus quae corporis minima sapiente dolorum autem, exercitationem quod porro enim error ipsam sit ullam saepe distinctio perferendis incidunt deleniti accusamus!</p>
                                        
                                </div>
                        </div>
                        `;  
                        menuDiv.style.display = 'flex';
                                // simulate a click on #drop-questions so toggle runs immediately
                                const dropBtn = menuDiv.querySelector('#drop-questions');
                                if (dropBtn) {
                                // Use a real click event so your delegated handler sees it. Fake click event
                                dropBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                                }
                                const policyDropBtn = menuDiv.querySelector('#policy');
                                if(policyDropBtn){
                                policyDropBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
                                }
                                const communityDropBtn = menuDiv.querySelector('#community');
                                if(communityDropBtn){
                                        communityDropBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
                                }
                        }else{return;}
                             
                }); 
        }

}mostAskedQuestions();

/*For testing
[...document.querySelectorAll('.contact-div > div')].forEach((el,i)=>{
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  console.log(
    `child ${i}: clientW=${el.clientWidth}px scrollW=${el.scrollWidth}px rectW=${Math.round(r.width)}px marginL=${cs.marginLeft} marginR=${cs.marginRight} white-space=${getComputedStyle(el).whiteSpace}`
  );
  // Also check inner img if present:
  const img = el.querySelector('img');
  if(img){
    const ir = img.getBoundingClientRect();
    console.log(`  img: natural(${img.naturalWidth}×${img.naturalHeight}) displayed(${Math.round(ir.width)}×${Math.round(ir.height)})`);
  }
});*/