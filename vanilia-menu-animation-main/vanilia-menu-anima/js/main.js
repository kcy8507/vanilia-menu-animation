// 1. 마우스 오버되면 div.bottom-line가 옮겨다닌다.
// 2. a 너비값과 bottom-line 너비값을 동일하게 한다.
// (bottom-line 넓이값은 == menu a 넓이값)
// 3. transform translate로 수치만큼 이동한다.
// (넓이값, 1:94px, 2:57px, 3:107px, 4:57px, 5:98px)

// 1메뉴에 마우스 올리면 위치 0
// 이동값은 너비값

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");
let fifth = document.querySelector(".fifth");
let btmLine = document.querySelector(".bottom-line");

// first.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${0}px)`;
//   btmLine.style.width = `${first.offsetWidth}px`;
//   console.log(`1로 옵니다. 너비값은: ${first.offsetWidth}px, 이동값은: ${btmLine.style.transform}`);
// });
// second.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${94}px)`;
//   btmLine.style.width = `${second.offsetWidth}px`;
//   console.log(`2로 옵니다. 너비값은: ${second.offsetWidth}px, 이동값은: ${btmLine.style.transform}`);
// });
// third.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${151}px)`;
//   btmLine.style.width = `${third.offsetWidth}px`;
//   console.log(`3로 옵니다. 너비값은: ${third.offsetWidth}px, 이동값은: ${btmLine.style.transform}`);
// });
// fourth.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${258}px)`;
//   btmLine.style.width = `${fourth.offsetWidth}px`;
//   console.log(`4로 옵니다. 너비값은: ${fourth.offsetWidth}px, 이동값은: ${btmLine.style.transform}`);
// });
// fifth.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${315}px)`;
//   btmLine.style.width = `${fifth.offsetWidth}px`;
//   console.log(`5로 옵니다. 너비값은: ${fifth.offsetWidth}px, 이동값은: ${btmLine.style.transform}`);
// });

let aEls = document.getElementsByTagName("a");
let elArr = [...aEls];
console.log(aEls);
console.log(elArr);
elArr.forEach(function (el) {
  el.offsetWidth;
  console.log(el.offsetWidth);
});

let widthArr = elArr.map((el) => el.offsetWidth);
console.log(widthArr);

let maxEl = Math.max.apply(null, widthArr);
console.log(maxEl);

let aElsLength = aEls.length;

btmLine.style.offsetWidth = `${widthArr[1]}px`;
console.log(`초기 너비값: ${btmLine.style.offsetWidth}`);
let sumWidth;

for (let i = 0; i < aElsLength; i++) {
  aEls[i].addEventListener("mouseover", function () {
    btmLine.style.clipPath = `polygon(0 0, ${100 - (maxEl - aEls[i].offsetWidth)}px 0,
    ${100 - (maxEl - aEls[i].offsetWidth)}px 100%, 0% 100%)`;

    sumWidth += aEls[i].offsetWidth;
    btmLine.style.transform = `translateX(${sumWidth}px)`;

    console.log(`더한 값: ${sumWidth}`);
    console.log(`최대값에서 너비 뺀 값: ${maxEl - btmLine.style.offsetWidth}px`);
    console.log(`각각의 너비 값: ${aEls[i].offsetWidth}px`);
  });
}

// widthArr.forEach(function (menuIndex) {
//   menuIndex.addEventListener("mouseover", function () {
//     btmLine.style.clipPath = `polygon${100 - maxEl}%`;
//     // btmLine.style.offsetWidth = `width(${50}%)`;
//     // console.log(btmLine.offsetWidth);
//     console.log(`polygon${80}%`);
//   });
// });

// let maxEl = elArr.map((el) => el.offsetWidth);
// let test = [1, 2, 3, 4];
// let minVal = test.filter((el) => (el > 3 ? el : undefined));
// elArr.map((el, i) => console.log(el, i));
// elArr.map(function (el, i) {
//   let temp = el.offsetWidth;
//   maxEl = [...temp];
// });
// elArr.Math.max.apply(null, .offsetWidth);
// console.log(elems);

// elems.addEventListener("mouseover", function () {
//   btmLine.style.transform = `translateX(${94}px)`;
// });
