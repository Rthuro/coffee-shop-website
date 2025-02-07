import  { header, footer  }  from "/src/components/layout.js";
import  { allProd }  from "/src/services/product_data.js";

header('Coastal Creations');
footer();
lucide.createIcons();
const allProdContainer = document.getElementById('allProdContainer');
const noResultMsg = document.querySelector('main p');
const search = document.getElementById('search');
const form = document.querySelector('form');
let result = 0;

function prod(search){
    allProdContainer.innerHTML = '';
    noResultMsg.innerHTML = '';
    result = 0;

    allProd.forEach(prod => {
    // Display all products if no search term is entered, 
    // or filter products that match the search query (case-insensitive).
        if (search === '' || prod.name.toLowerCase().includes(search.toLowerCase())
          ){
            const div = document.createElement('div');
            div.classList.add('max-w-[300px]','h-fit', 'flex', 'flex-col', 'items-center', 'gap-2','cursor-pointer','overflow-hidden');
            div.id = prod.id;
            const img = document.createElement('img');
            img.classList.add('max-h-[300px]', 'hover:scale-105', 'ease-in','duration-200');
            img.src = `/src/assets/product_image/${prod.imageUrl}`;
            div.appendChild(img);

            const name  = document.createElement('p');
            name.classList.add('font-medium', 'select-none','text-center');
            name.innerHTML = prod.name.toLocaleUpperCase();
            div.appendChild(name);

            const price  = document.createElement('p');
            price.classList.add('font-light', 'text-sm', 'select-none');
            price.innerHTML = `PHP ${prod.price.toFixed(2)}`;
            div.appendChild(price);

            allProdContainer.appendChild(div);

            div.addEventListener('click', ()=>{
            window.location.href = `/src/pages/view_product.html?id=${prod.id}`
            });

            result++;
        } 

        
    });


}


prod(search.value);

form.onsubmit = (e)=>{
        e.preventDefault();
        prod(search.value);
        if(result == 0){
            noResultMsg.innerHTML = `No product name "${search.value}"`;
        }
};