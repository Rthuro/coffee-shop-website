
import  { header, footer , isLocal }  from "/src/components/layout.js";
import  { coffeeProducts , cookieProducts }  from "/src/services/product_data.js";

header('Ocean Breeze');
footer();
lucide.createIcons();

const heroBtn = document.getElementById('heroBtn');
const coffeeProdContainer = document.getElementById('coffeeProdContainer');
const cookieProdContainer = document.getElementById('cookieProdContainer');

heroBtn.href = isLocal ? "/src/pages/coastal_creations.html": "/coastal-creations";

coffeeProducts.forEach( (coffee)=>{
    const div = document.createElement('div');
    div.classList.add('max-w-[300px]','h-fit', 'flex', 'flex-col', 'items-center', 'gap-2','cursor-pointer','overflow-hidden');
    div.id = coffee.id;
    const img = document.createElement('img');
    img.classList.add('max-h-[300px]', 'hover:scale-105', 'ease-in','duration-200');
    img.src = `/src/assets/product_image/${coffee.imageUrl}`;
    div.appendChild(img);

    const name  = document.createElement('p');
    name.classList.add('font-medium', 'select-none', 'text-center');
    name.innerHTML = coffee.name.toLocaleUpperCase();
    div.appendChild(name);

    const price  = document.createElement('p');
    price.classList.add('font-light', 'text-sm', 'select-none');
    price.innerHTML = `PHP ${coffee.price.toFixed(2)}`;
    div.appendChild(price);

    
    coffeeProdContainer.appendChild(div);

    div.addEventListener('click', ()=>{
        window.location.href = isLocal? `/src/pages/view_product.html?id=${coffee.id}`: `/view-product?id=${coffee.id}`
    });
});

cookieProducts.forEach( (cookie)=>{
    const div = document.createElement('div');
    div.classList.add('max-w-[300px]','h-fit', 'flex', 'flex-col', 'items-center', 'gap-2','cursor-pointer','overflow-hidden');
    div.id = cookie.id;
    const img = document.createElement('img');
    img.classList.add('max-h-[300px]', 'hover:scale-105', 'ease-in','duration-200');
    img.src = `./src/assets/product_image/${cookie.imageUrl}`;
    div.appendChild(img);

    const name  = document.createElement('p');
    name.classList.add('font-medium', 'select-none', 'text-center');
    name.innerHTML = cookie.name.toLocaleUpperCase();
    div.appendChild(name);

    const price  = document.createElement('p');
    price.classList.add('font-light', 'text-sm', 'select-none');
    price.innerHTML = `PHP ${cookie.price.toFixed(2)}`;
    div.appendChild(price);

    
    cookieProdContainer.appendChild(div);

    div.addEventListener('click', ()=>{
       window.location.href = isLocal? `/src/pages/view_product.html?id=${cookie.id}`: `/view-product?id=${cookie.id}`
    });
});

