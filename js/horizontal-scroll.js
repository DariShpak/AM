document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scroll-container")
  const sections = document.querySelectorAll(".section")

  let currentIndex = 0
  let touchStartX = 0
  let touchEndX = 0

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return

    const targetScroll = sections[index].offsetLeft - container.offsetLeft
    container.scrollTo({left: targetScroll, behavior: "smooth"})
  }

  // 🔹 Прокрутка мишею або тачпадом (Throttle 200ms)
  document.addEventListener(
    "wheel",
    _.throttle(function (event) {
      if (window.innerWidth >= 1024) {
        event.preventDefault()
        if (event.deltaY > 10 && currentIndex < sections.length - 1) {
          currentIndex++
        } else if (event.deltaY < -10 && currentIndex > 0) {
          currentIndex--
        }
        scrollToSection(currentIndex)
      }
    }, 200),
    {passive: false}
  )

  // 🔹 Прокрутка клавішами клавіатури (Debounce 100ms)
  document.addEventListener(
    "keydown",
    _.debounce(function (event) {
      if (window.innerWidth >= 1024) {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          if (currentIndex < sections.length - 1) {
            currentIndex++
            scrollToSection(currentIndex)
          }
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          if (currentIndex > 0) {
            currentIndex--
            scrollToSection(currentIndex)
          }
        }
      }
    }, 100)
  )

  // 🔹 Свайпи на сенсорних пристроях (Throttle 200ms)
  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  container.addEventListener(
    "touchend",
    _.throttle(function (e) {
      touchEndX = e.changedTouches[0].screenX
      if (window.innerWidth >= 1024) {
        if (
          touchStartX > touchEndX + 50 &&
          currentIndex < sections.length - 1
        ) {
          currentIndex++
        } else if (touchStartX < touchEndX - 50 && currentIndex > 0) {
          currentIndex--
        }
        scrollToSection(currentIndex)
      }
    }, 200)
  )
})
