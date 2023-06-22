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

var gnb = document.querySelectorAll('#com');
var submenu = document.querySelectorAll('#sub_menu');

gnb.addEventListener('click', function() {
  submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
});