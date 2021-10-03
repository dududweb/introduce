
//main
let open = document.getElementById('openMenu');
let sideSlide = document.getElementById('sideMenu');
let close = document.getElementsByClassName('close');
    
    
      open.addEventListener('click', function(){
       if(sideSlide.style.right == '-3000px'){
          sideSlide.style.right = 0;
          open.innerHTML = "<i class='fas fa-times'></i>";
       }
       else{
          sideSlide.style.right = '-3000px';
          open.innerHTML = "<i class='fas fa-bars'></i>";
       }
      })


//about
      let open = document.getElementById('openMenu');
      let sideSlide = document.getElementById('sideMenu');
      let close = document.getElementsByClassName('close');
      
        open.addEventListener('click', function(){
         if(sideSlide.style.right == '-3000px'){
            sideSlide.style.right = 0;
            open.innerHTML = "<i class='fas fa-times'></i>";
         }
         else{
            sideSlide.style.right = '-3000px';
            open.innerHTML = "<i class='fas fa-bars'></i>";
         }
        })
       
        let heading = document.getElementsByClassName('panel-heading'),
        question = document.getElementsByClassName('panel-question'),
        answer = document.getElementsByClassName('panel-body'),
        changeToggle = document.getElementsByClassName('panel-toggle');
                
  //제목을 클릭하면 할일
  
            for(var i = 0; i<heading.length; i++ ){
              heading[i].addEventListener('click', function(e){
                for(var x=0; x < question.length; x++){
                   question[x].classList.remove('active');
                   e.target.parentNode.classList.add('active');  // 어떤헤딩을 클릭한건지 알 수 있다.
                   activateBody();
                }
              });
            }
            function activateBody(){
              for(var j = 0; j<answer.length; j++){
                answer[j].style.display = 'none';
                let activePanel = document.querySelector('.panel-question.active .panel-body');
                activePanel.style.display = 'block';
              }
            }
            activateBody();
  