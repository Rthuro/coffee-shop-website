

function head(title){
    
    const head = document.querySelector('head');

    head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azure Waves Café | ${title}</title>
    <link rel="shortcut icon" href="/src/assets/logo/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="/tailwind.css"> `;
}