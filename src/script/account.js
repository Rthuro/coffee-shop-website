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
                localStorage.setItem('currentUserEmail',null);
                localStorage.setItem('currentUserPass',null);
                window.location.href = "/index.html";
            });
        }
    });