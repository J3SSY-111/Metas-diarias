function Tabla() {
let inpText = document.getElementById("inpText"),
span = document.getElementById("animation-span"),
span1 = document.getElementById("animation-span--1"),
span2 = document.getElementById("animation-span--2"),
span3 = document.getElementById("animation-span--3"),
span4 = document.getElementById("animation-span--4"),
span5 = document.getElementById("animation-span--5"),
row1 = document.getElementById("container-table__table-tr-td-row--1-d"),
row2 = document.getElementById("container-table__table-tr-td-row--2-d"),
row3 = document.getElementById("container-table__table-tr-td-row--3-d"),
row4 = document.getElementById("container-table__table-tr-td-row--4-d"),
row5 = document.getElementById("container-table__table-tr-td-row--5-d"),
row6 = document.getElementById("container-table__table-tr-td-row--1-l"),
row7 = document.getElementById("container-table__table-tr-td-row--2-l"),
row8 = document.getElementById("container-table__table-tr-td-row--3-l"),
row9 = document.getElementById("container-table__table-tr-td-row--4-l"),
row10 = document.getElementById("container-table__table-tr-td-row--5-l"),
row11 = document.getElementById("container-table__table-tr-td-row--1-m"),
row12 = document.getElementById("container-table__table-tr-td-row--2-m"),
row13 = document.getElementById("container-table__table-tr-td-row--3-m"),
row14 = document.getElementById("container-table__table-tr-td-row--4-m"),
row15 = document.getElementById("container-table__table-tr-td-row--5-m"),
row16 = document.getElementById("container-table__table-tr-td-row--1-w"),
row17 = document.getElementById("container-table__table-tr-td-row--2-w"),
row18 = document.getElementById("container-table__table-tr-td-row--3-w"),
row19 = document.getElementById("container-table__table-tr-td-row--4-w"),
row20 = document.getElementById("container-table__table-tr-td-row--5-w"),
row21 = document.getElementById("container-table__table-tr-td-row--1-j"),
row22 = document.getElementById("container-table__table-tr-td-row--2-j"),
row23 = document.getElementById("container-table__table-tr-td-row--3-j"),
row24 = document.getElementById("container-table__table-tr-td-row--4-j"),
row25 = document.getElementById("container-table__table-tr-td-row--5-j"),
row26 = document.getElementById("container-table__table-tr-td-row--1-v"),
row27 = document.getElementById("container-table__table-tr-td-row--2-v"),
row28 = document.getElementById("container-table__table-tr-td-row--3-v"),
row29 = document.getElementById("container-table__table-tr-td-row--4-v"),
row30 = document.getElementById("container-table__table-tr-td-row--5-v"),
row31 = document.getElementById("container-table__table-tr-td-row--1-s"),
row32 = document.getElementById("container-table__table-tr-td-row--2-s"),
row33 = document.getElementById("container-table__table-tr-td-row--3-s"),
row34 = document.getElementById("container-table__table-tr-td-row--4-s"),
row35 = document.getElementById("container-table__table-tr-td-row--5-s"),
row36 = document.getElementById("container-table__table-tr-td-row--1-total"),
row37 = document.getElementById("container-table__table-tr-td-row--2-total"),
row38 = document.getElementById("container-table__table-tr-td-row--3-total"),
row39 = document.getElementById("container-table__table-tr-td-row--4-total"),
row40 = document.getElementById("container-table__table-tr-td-row--5-total"),
btn = document.getElementById("btn"),
h2 = document.getElementById("container-table__h2");

const SumaDeHoras = () => {
    row36.addEventListener("focus", function() {
        let total1 = parseInt(row1.value) + parseInt(row6.value) + parseInt(row11.value) + parseInt(row16.value) + parseInt(row21.value) + parseInt(row26.value) + parseInt(row31.value);
        row36.setAttribute("value", total1);
    })
    row37.addEventListener("focus", function() {
        let total2 = parseInt(row2.value) + parseInt(row7.value) + parseInt(row12.value) + parseInt(row17.value) + parseInt(row22.value) + parseInt(row27.value) + parseInt(row32.value);
        row37.setAttribute("value", total2);
    })
    row38.addEventListener("focus", function() {
        let total3 = parseInt(row3.value) + parseInt(row8.value) + parseInt(row13.value) + parseInt(row18.value) + parseInt(row23.value) + parseInt(row28.value) + parseInt(row33.value);
        row38.setAttribute("value", total3);
    })
    row39.addEventListener("focus", function() {
        let total4 = parseInt(row4.value) + parseInt(row9.value) + parseInt(row14.value) + parseInt(row19.value) + parseInt(row24.value) + parseInt(row29.value) + parseInt(row34.value);
        row39.setAttribute("value", total4);
    })
    row40.addEventListener("focus", function() {
        let total5 = parseInt(row5.value) + parseInt(row10.value) + parseInt(row15.value) + parseInt(row20.value) + parseInt(row25.value) + parseInt(row30.value) + parseInt(row35.value);
        row40.setAttribute("value", total5);
    })
}
SumaDeHoras();

// const Buscar = () => {
//     if (inpText.value == `Semana 1`) {
//         h2.style.animation = "background 2s linear infinite";
//     }
// }

// btn.addEventListener("click", Buscar);
inpText.addEventListener("focus", function() {
    btn.setAttribute("style", "color: #C06014;");
})
inpText.addEventListener("focusout", function() {
    if (inpText.value == ""){
        btn.setAttribute("style", "color: #222;");
    }
})


setTimeout(() => {
    span.setAttribute("class", "animation-span");
}, 1200);
setTimeout(() => {
    span1.setAttribute("class", "animation-span--1");
}, 1400);
setTimeout(() => {
    span2.setAttribute("class", "animation-span--2");
}, 1600);
setTimeout(() => {
    span3.setAttribute("class", "animation-span--3");
}, 1800);
setTimeout(() => {
    span4.setAttribute("class", "animation-span--4");
}, 2000);
setTimeout(() => {
    span5.setAttribute("class", "animation-span--5");
}, 2200);
}

Tabla();