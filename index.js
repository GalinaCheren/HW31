const gallery = [
  "Airbrush Flawless Longwear Foundation.jpeg",
  "BACKSTAGE Eyeshadow Palette.jpeg",
  "Charlotte Tilbury.jpeg",
  "Dior BACKSTAGE Glow Face Palette.jpeg",
  "Double Wear Stay-in-Place Foundation.jpeg",
  "Eye Color Crème Eyeshadow Quad.jpeg",
  "Fenty Beauty by Rihanna.jpeg",
  "GUERLAIN.jpeg",
];

function showSlider(images) {
  const container = document.createElement("div");
  container.classList.add("slider__container");

  const sliderInnerContainer = document.createElement("div");
  sliderInnerContainer.classList.add("slider__innerContainer");

  const sliderPrev = document.createElement("button");
  sliderPrev.classList.add("slider__prev");
  sliderPrev.innerText = "Prev";
  sliderPrev.onclick = onSlideChange;
  sliderPrev.disabled = true;

  const sliderNext = document.createElement("button");
  sliderNext.classList.add("slider__next");
  sliderNext.innerText = "Next";
  sliderNext.onclick = onSlideChange;

  images.map((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.style.backgroundImage = `url('./images/${image}')`;

    imageContainer.classList.add("slider__image");
    sliderInnerContainer.append(imageContainer);
  });
  container.append(sliderInnerContainer);
  container.append(sliderPrev);
  container.append(sliderNext);
  document.body.append(container);

  function onSlideChange(event) {
    const buttonType = event.target.innerText;

    const currentLeftValue = sliderInnerContainer.style.left || 0;
    let newLeftValue;
    if (buttonType === "Next") {
      newLeftValue = parseFloat(currentLeftValue) - 400;
      if (newLeftValue === -1 * (images.length - 1) * 400) {
        sliderNext.disabled = true;
      } else if (sliderPrev.disabled) {
        sliderPrev.disabled = false;
      }
    } else {
      newLeftValue = parseFloat(currentLeftValue) + 400;
      if (!newLeftValue) {
        sliderPrev.disabled = true;
      } else if (sliderNext.disabled) {
        sliderNext.disabled = false;
      }
    }
    sliderInnerContainer.style.left = newLeftValue + "px";
  }
}
showSlider(gallery);
