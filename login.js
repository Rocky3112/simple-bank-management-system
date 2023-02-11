document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;

    console.log(email, password);

    if(email == 'rocky@babu.com' && password == 'rocky')
    {
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid ');
    }
})