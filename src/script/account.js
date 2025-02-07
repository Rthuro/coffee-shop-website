import { header, footer } from "/src/components/layout.js";
    document.addEventListener('DOMContentLoaded', ()=>{
        const currentUser = localStorage.getItem('currentUserEmail');
        if(currentUser == "null" || currentUser == null || !currentUser){
        window.location.href = "/index.html";
        } else {
            header('Account');
            footer();
            lucide.createIcons();
            const accEmail = document.getElementById('accEmail');
            const logOut = document.getElementById('logOut');
            const deleteAcc = document.getElementById('deleteAcc');
            accEmail.innerHTML = localStorage.getItem("currentUserEmail");

            logOut.addEventListener('click', ()=>{
                // Set the currentUserEmail and currentUserPass to null
                localStorage.setItem('currentUserEmail',null);
                localStorage.setItem('currentUserPass',null);
                window.location.href = "/index.html";
            });

            deleteAcc.addEventListener('click',()=>{
             
                const users = JSON.parse(localStorage.getItem('users'));
                const userCart = JSON.parse(localStorage.getItem('userCart'));
                
                // Exclude the user from users 
                const delUser = users.filter(user => user.email !== currentUser);
                localStorage.setItem('users', JSON.stringify(delUser));

                // Exclude the user cart item from userCart 
                const removeDelUserCart = userCart.filter( item => item.userEmail !== currentUser);
                localStorage.setItem('userCart', JSON.stringify(removeDelUserCart));

                // Set the currentUserEmail and currentUserPass to null
                localStorage.setItem('currentUserEmail',null);
                localStorage.setItem('currentUserPass',null);

                window.location.href = "/index.html";
            });
        }
    });