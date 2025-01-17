
head('Ocean Breeze');
header('Ocean Breeze');
lucide.createIcons();


const coffeeProdContainer = document.getElementById('coffeeProdContainer');
const cookieProdContainer = document.getElementById('cookieProdContainer');

coffeeProducts.forEach( (coffee)=>{
    const div = document.createElement('div');
    div.classList.add('max-w-[300px]','h-fit', 'flex', 'flex-col', 'items-center', 'gap-2','cursor-pointer');
    div.id = coffee.id;
    const img = document.createElement('img');
    img.classList.add('h-[70%]', 'hover:scale-105', 'ease-in','duration-200');
    img.src = `./src/assets/product_image/${coffee.imageUrl}`;
    div.appendChild(img);

    const name  = document.createElement('p');
    name.classList.add('font-medium', 'select-none');
    name.innerHTML = coffee.name.toLocaleUpperCase();
    div.appendChild(name);

    const price  = document.createElement('p');
    price.classList.add('font-light', 'text-sm', 'select-none');
    price.innerHTML = `PHP ${coffee.price.toFixed(2)}`;
    div.appendChild(price);

    
    coffeeProdContainer.appendChild(div);
});

cookieProducts.forEach( (cookie)=>{
    const div = document.createElement('div');
    div.classList.add('max-w-[300px]','h-fit', 'flex', 'flex-col', 'items-center', 'gap-2','cursor-pointer');
    div.id = cookie.id;
    const img = document.createElement('img');
    img.classList.add('h-[70%]', 'hover:scale-105', 'ease-in','duration-200');
    img.src = `./src/assets/product_image/${cookie.imageUrl}`;
    div.appendChild(img);

    const name  = document.createElement('p');
    name.classList.add('font-medium', 'select-none');
    name.innerHTML = cookie.name.toLocaleUpperCase();
    div.appendChild(name);

    const price  = document.createElement('p');
    price.classList.add('font-light', 'text-sm', 'select-none');
    price.innerHTML = `PHP ${cookie.price.toFixed(2)}`;
    div.appendChild(price);

    
    cookieProdContainer.appendChild(div);
});