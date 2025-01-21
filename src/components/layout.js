export function head(title){
    
    const head = document.querySelector('head');

    head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azure Waves Café | ${title}</title>
    <link rel="shortcut icon" href="/src/assets/logo/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="/tailwind.css"> `;
}

export function header(page){
    const header = document.querySelector('header');

    const img = document.createElement('img');
    img.src = '/src/assets/logo/azure_waves.png';
    img.classList.add('w-[200px]');

    header.appendChild(img)

    const nav = document.createElement('nav');
    nav.classList.add('flex', 'justify-center', 'flex-1', 'gap-8');
    page == 'Ocean Breeze'? nav.innerHTML += `<a href="/index.html" class='font underline'>Ocean Breeze</a>`: nav.innerHTML += `<a href="/index.html">Ocean Breeze</a>`;

    page == 'Coastal Creations'? nav.innerHTML += `<a href="/src/pages/coastal_creations.html" class='underline'>Coastal Creations</a>`: nav.innerHTML += `<a href="/src/pages/coastal_creations.html">Coastal Creations</a>`;

    header.appendChild(nav);

    const div = document.createElement('div');
    div.classList.add('text-customCream','w-[200px]', 'flex', 'justify-center', 'item-center');

    div.innerHTML = '';
    const currentUserEmail = localStorage.getItem("currentUserEmail");

    if(currentUserEmail == 'null'){
       
        const a = document.createElement('a');
        a.classList.add('cursor-pointer','bg-customBlue', 'w-fit', 'text-center',  'py-2', 'px-4','rounded-sm','text-sm');
        a.innerHTML = 'Login';
        a.href = "/src/pages/login.html";
    
        div.appendChild(a);
    }else{
        div.classList.add('gap-2');
        const a1 = document.createElement('a');
        a1.href = "/src/pages/cart.html";
            const i1 = document.createElement('i');
            i1.classList.add('size-5');
            i1.setAttribute('data-lucide', 'shopping-bag');
            a1.appendChild(i1);
        div.appendChild(a1);
        const a2 = document.createElement('a');
        a2.href = "/src/pages/account.html";
            const i2 = document.createElement('i');
            i2.classList.add('size-5');
            i2.setAttribute('data-lucide', 'user-round');
            a2.appendChild(i2);
        div.appendChild(a2);
        
    }
   
    header.appendChild(div);

}

export function footer(){
    const footer = document.querySelector('footer');
    const footerLogoImg = document.createElement('img');
    footerLogoImg.classList.add('w-28');
    footerLogoImg.src = '/src/assets/logo/logo.png';
    
    footer.appendChild(footerLogoImg);
    
    footer.innerHTML += `
                <div class="flex flex-col gap-1 text-sm ">
                    <p class="text-lg  font-medium">Address</p>
                    <p class="text-[12px]">Azure Wave Café <br> 123 Seaside Boulevard <br> Coastal Town, CT 56789</p>
                </div>
                <div class="flex flex-col gap-1 text-sm">
                    <p class="text-lg font-medium">Contact</p>
                    <p class="text-[12px]">+639234567891 <br> azureWavesCafe@gmail.com</p>
                </div>`;
}