const len = document.querySelectorAll('.rs').length;
const index = document.querySelector('section').getAttribute('data-index');
var pro = JSON.parse(localStorage.getItem(`profile${parseInt(index)}`)) || [];
const namePage = `profile${parseInt(index)}`

let teste = 0;
while (teste < len) {
    document.querySelectorAll('.rs').forEach((a) => {
        a.setAttribute('id', teste);
        teste++;
    })
};

document.querySelectorAll('textarea').forEach((i) => {
    i.addEventListener('keyup', (e) => {
        let k = e.key
        setTimeout(() => {
            let id = 0;
            pro = [];

            while (id < len) {
                let a = document.getElementById(id).value;
                pro.push({
                    ask: a
                });
                id += 1;
            };
            localStorage.setItem(namePage, JSON.stringify(pro));
        }, 1000);
    })
})

if (localStorage.length > 0) {
    let i = 0;
    while (i <= len) {
        let gf = JSON.parse(localStorage.getItem(namePage))[i].ask;
        document.getElementById(i).innerHTML = gf;
        i += 1;
    }
};