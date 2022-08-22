let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equalTo = document.querySelector('.btn-equal');
let standardDev = document.querySelector('standardDev');
let arr = [];
let standard_dev = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        // console.log(value);

        screen.value += value;
        arr.push(value);
        // console.log(arr);

    })
});


function answer() {
    let ans = Function("return " + screen.value)();
    screen.value = ans;
};

function standardDev() {
    let sum = 0;
    let diff = 0;
    arr.forEach(function (element) {
        sum += element;
    });

    let mean = sum / arr.length;

    arr.forEach(function (number) {
        diff = number - mean;
        diff += diff;
        diff = Math.pow(diff, 2);
    });

    var mean_dev = diff / arr.length;

    standard_dev = Math.sqrt(mean_dev);

    // let stand = Function("return " + screen.value)();
    screen.value = standard_dev;
}

clear.addEventListener('click', function (e) {
    screen.value = "";
});