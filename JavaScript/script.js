function clicou() {
    let num = document.getElementById('num');
    let num_1 = Number(num.value);
    let res = document.getElementById('res');

    if(num_1 == 0 || num.value.lenght == 0 ) {
        alert('erro')
    }
    console.log(num_1)
}