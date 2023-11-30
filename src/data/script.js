document.addEventListener('DOMContentLoaded', function () {
    var addOrderButton = document.getElementById('addOrderButton');

    addOrderButton.addEventListener('click', function () {
        var foodName = document.getElementById('foodName').value;
        var quantity = document.getElementById('quantity').value;
        var notes = document.getElementById('notes').value;

        if (!foodName || !quantity) {
            alert('Please fill in food name and quantity.');
            return;
        }

        var orderDetails = 'Food: ' + foodName + ', Quantity: ' + quantity + ', Notes: ' + notes;
        alert('Order successfully added:\n' + orderDetails);

        document.getElementById('foodOrderForm').reset();
    });
});
