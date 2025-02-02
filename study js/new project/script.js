function search() {
    let query = document.querySelector(".search-box input").value;
    if (query) {
        alert("검색어: " + query);
    } else {
        alert("검색어를 입력하세요!");
    }
}
