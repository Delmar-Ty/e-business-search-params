function makeParam(id) {
    let param = new URLSearchParams();
    param.append('id', id);
    return param.toString();
}

document.querySelector('.wallet').addEventListener('click', function() {
    let param = makeParam(1);
    console.log(param);
    location.assign(`'../../product-details-one.html?${param}`);
});