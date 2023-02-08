function clicou() {
    let num = document.getElementById('num');
    let num_1 = Number(num.value);
    let res = document.getElementById('res');
    if(num_1 == 0 || num.value.lenght == 0 ) {
        alert('erro')
    } else {
        res.innerHTML = ``
        for(let i = 0; i <= 10; i++) {
            let p = document.createElement('p');
            p.innerHTML = `${i} x ${num_1} = ${i * num_1}`
            res.appendChild(p)
        }
    }
}