const $main = document.querySelector('.main');
const $heightinput = document.querySelector('.height');
const $weightinput = document.querySelector('.weight');
const $answerbtn = document.querySelector('.answerbtn');
const $state = document.querySelector('.state');
const $ment = document.querySelector('.ment');
const $hewespan = document.querySelector('.hewe') 



$answerbtn.addEventListener('click',e=>{

    const height = Number($heightinput.value);
    const weight = Number($weightinput.value);

    if(height > 0 && weight > 0){

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let status;
        let advice;

    if (bmi < 18.5) {
        status = " 저체중 ";
        advice = " 영양가 있는 식사와 함께 적절한 운동을 추천드립니다! "
    }else if (bmi < 24.9) {
        status = " 정상 ";
        advice = " 정말좋아요! 몸 관리를 잘하고 계시네요! "
    }else if ( bmi < 29.9){
        status = " 과체중 "
        advice = " 규칙적인 운동을 시작하고, 건강한 식습관을 가지시는걸 추천드립니다! "
    }else {
        status = " 비만 "
        advice = " 다이어트를 추천드리며 운동과 함께 식단을 잘 조절하세요! "
    }
    const hewe = `키 : ${$heightinput.value} cm |  몸무게 : ${$weightinput.value} kg `;
    $hewespan.textContent=hewe;
    $state.textContent = `${status} 입니다.`
    $ment.textContent = advice;


    $heightinput.value='';
    $weightinput.value='';
}else{
    alert('키와 몸무게를 입력해주세요.')
}
})

// time
function Clock() {
    let date = new Date();
    let hours = Time(date.getHours());
    let minutes = Time(date.getMinutes());

    Write( hours , minutes)

    function Time(num){
        return(num < 10 ? 'O'+num: ''+ num);
    }
    function Write(hours , minutes ){
        let Clock = document.getElementById("Clock");
        Clock.innerText = hours + ':' + minutes;
    }
}
setInterval(Clock,1000); // 1초마다 클락함수