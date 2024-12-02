// dummy data to render in html
let arr = [
  {
    unit: 1,
    price: 10,
    actual_price: 24,
    discount: 10,
  },
  {
    unit: 2,
    price: 18,
    actual_price: 24,
    discount: 20,
  },
  {
    unit: 3,
    price: 24,
    actual_price: 24,
    discount: 30,
  },
];

// selecting the unit_container div from html
let unit_container = document.getElementById("unit_container");

// here we are rendering the data in html using map function
unit_container.innerHTML = arr
  .map((el, i) => {
    return `
    <div class="info" onclick="expandFunction(this)">
    ${
      i == 1
        ? `<div class="trapezium"></div>
        <div
        class="most-popular"
        >
          MOST POPULAR
        </div>
        `
        : ""
    }
        <div class="unit" >
        <input style="border-radius: 50%;" type="checkbox" name="checkbox" id="">
        <div>
            <div style="margin:0">
            <div class="quantity">
                <p>${el.unit} Unit</p>
                <p style="color: white; background-color: #ff6b82;">${
                  el.discount
                }% Off</p>
            </div>
            ${
              i == 0 ? `<p class="standard-price">Standard Price</p>` : ""
            }</div>
            
            <div class="price">
                <p>$${el.price}.00 USD</p>
                <p>$${el.actual_price}.00 USD</p>
            </div>
        </div>
        </div>
    </div>
    `;
  })
  .join(" ");

// here we are creating the expand function
const expandFunction = (element) => {
  // here we are unchecking all the checkboxes
  let checkboxes = document.getElementsByName("checkbox");
  checkboxes.forEach((el) => {
    el.checked = false;
  });

  // here we are creating size and color div
  let size_color_div = `<div class="size_color">
    <p></p>
    <p>Size</p>
    <p>Color</p>
    <span>#1</span>
    <select name="" id="">
    <option value="S">S</option>
    </select>
    <select name="" id="">
    <option value="">Black</option>
    </select>
    <span>#2</span>
    <select name="" id="">
    <option value="S">S</option>
    </select>
    <select name="" id="">
    <option value="">Color</option>
    </select>
    </div>`;

  // here we are catching the parent div
  let unit_container = document.querySelectorAll(".info");

  // here we are adding the size_color_div in the parent div which we have clicked
  unit_container.forEach((el) => {
    if (el === element) {
      // here we are adding the size_color_div
      el.innerHTML += size_color_div;

      // here we are adding the expand css class
      el.classList.add("expand");

      // here we are removing the onclick so it should not append again
      el.removeAttribute("onclick");

      // here we are makeing the checkbox checked
      let checkbox = el.querySelector("input[name=checkbox]");
      checkbox.checked = true;
    } else {
      // here we are removing the size_color_div for non clicked div
      el.innerHTML = el.innerHTML.replace(size_color_div, "");

      // here we are removing the expand css class for non clicked div
      el.classList.remove("expand");

      // here we are adding the onclick for non clicked div again
      el.setAttribute("onclick", "expandFunction(this)");
    }
  });
};
