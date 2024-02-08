function genPalety() {
    var kolor = document.getElementById("kolor").value;
    var td1 = document.getElementById("td1");
    td1.style.backgroundColor = "hsl(" + kolor + ", 100%, 50%)";
    var td2 = document.getElementById("td2");
    td2.style.backgroundColor = "hsl(" + kolor + ", 80%, 50%)";
    var td3 = document.getElementById("td3");
    td3.style.backgroundColor = "hsl(" + kolor + ", 60%, 50%)";
    var td4 = document.getElementById("td4");
    td4.style.backgroundColor = "hsl(" + kolor + ", 40%, 50%)";
    var td5 = document.getElementById("td5");
    td5.style.backgroundColor = "hsl(" + kolor + ", 20%, 50%)";
}