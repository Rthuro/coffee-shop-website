

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