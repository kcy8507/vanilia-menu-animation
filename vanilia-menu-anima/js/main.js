let imgBtn1 = document.querySelector(".img--1");

prevBtn.addEventListener("click", function () {

  console.log("click");
  if (imgIndex == 2) {
    container.style.transform = `translateX(${-100}vw)`;
    imgIndex -= 1;
    console.log("2페이지로 가겠습니다");
  } else if (imgIndex == 1) {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex -= 1;
    console.log("1페이지로 가겠습니다");
  } else {
    container.style.transform = `translateX(${0}vw)`;
    imgIndex = 0;
    console.log("0페이지입니다");
  }

  console.log(imgIndex);
});
