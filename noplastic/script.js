// 하단으로 스크롤 시 탑 버튼 생성
window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  if (window.pageYOffset > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Company이것을 클릭하면 sub_menu가 보이고 다시 Company클릭하면 숨겨지게 코드
function toggleSubMenu() {
  var subMenu = document.getElementById("sub_menu");
  if (subMenu.style.display === "none") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
}