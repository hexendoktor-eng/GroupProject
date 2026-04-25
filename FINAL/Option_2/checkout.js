function checkoutTotal() {
    const prices = [1.50, 4.00, 5.00, 2.50, 3.00, 6.00];
    const inputs = document.querySelectorAll('#cartTable input[type="number"]');
    let total = 0;

    inputs.forEach((input, index) => {
        total += prices[index] * parseInt(input.value);
    });
    // adds the total of the items in the cart

    const totalCell = document.querySelector('#totalCell');
    totalCell.textContent = '$' + total.toFixed(2);


}