document.getElementById('random-color').addEventListener('click', function () {

  const hexDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

  function generateRandomColor(hexDigits) {
    let bgColor = "#";

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexDigits.length);
      bgColor += hexDigits[index];
    }
    return bgColor;
  }

  function changeBgColor() {
    const color = generateRandomColor(hexDigits);
    document.body.style.backgroundColor = color;
  }

  window.addEventListener("load", changeBgColor());
})

