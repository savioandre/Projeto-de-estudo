const len = document.querySelectorAll('.rs').length;
const index = document.querySelector('section').getAttribute('data-index');
var pro = JSON.parse(localStorage.getItem(`profile${parseInt(index)}`)) || [];

let teste = 0;
while (teste < len) {
    document.querySelectorAll('.rs').forEach((a) => {
        a.setAttribute('id', teste);
        teste++;
    })
};

let res = document.querySelector('#btm');
res.addEventListener('click', () => {
    let id = 0;
    while (id < len) {
        let a = document.getElementById(id).value;
        pro.push({
            ask: a
        });
        localStorage.clear();
        localStorage.setItem(`profile${parseInt(index)}`, JSON.stringify(pro));
        id += 1;
    }
    alert('Respostas Salvas!');
});

if (localStorage.length > 0) {
    let i = 0;
    while (i <= len) {
        let gf = JSON.parse(localStorage.getItem(`profile${parseInt(index)}`))[i].ask;
        document.getElementById(i).innerHTML = gf;
        i += 1;
    }
};