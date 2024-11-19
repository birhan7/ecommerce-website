const bar = document.getElementById('bars');
const close = document.getElementById('close');
const navigation = document.getElementById('mb-nav');
if(bar){
    bar.onclick = function (){
        navigation.classList.add('activated')
    }
}
if(close){
    close.onclick = function (){
    navigation.classList.remove('activated');
    }
}

