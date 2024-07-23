document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    document.getElementById("order-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const coffee = document.getElementById("coffee").value;
        const quantity = document.getElementById("quantity").value;
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;

        const coffeePrices = {
            "just black": 115,
            "over caramel": 125,
            "over hazelnut": 125,
            "over horchata": 130,
            "over spanish": 130
        };

        const totalAmount = coffeePrices[coffee] * quantity;

        document.getElementById("order-details").innerHTML = `
            Coffee: ${coffee}<br>
            Quantity: ${quantity}<br>
            Total Amount: P${totalAmount}<br>
            Name: ${name}<br>
            Address: ${address}
        `;
        document.getElementById("order-confirmation").style.display = "block";

        emailjs.sendForm('service_a43kjhm', 'template_order', this)
            .then(function(response) {
                console.log('Sent successfully:', response);
            }, function(error) {
                console.error('Failed to send:', error);
            });
    });
});
