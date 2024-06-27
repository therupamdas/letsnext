
document.querySelector("#logg").addEventListener('click', function () {
    document.querySelector(".logbox").classList.add("active");
});
document.querySelector("#logcross").addEventListener('click', function () {
    document.querySelector(".logbox").classList.remove("active");
    document.querySelector(".alertbox").classList.remove("active");
    event.stopImmediatePropagation();
});

// document.querySelector("body").addEventListener('click', function () {
//     if (session) {
//         if (document.querySelector('.logbox').classList.contains('active') == false) {
//             document.querySelector(".alertbox").classList.add("active");
//         }
//     }
// });
// document.querySelector("#alertcross").addEventListener('click', function () {
//     document.querySelector(".alertbox").classList.remove("active");
//     event.stopImmediatePropagation();
// });

// document.querySelector(".ent").addEventListener('click', function () {
//     document.querySelector("#sinlog").classList.add("disappear");
//     document.querySelector("#displaypicture").classList.add("appear");
//     document.querySelector(".logbox").classList.remove("active");
//     document.querySelector(".alertbox").classList.remove("active");
//     event.stopImmediatePropagation();
// });