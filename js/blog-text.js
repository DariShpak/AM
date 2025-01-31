document.querySelectorAll(".article-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling

    document.querySelectorAll(".article-content").forEach((item) => {
      if (item !== content) {
        item.classList.remove("open")
      }
    })

    content.classList.toggle("open")
  })
})
