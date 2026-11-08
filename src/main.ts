const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A neutral face wearing pink/orange tinted sunglasses",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
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
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

const glassesTint = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);

glassesTint.setAttribute("id", "glass_tint");
glassesTint.setAttribute("x1", "0%");
glassesTint.setAttribute("y1", "0%");
glassesTint.setAttribute("x2", "100%");
glassesTint.setAttribute("y2", "0%");

const gColor1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
gColor1.setAttribute("offset", "0%");
gColor1.setAttribute("stop-color", "#ff9011");

const gColor2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
gColor2.setAttribute("offset", "100%");
gColor2.setAttribute("stop-color", "#7e0146f8");

glassesTint.appendChild(gColor1);
glassesTint.appendChild(gColor2);
defs.appendChild(glassesTint);

face.append(defs);

const curve1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
curve1.setAttribute("d", "M 0 70 Q 100 130 100 70");
curve1.setAttribute("stroke-width", "4");
curve1.setAttribute("fill", "url(#glass_tint)");
curve1.setAttribute("stroke", "#240212");

const curve2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
curve2.setAttribute("d", "M 200 70 Q 100 130 100 70");
curve2.setAttribute("stroke-width", "4");
curve2.setAttribute("fill", "url(#glass_tint)");
curve2.setAttribute("stroke", "#240212");

face.append(curve1, curve2);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
