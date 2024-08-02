function addToCart() {
    // Récupération des valeurs du formulaire
    const form = document.getElementById('product-form');
    const formData = new FormData(form);

    const cartItem = {
        name: 'Cadre Personnalisé 45x50cm',
        price: 45,
        backgroundColor: formData.get('background-color'),
        textColor: formData.get('text-color'),
        fontFamily: formData.get('font-family')
    };

    // Récupération du panier actuel depuis le Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajout du nouvel article au panier
    cart.push(cartItem);

    // Sauvegarde du panier mis à jour dans le Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Confirmation pour l'utilisateur
    alert('Produit ajouté au panier!');
}
        // Fonction pour afficher les articles du panier avec les boutons de suppression
        function displayCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
                return;
            }

            let html = '<ul>';
            cart.forEach((item, index) => {
                html += `
                    <li>
                        <strong>${item.name}</strong><br>
                        Prix : ${item.price} €<br>
                        Couleur du Fond : ${item.backgroundColor}<br>
                        Couleur de l'Écriture : ${item.textColor}<br>
                        Police d'Écriture : ${item.fontFamily}<br>
                        <button onclick="removeFromCart(${index})">Supprimer</button>
                    </li>
                `;
            });
            html += '</ul>';
            cartItemsContainer.innerHTML = html;
        }

        // Fonction pour supprimer un article du panier
        function removeFromCart(index) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1); // Retire l'article à l'index spécifié
            localStorage.setItem('cart', JSON.stringify(cart)); // Sauvegarde le panier mis à jour
            displayCart(); // Met à jour l'affichage
        }


function addToCart() {
    const form = document.getElementById('product-form');
    const formData = new FormData(form);

    const cartItem = {
        name: 'Cadre Personnalisé 45x50cm',
        price: 45,
        backgroundColor: formData.get('background-color'),
        textColor: formData.get('text-color'),
        fontFamily: formData.get('font-family')
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produit ajouté au panier!');
}
