document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Забороняємо перезавантаження сторінки

    // Отримуємо значення з форми
    const categoryId = document.getElementById("category").value
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    // Формуємо дані для запиту
    const postData = {
      CategoryId: categoryId,
      Title: title,
      Description: description
    }

    // Використовуємо fetch API для відправки POST-запиту
    fetch("api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // Вивід у консоль
        document.getElementById("responseMessage").textContent = data.success
          ? "Пост успішно створено!"
          : "Помилка: " + data.error
      })
      .catch((error) => {
        console.error("Помилка:", error)
        document.getElementById("responseMessage").textContent =
          "Не вдалося відправити дані."
      })
  })
