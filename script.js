const button = document.querySelector('.btn');
const start = document.querySelector('.next');
const newQuiz = document.querySelector('.test');
const btnStart = document.querySelector('.btnStart');
const block = document.querySelectorAll('.block');
const container = document.querySelector('.container');
let timer = 1;
let amountTime = timer*60;


btnStart.addEventListener('click', function(){
    container.style.display = 'block';
        let timerID = setInterval(function(){
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;

        if(seconds<10){
            seconds = '0'+ seconds;
        }
        btnStart.textContent = `${minutes}:${seconds}`;
        amountTime--;
        if (amountTime<0){
            btnStart.textContent = '00:00';
            clearInterval(timerID);
         }

    },1000);



    
    let item =0; 
    block[item].style.display = 'block';
start.addEventListener('click', function(e){

    e.preventDefault();
   
   if(item<block.length-1){
    block[item].style.display = 'none';
    item++;
    block[item].style.display = 'block';
}

  if (item === block.length-1){
    start.style.display = 'none';
}

})


});

button.addEventListener('click', result);

function result(e){
    e.preventDefault();
    button.style.display = 'none';
    newQuiz.style.display = 'block';
    let score = 0;
    if(answer1.checked){
        score++;
    }
    if(answer2.checked){
        score++;
    }
    if(answer3.checked){
        score++;
    }
    if(answer4.checked){
        score++;
    }
    if(answer5.checked){
        score++;
    }
    if(answer6.checked){
        score++;
    }
    if(answer7.checked){
        score++;
    }
    if(answer8.checked){
        score++;
    }
    if(answer9.checked){
        score++;
    }
    if(answer10.checked){
        score++;
    }
    if (amountTime<=0){
        document.querySelector('.result').textContent = 'Ваше время вышло. Попробуйте еще раз';
    }
    else if(score>=8 && amountTime>0){
    document.querySelector('.result').textContent = 'Браво!!!Ваши балы: ' + score + ' из 10. Вы прекрасно знаете географию.';}
    else if(score>=6 && amountTime>0 ){
        document.querySelector('.result').textContent = 'Ваши балы: ' + score + ' из 10. Вы хорошо знаете географию';}
    else{
        document.querySelector('.result').textContent = 'Ваши балы: ' + score + ' из 10. Попробуйте еще раз.';}
    }

    newQuiz.addEventListener('click', function(){
        result();
    });


   gsap.to('.btnStart', {scale: 1.1, duration:.5 , repeat: -1 , yoyo:true })








   




    
   



