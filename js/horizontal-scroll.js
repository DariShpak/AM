// const scrollContainer = document.querySelector(".horizontal-scroll")

// function handleScroll(event) {
//   if (window.innerWidth >= 1024) {
//     event.preventDefault()
//     scrollContainer.scrollLeft += event.deltaY
//   }
// }

// function updateScrollBehavior() {
//   if (window.innerWidth >= 1024) {
//     window.addEventListener("wheel", handleScroll, {passive: false})
//   } else {
//     window.removeEventListener("wheel", handleScroll)
//   }
// }

// window.addEventListener("resize", updateScrollBehavior)
// updateScrollBehavior()

// const scrollContainer = document.querySelector(".horizontal-scroll")
// const scrollSpeed = 2.5 // Множник швидкості скролу

// function handleScroll(event) {
//   if (window.innerWidth >= 1024) {
//     event.preventDefault()
//     scrollContainer.scrollLeft += event.deltaY * scrollSpeed // Прискорення прокрутки
//   }
// }

// function updateScrollBehavior() {
//   if (window.innerWidth >= 1024) {
//     window.addEventListener("wheel", handleScroll, {passive: false})
//   } else {
//     window.removeEventListener("wheel", handleScroll)
//   }
// }

// // Запускаємо при завантаженні та при зміні розміру екрану
// window.addEventListener("resize", updateScrollBehavior)
// updateScrollBehavior()

const scrollContainer = document.querySelector(".horizontal-scroll")
const scrollSpeed = 3 // Швидкість прокрутки

function handleScroll(event) {
  if (window.innerWidth >= 1024) {
    event.preventDefault()

    let scrollAmount = event.deltaY || event.deltaX || 0

    // Chrome може мати іншу шкалу дельти
    if (event.deltaMode === 1) {
      // DOM_DELTA_LINE
      scrollAmount *= 40
    } else if (event.deltaMode === 2) {
      // DOM_DELTA_PAGE
      scrollAmount *= window.innerHeight
    }

    scrollContainer.scrollLeft += scrollAmount * scrollSpeed
  }
}

function updateScrollBehavior() {
  if (window.innerWidth >= 1024) {
    window.addEventListener("wheel", handleScroll, {passive: false})
  } else {
    window.removeEventListener("wheel", handleScroll)
  }
}

// Запускаємо при завантаженні та при зміні розміру екрану
window.addEventListener("resize", updateScrollBehavior)
updateScrollBehavior()
