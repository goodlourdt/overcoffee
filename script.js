document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const coffee = document.getElementById('coffee').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const orderDetails = `Thank you, ${name}! Your order of ${quantity} ${coffee}(s) will be delivered to ${address}.`;
    document.getElementById('order-details').textContent = orderDetails;
    document.getElementById('order-confirmation').style.display = 'block';
});
