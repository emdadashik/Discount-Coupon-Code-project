document.getElementById('btn-apply').addEventListener('click', function(){
    const inputFieldValue = document.getElementById('input-field');
    const inputFieldValueString = inputFieldValue.value;

    if(inputFieldValueString === 'DISC30'){
        document.getElementById('price-text').innerText = '৮,৪০০/-';
    } else {
        alert('You entered a wrong Coupon');
    }
});
document.getElementById('close-btn').addEventListener('click', function(){
    const inputFieldValue = document.getElementById('input-field');
    inputFieldValue.value = '';
})