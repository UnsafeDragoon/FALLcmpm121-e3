// @deno-types="./asset-url.d.ts"

// Crown by Juicy_fish on Magnific
import crownURL from "./assets/418787618_ef9c3d1e-6a85-47b1-b6fc-8b85e043b051.png?no-inline";
// Robe by upklyak on Magnific
import robeURL from "./assets/417895655_9eb69b9a-c697-4322-b8c0-a48795fd29ee (1).png?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 300");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face of a king with a red robe on.");

const robeImg = document.createElementNS("http://www.w3.org/2000/svg", "image");
robeImg.setAttribute("href", robeURL);
robeImg.setAttribute("x", "-200");
robeImg.setAttribute("y", "100");
robeImg.setAttribute("width", "600");
robeImg.setAttribute("height", "600");
face.append(robeImg);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "150");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "132");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "132");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "146");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "162");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "187");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "187");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

const crownImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
crownImg.setAttribute("href", crownURL);
crownImg.setAttribute("x", "25");
crownImg.setAttribute("y", "-20");
crownImg.setAttribute("width", "150");
crownImg.setAttribute("height", "150");
face.append(crownImg);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
