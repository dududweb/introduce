const questionWrap = document.querySelectorAll(".panel-question");
const questionHeading = document.querySelectorAll(".panel-heading");
const answerContents = document.querySelectorAll(".panel-body");
const changeToggle = document.querySelectorAll(".panel-toggle");


for(let i = 0; i < questionWrap.length; i++){
  questionWrap[i].addEventListener("click", function(){
    for(let x =0; x<questionWrap.length; x++){
      questionWrap[x].classList.remove("active");
    }
    questionWrap[i].classList.add("active");
  });
}



// 1.보여지는 바디페이지를 hidden처리한다.

// 3.클릭되는 제목의, 바디부분에classList.remove(“hidden”)
// 4.다른 제목이 클릭되면 이전 열렸던 바디부분에 classList.add(“hidden”)
// 3번 함수 재실행.
