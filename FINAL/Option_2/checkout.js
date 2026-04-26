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
// function to clear the cart - pseudo look of items being checked out, with a try/catch to make
// make sure the cart is not empty
function reloadCheckout() {
    try {
        const inputs = document.querySelectorAll('#cartTable input[type="number"]');
        let hasItems = false;

        inputs.forEach(input => {
            if (parseInt(input.value) > 0) {
                hasItems = true;
            }
        });

        if (!hasItems) {
            throw new Error('Your cart is empty!');
        }

        alert('Checked Out!');
        inputs.forEach(input => {
            input.value = 0;
        });
        checkoutTotal();
    } catch (error) {
        alert(error.message);
    }
}

