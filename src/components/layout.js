
export function header(page){
    const header = document.querySelector('header');

    const hamburger = document.createElement('button');
    hamburger.id = 'hamburgerMenu' ;
    hamburger.classList.add('md:hidden','xs:flex','w-[70px]');
    const hamburgerIcon = document.createElement('i');
    hamburgerIcon.setAttribute('data-lucide','menu');
    hamburgerIcon.setAttribute('stroke','#284961');
    hamburger.appendChild(hamburgerIcon);
    header.appendChild(hamburger);

    const img = document.createElement('img');
    img.src = '/src/assets/logo/azure_waves.png';
    img.classList.add('sm:w-[200px]','xs:w-[150px]');

    header.appendChild(img)

    const nav = document.createElement('nav');
    nav.id = "mainNav";
    nav.classList.add('flex', 'justify-center', 'flex-1', 'gap-8', 'xs:hidden','md:flex');

    const navLinks = [
        { 
            link:"/index",
            text: "Ocean Breeze"
        },
        {
            link:"/coastal-creations",
            text: "Coastal Creations"
        }

    ];

    navLinks.forEach(linkData =>{
        const a = document.createElement('a');
        a.innerText = linkData.text;
        a.href = linkData.link;
        page == linkData.text? a.classList.add('underline'):a.classList.remove('underline') ;
        nav.appendChild(a);
    });

    header.appendChild(nav);

    const div = document.createElement('div');
    div.classList.add('text-customCream','md:w-[200px]','xs:w-[70px]', 'flex', 'justify-end', 'item-center');

    div.innerHTML = '';
    const currentUserEmail = localStorage.getItem("currentUserEmail");

    if(currentUserEmail == 'null' || currentUserEmail == null || !currentUserEmail){
       
        const a = document.createElement('a');
        a.classList.add('cursor-pointer','bg-customBlue', 'w-fit', 'text-center',  'sm:py-2','xs:py-1', 'sm:px-4','xs:px-2','rounded-sm','text-sm','self-end');
        a.innerHTML = 'Login';
        a.href = "/login";
    
        div.appendChild(a);
    }else{
        div.classList.add('gap-2');
        const a1 = document.createElement('a');
        a1.href = "/cart";
            const i1 = document.createElement('i');
            i1.classList.add('size-5');
            i1.setAttribute('data-lucide', 'shopping-bag');
            a1.appendChild(i1);
        div.appendChild(a1);
        const a2 = document.createElement('a');
        a2.href = "/account";
            const i2 = document.createElement('i');
            i2.classList.add('size-5');
            i2.setAttribute('data-lucide', 'user-round');
            a2.appendChild(i2);
        div.appendChild(a2);
        
    }
   
    header.appendChild(div);

    const mobileNav = document.createElement('nav');
    mobileNav.id = 'mobileNav';
    mobileNav.classList.add('hidden', 'fixed', 'flex-col', 'gap-3', 'py-6', 'top-[100px]', 'border-t', 'border-customBlue', 'left-0', 'bottom-0', 'bg-customCream', 'z-50', 'origin-left', 'duration-200', 'right-0', 'animate-appear');

    const mobileHeaderLinks = [
        {
            link: "/ocean-breeze",
            text: "Ocean Breeze"
        },
        {
            link: "/coastal-creations",
            text: "Coastal Creations"
        }];
    
        mobileHeaderLinks.forEach(linkData => {
            const link = document.createElement('a');
            link.href = linkData.href;
            link.classList.add('border-b', 'border-customBlue/60', 'pb-3', 'px-3');
            link.textContent = linkData.text;
            mobileNav.appendChild(link);
        });

    header.appendChild(mobileNav);

    const showMobileNav = document.getElementById('mobileNav');
    const hamburgerBtn = document.getElementById('hamburgerMenu');
    hamburgerBtn.addEventListener('click',()=>{
        if(hamburgerBtn.style.display = 'flex'){
            showMobileNav.style.display = showMobileNav.style.display == 'flex'? 'none':'flex';
        }
    });

}

export function footer() {
    const footer = document.querySelector('footer');

    const img = document.createElement('img');
    img.src = '/src/assets/logo/logo.png';
    img.classList.add('sm:w-28', 'xs:w-20');
    footer.appendChild(img);

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('flex', 'flex-col', 'gap-1', 'sm:text-[12px]', 'xs:text-[10px]');
    addressDiv.innerHTML = `
        <p class="sm:text-lg xs:text-sm font-medium">Address</p>
        <p>Azure Wave Café <br> 123 Seaside Boulevard <br> Coastal Town, CT 56789</p>
    `;
    footer.appendChild(addressDiv);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('flex', 'flex-col', 'gap-1', 'sm:text-[12px]', 'xs:text-[10px]');
    contactDiv.innerHTML = `
        <p class="sm:text-lg xs:text-sm font-medium">Contact</p>
        <p>+639234567891 <br> azureWavesCafe@gmail.com</p>
    `;
    footer.appendChild(contactDiv);
}