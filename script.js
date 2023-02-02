const titles = [
  "MAC @UOW",
  "Web Developer",
  "Software Developer",
  "Computer Engineer",
  "Content Writer",
];

window.onload = () => {
  //console.log("loaded");
  title();
};

const title = () => {
  let title_ = document.getElementById("title");
  //console.log(title_);
  sequence(titles, title_,1200);
};

const sequence = (arr, htmlEle, time) => {
  let i = 0;
  htmlEle.innerHTML = "";
  setInterval(() => {
    if (i >= arr.length) {
      i = 0;
    }
    let html = arr[i++];
    htmlEle.innerHTML = html;
  }, time);
};