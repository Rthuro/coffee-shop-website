    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const showPassword = document.getElementById('showPassword');
    const password = document.getElementById('password');
    const showConfirmPassword = document.getElementById('showConfirmPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPassErr = document.getElementById('confirmPassErr');
    const signUpErr = document.getElementById('signUpErr');

    showPassword.addEventListener('change', ()=>{
        password.type = showPassword.checked ? 'text' : 'password';
    });

    showConfirmPassword.addEventListener('change', ()=>{
        confirmPassword.type = showConfirmPassword.checked ? 'text' : 'password';
    });

    email.addEventListener('input', ()=>{
        email.style.borderColor = email.value == ''? 'red':'#284961';
    });
    password.addEventListener('input', ()=>{
        password.style.borderColor = password.value == ''? 'red':'#284961';
    });
    confirmPassword.addEventListener('input', ()=>{
        confirmPassword.style.borderColor = confirmPassword.value == ''? 'red':'#284961';
    });

    form.onsubmit = (e)=>{
        e.preventDefault();

        if(email.value !== '' && password.value !== '' && confirmPassword !== ''){
            if(password.value == confirmPassword.value){
                 // convert string to object using JSON.parse
                const checkIfUserExists = JSON.parse(localStorage.getItem('users'));

                if(checkIfUserExists){
                    for(let i =0; i < checkIfUserExists.length; i++){

                        if(checkIfUserExists[i].email == email.value && checkIfUserExists[i].password == password.value){
                            signUpErr.innerHTML = 'User already exists.';
                            break;
                        }else{
                            
                            const user ={ email: email.value,
                                password:password.value, };
                            
                            //If no users exist, initialized an empty array
                            const users = JSON.parse(localStorage.getItem('users')) || [];
                            users.push(user);

                            localStorage.setItem('users', JSON.stringify(users));
                            window.location.href = './login.html';
                            break;
                        }
                    }
                }else{
                            const user ={ email: email.value,
                                password:password.value, };
                            
                            //If no users exist, initialized an empty array
                            const users = JSON.parse(localStorage.getItem('users')) || [];
                            users.push(user);

                            localStorage.setItem('users', JSON.stringify(users));
                            window.location.href = './login.html';
                        }
                
                
            } else {
                confirmPassErr.innerHTML = 'Password and confirm password do not match.';
            } 
        } else {
            email.style.borderColor = email.value == ''? 'red':'#284961';
            password.style.borderColor = password.value == ''? 'red':'#284961';
            confirmPassword.style.borderColor = confirmPassword.value == ''? 'red':'#284961';
        }
    }
