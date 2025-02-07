import  { header, footer, isLocal  }  from "/src/components/layout.js";
import { allProd } from "/src/services/product_data.js";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = Number(urlParams.get('id'));

    header("");
    footer();
    lucide.createIcons();

    document.addEventListener('DOMContentLoaded', ()=>{ 
        const findProd = allProd.find( prod => prod.id == productId );   
        if(productId && findProd){
            const form = document.querySelector('form');
            const productImg = document.getElementById('productImg');
            const productName = document.getElementById('productName');
            const productDescrip = document.getElementById('productDescrip');
            const productPrice = document.getElementById('productPrice');
            const minusBtn = document.getElementById('minusBtn');
            const quantity = document.getElementById('quantity');
            const plusBtn = document.getElementById('plusBtn');
            const sizeDropDown = document.getElementById('size');
            // if the place order is clicked without a current user or account
            const noAccount = document.getElementById('noAccount');
            const okayBtn = document.querySelector('#noAccount #okayBtn');
            
            const getProdInfo = allProd.find(prod => prod.id === productId);
            productImg.src = `/src/assets/product_image/${getProdInfo.imageUrl}`;
            productName.innerText = getProdInfo.name;
            document.title +=  ` ${getProdInfo.name}`;
            productDescrip.innerText = getProdInfo.description;
            productPrice.innerText = `PHP ${getProdInfo.price.toFixed(2)}`;

            getProdInfo.sizeOptions.forEach(size =>{
                const option = document.createElement('option');
                option.id =  size.size;
                option.innerText = size.size;
                sizeDropDown.appendChild(option);
            });

            sizeDropDown.addEventListener('change', ()=>{
                const sizePrice =  getProdInfo.sizeOptions.find( size => size.size == sizeDropDown.value);
                productPrice.innerText = `PHP ${sizePrice.price.toFixed(2)}`;
            });
            
            minusBtn.addEventListener('click', ()=>{   
                if(quantity.value > 0){
                    --quantity.value;
                
                } else {
                    quantity.value = 0
                }
            });

            quantity.addEventListener('input', () => {
                if (quantity.value <= 0) {
                    quantity.value = 0; 
                }
            });

            plusBtn.addEventListener('click', ()=>{
                ++quantity.value;
            });

            form.onsubmit = (e)=>{
                e.preventDefault();
                const email = localStorage.getItem('currentUserEmail');
                const userQuantity = parseInt(quantity.value) ;
                const prodPrice = getProdInfo.sizeOptions.find(size=> size.size == sizeDropDown.value);
                const userCart = { userEmail: email, productId: productId,quantity:userQuantity, productSize: sizeDropDown.value, productPrice: prodPrice.price};

                const cart = JSON.parse(localStorage.getItem('userCart')) || [];

                // check if product with the same size exist in the user cart
                const existingProd = cart.find(cartItem =>
                    cartItem.userEmail === email && Number(cartItem.productId) ===productId && cartItem.productSize === sizeDropDown.value
                );

                if(!email || email == null || email == 'null'){
                    noAccount.classList.replace('hidden','flex');
                }else if(existingProd){
                // Update the cart item quantity if product with the same size exist
                      existingProd.quantity =  parseInt(existingProd.quantity) + parseInt(quantity.value);
                      localStorage.setItem('userCart', JSON.stringify(cart));
                      window.location.href = '/cart';
                } else {
                    cart.push(userCart);
                    localStorage.setItem('userCart', JSON.stringify(cart));
                    window.location.href = '/cart';
                } 

                okayBtn.addEventListener('click', ()=>{
                    noAccount.classList.replace('flex','hidden');
                });
               
            }
        } else {
            window.location.href = isLocal? "/src/pages/coastal_creations.html": "/coastal-creations";
        }
    });