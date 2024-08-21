// // Code to select the drop down and display text based on user's selection
// Methods learned:
// 1. querySelector
// 2. getElementById
// 3. addEventListner
// 4. value
// 5. textContent
// 6. innerHTML
// . event : "change"
// 1. **Mouse Events**:
//    - `"click"`: Triggered when an element is clicked.
//    - `"dblclick"`: Triggered when an element is double-clicked.
//    - `"mouseover"`: Triggered when the mouse pointer hovers over an element.
//    - `"mouseout"`: Triggered when the mouse pointer leaves an element.
//    - `"mousemove"`: Triggered when the mouse pointer moves over an element.
//    - `"mousedown"`: Triggered when a mouse button is pressed down on an element.
//    - `"mouseup"`: Triggered when a mouse button is released over an element.

// 2. **Keyboard Events**:
//    - `"keydown"`: Triggered when a key is pressed down.
//    - `"keyup"`: Triggered when a key is released.
//    - `"keypress"`: Triggered when a key is pressed and released.

// 3. **Form Events**:
//    - `"submit"`: Triggered when a form is submitted.
//    - `"reset"`: Triggered when a form is reset.
//    - `"focus"`: Triggered when an element gains focus.
//    - `"blur"`: Triggered when an element loses focus.

// 4. **Window Events**:
//    - `"load"`: Triggered when the page or an element has finished loading.
//    - `"resize"`: Triggered when the browser window is resized.
//    - `"scroll"`: Triggered when the user scrolls the page.

// 5. **Keyboard Events**:
//    - `"input"`: Triggered when the value of an `<input>`, `<textarea>`, or `<select>` element changes.
//    - `"change"`: Triggered when the value of an `<input>`, `<textarea>`, or `<select>` element changes and loses focus.

// 6. **Touch Events** (for touch devices):
//    - `"touchstart"`: Triggered when a touch point is placed on the touch surface.
//    - `"touchmove"`: Triggered when a touch point is moved along the touch surface.
//    - `"touchend"`: Triggered when a touch point is removed from the touch surface.

const select = document.querySelector("select");
const para = document.getElementById("paragraph");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;
  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.innerHTML =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.innerHTML =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.innerHTML =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

// coloring changing box
const set = document.getElementById("select-theme");
const box = document.getElementById("box");

function update(bgColor, textColor) {
  box.style.backgroundColor = bgColor;
  box.style.color = textColor;
}

// Apply the initial style based on the default selected value
update(
  set.value === "black" ? "black" : "white",
  set.value === "black" ? "white" : "black"
);

set.addEventListener("change", () => {
  set.value === "black" ? update("black", "white") : update("white", "black");
});
