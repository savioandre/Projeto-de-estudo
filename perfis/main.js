let i = 0;
while (i < 10) {
    i++;
    document.querySelectorAll('.rs').forEach((a) => {
        a.setAttribute('id', i++);
    })
};

let res = document.querySelector('#btm');
res.addEventListener('click', () => {
    let i = 0;
    while (i < 9) {
        i++;
        let a = document.getElementById(i).value;
        localStorage.setItem(i, a);
    }
    alert('Respostas Salvas!');
});

if (localStorage.length > 0) {
    let i = 0;
    while (i < 9) {
        i++;
        let gf = localStorage.getItem(i).toString();
        document.getElementById(i).value = `${gf}`;
    }
};