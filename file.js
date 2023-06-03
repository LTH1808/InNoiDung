function myfunction() {
    let username = document.getElementById("username").value
    let site = document.getElementById("site").value
    let date = document.getElementById("date").value
    console.log(date)
    console.log(username)
    console.log(site)
    if (username == "joe" && site == "los angales" && date == "1951-10-10") {
        window.location.href = "letter.html";
    } else {
        alert(" sai thông tin tìm kiếm ")
    }

}    