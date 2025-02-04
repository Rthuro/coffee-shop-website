import { header, footer } from "/src/components/layout.js";
import { allProd } from "/src/services/product_data.js";


const tbody = document.querySelector('table tbody');
const total = document.getElementById('total');
// For checkout
const emptyCartCheckout = document.getElementById('emptyCartCheckout');
const okayBtn = document.querySelector('#emptyCartCheckout #okayBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkOutModalContainer');
const checkoutDisplayItems = document.querySelector('#checkOutModalContainer #items');
const checkOutNoBtn = document.querySelector('#checkOutModalContainer #noBtn');
const checkOutYesBtn = document.querySelector('#checkOutModalContainer #yesBtn');
const checkOutAmount = document.querySelector('#checkOutModalContainer #checkOutAmt');
// For Receipt
const receiptModal = document.getElementById('receiptModal');
const receipt = document.querySelector('#receiptModal #receipt');
const closeReceiptModal = document.querySelector('#receiptModal #closeReceiptModal');
const receiptItems = document.querySelector('#receiptModal #receiptItems');
const dlReceipt = document.querySelector('#receiptModal #dlReceipt');
const receiptAmt = document.querySelector('#receiptModal #receipt #receiptAmt');
const receiptOrderNum = document.querySelector('#receiptModal #receipt #orderNumber');
const receiptDate = document.querySelector('#receiptModal #receipt #receiptDateTime #date');
const receiptTime = document.querySelector('#receiptModal #receipt #receiptDateTime #time');



function checkCart(cart){
    const emptyCartMsg = document.getElementById('emptyCartMsg');
    let totalAmt = 0;
    if(cart && cart.length > 0){
        if(emptyCartMsg){
            emptyCartMsg.classList.add('hidden');
        }

        cart.forEach(items => {
           const prod = allProd.find(prod => items.productId == prod.id);

           if(prod){
                createCartItem(prod, items);
                totalAmt += items.productPrice * items.quantity;
           }
        });

        total.innerText = `Total: PHP ${totalAmt}`;
       
    }else{
        emptyCartMsg.classList.remove('hidden');

    }
    lucide.createIcons();
}

function updateAmount(quantity, price, displayAmount, prodId, prodSize){
    let updatedAmount = 0;
    displayAmount.innerHTML = `PHP ${quantity * price}`;
    const cart = JSON.parse(localStorage.getItem('userCart'));
    const updateCartItem = cart.find( item => item.productId == prodId && item.productSize == prodSize && item.userEmail == localStorage.getItem('currentUserEmail'));
    updateCartItem.quantity = quantity;

    localStorage.setItem('userCart', JSON.stringify(cart));
    cart.forEach(item =>{
        updatedAmount += item.productPrice * item.quantity;
    });

    total.innerText = `Total: PHP ${updatedAmount}`;
}

function deleteProduct(prodId, name, size,quantity){
    const delModalContainer = document.getElementById('delModalContainer');
    const delMsg = document.getElementById('delMsg');
    const noDelBtn = document.querySelector('#delModalContainer #noDelBtn');
    const yesDelBtn = document.querySelector('#delModalContainer #yesDelBtn');
    delModalContainer.classList.replace('hidden', 'flex');

    delMsg.innerText = `Do you want to remove [ ${name + ' ' + size + ' ' + quantity}x ] ?`;

    noDelBtn.addEventListener('click', ()=>{
      delModalContainer.classList.replace('flex', 'hidden');
    });

    yesDelBtn.addEventListener('click',()=>{
        const cart = JSON.parse(localStorage.getItem('userCart'));
        const excludeDelItem =  cart.filter(item => !(item.productId == prodId && item.productSize == size && item.userEmail == localStorage.getItem('currentUserEmail'))  ); 

        localStorage.setItem('userCart', JSON.stringify(excludeDelItem));
        delModalContainer.classList.replace('flex', 'hidden');
        window.location.href = "/src/pages/cart.html";
    });

}

function createCartItem(cartProdInfo, prod){
    
    const tr = document.createElement('tr');
    

    const product = document.createElement('td');
    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('flex','items-center', 'justify-start');
    const productImg = document.createElement('img');
    productImg.src = `/src/assets/product_image/${cartProdInfo.imageUrl}`;
    productImg.classList.add('rounded-sm', 'h-[60px]');
    productInfoContainer.appendChild(productImg);
    const productName = document.createElement('a');
    productName.classList.add('text-wrap','word-wrap');
    productName.innerText = `${cartProdInfo.name} (${prod.productSize})`;
    productName.href = `view_product.html?id=${prod.productId}`;
    productInfoContainer.appendChild(productName);

    product.appendChild(productInfoContainer);
    tr.appendChild(product);

    const userProdQuant = document.createElement('td');
    const div = document.createElement('div');
    div.classList.add('flex', 'items-center', 'justify-center');
        const minusButton = document.createElement('button');
        minusButton.setAttribute('type', 'button');
        minusButton.id = 'minusBtn';
        minusButton.classList.add('px-2','border','border-gray-200','py-[6px]');
            const minusIcon = document.createElement('i');
            minusIcon.setAttribute('data-lucide','minus');
            minusIcon.setAttribute('stroke','#6b7280');
            minusIcon.classList.add('size-3');
            minusButton.appendChild(minusIcon);
    div.appendChild(minusButton);
    userProdQuant.appendChild(div);

    const quantityInput = document.createElement('input');
    quantityInput.classList.add('w-10','py-1', 'px-1',  'bg-transparent', 'border', 'focus:outline-none' ,'text-center','rounded-none');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('min', '1');
    quantityInput.id = 'quantity';
    quantityInput.value = prod.quantity;
    div.appendChild(quantityInput);
        const plusButton = document.createElement('button');
        plusButton.setAttribute('type', 'button');
        plusButton.id = 'plusBtn';
        plusButton.classList.add('px-2','border','border-gray-200','py-[6px]');
            const plusIcon = document.createElement('i');
            plusIcon.setAttribute('data-lucide','plus');
            plusIcon.setAttribute('stroke','#6b7280');
            plusIcon.classList.add('size-3');
            plusButton.appendChild(plusIcon);
        div.appendChild(plusButton);

    const userProdPrice = document.createElement('td');
    userProdPrice.classList.add('text-center');
    const amount = document.createElement('p');
    amount.innerHTML = `PHP ${prod.productPrice * prod.quantity}`;
    userProdPrice.appendChild(amount);

    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add( 'flex', 'mx-auto');
    const deleteIcon = document.createElement('i');
            deleteIcon.setAttribute('data-lucide','trash-2');
            deleteIcon.setAttribute('stroke','#FF0000');
            deleteIcon.classList.add('size-4');
            deleteBtn.appendChild(deleteIcon);
    deleteTd.appendChild(deleteBtn);

    tr.appendChild(userProdQuant);
    tr.appendChild(userProdPrice);
    tr.appendChild(deleteTd);
    tbody.appendChild(tr);


minusButton.addEventListener('click', ()=>{   
            if(quantityInput.value <= 1){
                quantityInput.value = 1;
            
            } else {
                --quantityInput.value;
            }
            updateAmount(quantityInput.value, prod.productPrice, amount, prod.productId,prod.productSize);
        });

quantityInput.addEventListener('input', () => {
            if (quantityInput.value <= 0) {
                quantityInput.value = 1; 
            }
            updateAmount(quantityInput.value, prod.productPrice, amount, prod.productId,prod.productSize);
        });
quantityInput.addEventListener('change', ()=>{
            updateAmount(quantityInput.value, prod.productPrice, amount, prod.prodId,prod.productSize);
        });

plusButton.addEventListener('click', ()=>{
            ++quantityInput.value;
            updateAmount(quantityInput.value, prod.productPrice, amount, prod.productId,prod.productSize);
        });
deleteBtn.addEventListener('click', ()=>{
    deleteProduct(prod.productId,cartProdInfo.name,prod.productSize,prod.quantity);
});

    
}

function displayCheckOutItems(cartProdInfo, productName){
    const li = document.createElement('li');
    li.classList.add('py-1', 'flex','justify-between','items-center');
    li.innerText = `${cartProdInfo.quantity}X  ${productName} (${cartProdInfo.productSize}) `;
    const p = document.createElement('p');
    p.innerText = `PHP ${cartProdInfo.productPrice}`;
    li.appendChild(p);
    checkoutDisplayItems.appendChild(li);
    
}

function createReceipt(cartProdInfo,productName){
    const li = document.createElement('li');
    li.classList.add('py-1', 'flex','justify-between','items-center');
    li.innerText = `${cartProdInfo.quantity}X  ${productName} (${cartProdInfo.productSize}) `;
    const p = document.createElement('p');
    p.innerText = `PHP ${cartProdInfo.productPrice}`;
    li.appendChild(p);
    receiptItems.appendChild(li);
}

function clearList(parentElement){
    // clear list in the checkout and receipt modal
    const list = parentElement.querySelectorAll('li'); 
            if( list.length > 0){
                list.forEach(item =>{
                item.remove();
                });
          } 
}

document.addEventListener('DOMContentLoaded', ()=>{
    const currentUser = localStorage.getItem('currentUserEmail') ;
    if(currentUser == "null" || currentUser == null || !currentUser){
    window.location.href = "/index.html";
    } else {
        header('Cart');
        footer();
        
        const cart = JSON.parse(localStorage.getItem('userCart')) || [];
        checkCart(cart.filter( items => items.userEmail == localStorage.getItem('currentUserEmail')));

        okayBtn.addEventListener('click', ()=>{
            emptyCartCheckout.classList.replace('flex','hidden');
        });

        checkoutBtn.addEventListener('click', ()=>{
            if(cart && cart.length <= 0){
                    emptyCartCheckout.classList.replace('hidden','flex');
            }else{
                    checkoutModal.classList.replace('hidden','flex');
                    const getUpdatedCart = JSON.parse(localStorage.getItem('userCart'));
                    let totalAmt = 0;
                    getUpdatedCart.forEach(items =>{
                        const prodInfo = allProd.find(product => items.productId == product.id);
                        displayCheckOutItems(items, prodInfo.name);
                        totalAmt += items.productPrice * items.quantity;
                    });
                    checkOutAmount.innerText = `Total: PHP ${totalAmt}`;
                }
        });

        checkOutNoBtn.addEventListener('click', ()=>{
            checkoutModal.classList.replace('flex','hidden');
            clearList(checkoutModal);
        }); 

        checkOutYesBtn.addEventListener('click', ()=>{
            const date = new Date();
            checkoutModal.classList.replace('flex','hidden');
            receiptModal.classList.replace('hidden','flex');
            const getUpdatedCart = JSON.parse(localStorage.getItem('userCart'));
            getUpdatedCart.forEach(items =>{
                    const prodInfo = allProd.find(product => items.productId == product.id);
                    createReceipt(items, prodInfo.name);
                });
            receiptOrderNum.innerText = `Order #${Math.floor(Math.random()*100)}`;
            receiptDate.innerText = date.toDateString(); 
            receiptTime.innerText = date.toLocaleTimeString(); 
            receiptAmt.innerText = checkOutAmount.innerText;
            clearList(checkoutModal);
        });
       
        closeReceiptModal.addEventListener('click',()=>{
            receiptModal.classList.replace('flex','hidden');
            clearList(receiptModal);
        });

        dlReceipt.addEventListener('click', ()=>{
        
            html2canvas(receipt).then(function(canvas){
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = "receipt.png";
                link.click();
            });

            receiptModal.classList.replace('flex','hidden');
        });
    }
});