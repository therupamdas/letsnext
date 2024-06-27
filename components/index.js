
document.querySelector("#logg").addEventListener('click', function () {
    document.querySelector(".logbox").classList.add("active");
});
document.querySelector("#logcross").addEventListener('click', function () {
    document.querySelector(".logbox").classList.remove("active");
    document.querySelector(".alertbox").classList.remove("active");
    event.stopImmediatePropagation();
});