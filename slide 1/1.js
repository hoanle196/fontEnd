var sum = 0;
var wit = $(".slide").width();
const moveEl = $(".slide-move")
var legEl = $("img").length;
var maxEl = legEl * wit;
maxEl -= wit;
console.log(maxEl);
// console.log(leg);
function next() {
    if (sum < maxEl) {
        sum += wit;
        a = sum - 100;
        console.log(a);
        moveEl.css("margin-left", `-${a}px`);

    } else {
        sum = 0;
        a = 100;
        moveEl.css("margin-left", `${a}px`);

    }
    // sum = sum - 100;
    // console.log(`-(${sum}-100)px`);
}



$(".right").click(function() {
    if (sum < maxEl) {
        sum += wit;
        a = sum - 100;
        console.log(a);
        moveEl.css("margin-left", `-${a}px`);

    } else {
        sum = 0;
        a = 100;
        moveEl.css("margin-left", `${a}px`);

    }


});
$(".left").click(function() {
    if (sum < wit) {
        sum = maxEl;
        a = 100;
        moveEl.css("margin-left", `${a}px`);
    } else {
        sum -= wit;
        a = sum - 100;
        console.log(a);
        moveEl.css("margin-left", `-${a}px`);
    }


});
// console.log(a);
setInterval(next, 3000);