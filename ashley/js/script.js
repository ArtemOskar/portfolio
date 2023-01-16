const frameImage = document.querySelector('.frame-3__image-right');
const frameContent = document.querySelector('.frame-3__content');
const mobileFrameContent = document.querySelector('.frame-mobile__content');
const mobileFrame = document.querySelector('.frame-mobile');
const viewportWidth = window.screen.width;

if (viewportWidth < 768) {
   mobileFrameContent.insertAdjacentElement('afterbegin', frameImage);
} else {
   frameContent.insertAdjacentElement('afterend', frameImage);
}

if (viewportWidth > 768) {
   mobileFrame.classList.remove('main__frame');
   mobileFrame.style.display = 'none';
} else {
   mobileFrame.classList.add('main__frame');
}


window.addEventListener('resize', () => {
   const viewport = window.screen.width;
   if (viewport < 768) {
      mobileFrameContent.insertAdjacentElement('afterbegin', frameImage);
   } else {
      frameContent.insertAdjacentElement('afterend', frameImage);
   }

   if (viewport > 768) {
      mobileFrame.classList.remove('main__frame');
      mobileFrame.style.display = 'none';
   } else {
      mobileFrame.classList.add('main__frame');
   }

   // 3D scroll
   let zSpacing = -1000,
      lastPost = zSpacing / 2,
      $frames = document.getElementsByClassName('main__frame'),
      frames = Array.from($frames),
      zVals = []

   window.onscroll = function () {
      let top = document.documentElement.scrollTop,
         delta = lastPost - top

      lastPost = top

      frames.forEach(function (n, i) {
         zVals.push((i * zSpacing) + zSpacing)
         zVals[i] += delta * -2  //-3

         let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

         frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)

         if (zVals[i] > 799) {
            frame.setAttribute('style', `display: none;`)
         }
      })
   }
});


// 3D scroll
let zSpacing = -1000,
   lastPost = zSpacing / 2, //5
   $frames = document.getElementsByClassName('main__frame'),
   frames = Array.from($frames),
   zVals = []

window.onscroll = function () {
   let top = document.documentElement.scrollTop,
      delta = lastPost - top
   lastPost = top

   frames.forEach(function (n, i) {
      zVals.push((i * zSpacing) + zSpacing)
      zVals[i] += delta * -2  //-3

      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`,
         opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)

      if (zVals[i] > 799) {
         frame.setAttribute('style', `display: none;`)
      }


      if (frame.closest('.frame-form') && zVals[i] >= 0) {
         document.body.classList.add('stop')
         window.scrollTo(0, `${top}` - 1)
      } else {
         document.body.classList.remove('stop')
      }

   })
}

window.scrollTo(0, 1)

document.addEventListener('click', clickAction);
const cookiesBlock = document.querySelector('.cookies');
function clickAction(event) {
   const targetClick = event.target;
   if (targetClick.closest('.cookies__close')) {
      cookiesBlock.classList.remove('open-cookies');
   }
}




// /**
//      * Normalized hide address bar for iOS & Android
//      * (c) Scott Jehl, scottjehl.com
//      * MIT License
//      */

// // If we split this up into two functions we can reuse
// // this function if we aren't doing full page reloads.

// // If we cache this we don't need to re-calibrate everytime we call
// // the hide url bar
// MBP.BODY_SCROLL_TOP = false;

// // So we don't redefine this function everytime we
// // we call hideUrlBar
// MBP.getScrollTop = function () {
//    var win = window;
//    var doc = document;

//    return win.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
// };

// // It should be up to the mobile
// MBP.hideUrlBar = function () {
//    var win = window;

//    // if there is a hash, or MBP.BODY_SCROLL_TOP hasn't been set yet, wait till that happens
//    if (!location.hash && MBP.BODY_SCROLL_TOP !== false) {
//       win.scrollTo(0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1);
//    }
// };

// MBP.hideUrlBarOnLoad = function () {
//    var win = window;
//    var doc = win.document;
//    var bodycheck;

//    // If there's a hash, or addEventListener is undefined, stop here
//    if (!win.navigator.standalone && !location.hash && win.addEventListener) {

//       // scroll to 1
//       window.scrollTo(0, 1);
//       MBP.BODY_SCROLL_TOP = 1;

//       // reset to 0 on bodyready, if needed
//       bodycheck = setInterval(function () {
//          if (doc.body) {
//             clearInterval(bodycheck);
//             MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
//             MBP.hideUrlBar();
//          }
//       }, 15);

//       win.addEventListener('load', function () {
//          setTimeout(function () {
//             // at load, if user hasn't scrolled more than 20 or so...
//             if (MBP.getScrollTop() < 20) {
//                // reset to hide addr bar at onload
//                MBP.hideUrlBar();
//             }
//          }, 0);
//       }, false);
//    }
// };