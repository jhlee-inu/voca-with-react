document.getElementById("login-form").addEventListener("submit", function(event) {
    // 폼 제출 기본 동작 막기 (페이지 새로고침 방지)
    event.preventDefault();

    // 사용자 입력값 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 로그인 정보 확인 (둘 다 비어 있지 않은지 확인)
    if (username && password) {
        // 로그인 성공 시, 다른 페이지로 이동
        window.location.href = ""; // 이동할 페이지 URL (nextpage.html)
    } else {
        // 입력이 비어 있으면 경고
        alert("Username and Password are required.");
    }
});
