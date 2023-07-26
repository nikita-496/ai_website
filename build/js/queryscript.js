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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJxdWVyeXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRMYW5ndWFnZUZyb21RdWVyeVN0cmluZygpIHtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHJldHVybiB1cmxQYXJhbXMuZ2V0KCdsYW5nJyk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRMYW5ndWFnZUZyb21RdWVyeVN0cmluZygpKVxuICAgIGlmIChnZXRMYW5ndWFnZUZyb21RdWVyeVN0cmluZygpID09PSBcInJ1XCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJlbnRmcmFtZVwiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJpbmRleC1ydS5odG1sXCIpXG4gICAgfVxufSkiXSwiZmlsZSI6InF1ZXJ5c2NyaXB0LmpzIn0=
