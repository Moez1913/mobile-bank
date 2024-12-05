document.getElementById('togl2').addEventListener('click',function(){
    const cashOut=document.getElementById('cash-out-area');
    const addMoney=document.getElementById('add-money-are')
    cashOut.classList.remove('hidden');
    addMoney.classList.add('hidden');

})

document.getElementById('togl1').addEventListener('click',function(){
    const cashOut=document.getElementById('cash-out-area');
    const addMoney=document.getElementById('add-money-are')
    cashOut.classList.add('hidden');
    addMoney.classList.remove('hidden');

})


document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault()
    const pass=document.getElementById('add-pass');
    const password=pass.value;
    const amount=document.getElementById('amount');
    const cash=amount.value;
    const totalCAsh=document.getElementById('total');
    const totalCashNum=parseFloat(totalCAsh.innerText);
    console.log(totalCAsh)
    if(cash.trim() === ''){
        alert('please Enter Amount')
       
    }
    else if(password !=='1234'){
        alert('Enter Correct password ')
    }
    else{
        const addMoney=totalCashNum+ parseFloat(cash)
        totalCAsh.innerText=addMoney
        
    }
pass.value='';
amount.value='';

})


document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault()
    const pass=document.getElementById('cash_out-pass');
    const password=pass.value;
    const amount=document.getElementById('co-amount');
    const cash=amount.value;
    const totalCash=document.getElementById('total');
    const totalCashNum=parseFloat(totalCash.innerText);
    
    if(cash.trim()===''){
        alert('Please Enter Amount')

    
    }
    else if(password!=='1234'){
        alert('Incorrect Password')
    }
    else{
        const subTotal=totalCashNum - parseFloat(cash)
        totalCash.innerText=subTotal
    }
pass.value='';
amount.value='';

})


