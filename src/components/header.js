
function header(page){
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

    const a = document.createElement('a');
    a.classList.add('cursor-pointer','bg-customBlue', 'w-fit', 'text-center',  'py-2', 'px-4','rounded-sm','text-sm');
    a.href = '/src/pages/login.html';
    a.innerHTML = 'Login';
    div.appendChild(a);

    header.appendChild(div);

}