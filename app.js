(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
     // console.log(buttons);
    let equal = document.querySelector('.btn-equal');
    // console.log(equal);
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click',function(e){
        //console.log(screen.value);
        if(screen.value ===''){
            screen.value ='Please Inter........';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click',function(){
        screen.value = "";
    })
})();