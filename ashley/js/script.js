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

