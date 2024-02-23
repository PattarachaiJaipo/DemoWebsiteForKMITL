
var input = document.getElementById("textseach");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
event.preventDefault();
document.getElementById("seach-enter").click(); 
}
});

function changelanguage(lang) {
    let i = document.getElementById("first-1");
    let ii = document.getElementById("first-2");
    let iii = document.getElementById("first-3");
    if (lang == "EN") {
        i.innerHTML = "Games";
        ii.innerHTML = "Sport";
        iii.innerHTML = "Music"
    } else if (lang == "TH") {
        i.innerHTML = "เกมส์";
        ii.innerHTML = "กีฬา";
        iii.innerHTML = "เพลง";
    }
}
