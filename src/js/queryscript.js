function getLanguageFromQueryString() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang');
}

document.addEventListener("DOMContentLoaded", function () {
    // console.log(getLanguageFromQueryString())
    if (getLanguageFromQueryString() === "ru") {
        document.querySelector("#parentframe").setAttribute("src", "index-ru.html")
    }
})