document.getElementById('login').addEventListener('click',function(event){
    event.preventDefault();
    const phon=document.getElementById('phone-number');
    const phone_numbr=phon.value;
    const pass=document.getElementById('password');
    const password=pass.value;
    if(password==='1234'){
        window.location.href="/bank.html";
    }
    else{
        alert('please enter right pass or phon')
    }

})


