// const getCat = async () => {
//   try {
//     const cats = await axios.get("https://catfact.ninja/breeds");
//     console.log(cats.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getCat();

const display = document.querySelector("#display");
const button = document.querySelector("#button");
let body = document.querySelector("body");

function makeRandColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  return `rgb(${r},${g},${b})`;
}

function getBrightness(rgbColor) {
  // Extract the RGB values from the color string
  let values = rgbColor.match(/\d+/g);

  // Calculate brightness using the formula: (R * 299 + G * 587 + B * 114) / 1000
  let brightness = (values[0] * 299 + values[1] * 587 + values[2] * 114) / 1000;

  return brightness;
}

const getRandomDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const jokes = await axios.get("https://icanhazdadjoke.com/", config);
    return jokes.data.joke;
  } catch (e) {
    console.log(e);
  }
};

button.addEventListener("click", () => {
  getRandomDadJoke()
    .then((joke) => {
      display.innerText = joke;
    })
    .catch((err) => {
      console.log(err);
    });

  let color = makeRandColor();

  body.style.backgroundColor = color;

  // Calculate the brightness of the background color
  let brightness = getBrightness(color);

  // Set the text color based on brightness
  if (brightness < 128) {
    display.style.color = "white"; // If background is dark, set text to white
  } else {
    display.style.color = "black"; // If background is light, set text to black
  }
});
