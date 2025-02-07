
    import { isLocal } from "/src/components/layout.js";
    const form = document.querySelector('form');
    const confirmLogin = document.getElementById('confirmLogin');
    const email = document.getElementById('email');
    const showPassword = document.getElementById('showPassword');
    const password = document.getElementById('password');
    const signupBtn = document.getElementById('signupBtn');

    signupBtn.href = isLocal ? "/src/pages/signup.html": "/signup";
    email.addEventListener('input', ()=>{   
        email.style.borderColor = email.value == ''? 'red':'#284961';
    });
    password.addEventListener('input', ()=>{
        password.style.borderColor = password.value == ''? 'red':'#284961';
    });
    showPassword.addEventListener('change', ()=>{
        password.type = showPassword.checked ? 'text' : 'password';
    });

    form.onsubmit = (e)=>{
        e.preventDefault();

        if(!email.value == '' && !password.value == '' ){
            const users = JSON.parse(localStorage.getItem('users'));

            if(users){
                const checkUser = users.find(user => user.email == email.value && user.password == password.value);
                const incorrectPass = users.find(user => user.email == email.value && user.password != password.value);

                if(checkUser){
                    localStorage.setItem('currentUserEmail',email.value);
                    localStorage.setItem('currentUserPass',password.value);
                    window.location.href = '/ocean-breeze';
                    window.location.href =isLocal ? '/index.html' : '/ocean-breeze';
                } else if(incorrectPass){
                    confirmLogin.innerText = 'Wrong password.';
                }else{
                    confirmLogin.innerText = 'User not found.';
                }
               
            }else{
                confirmLogin.innerText = 'User not found.';
            }

        
        } else {
            email.style.borderColor = email.value == ''? 'red':'#284961';
            password.style.borderColor = password.value == ''? 'red':'#284961';
        }
    }
