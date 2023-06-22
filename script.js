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
// 구글 번역 api

function translateText() {
  var sourceText = document.getElementById("source-text").innerText;

  // Send translation request to the server
  $.ajax({
    url: "/translate",
    type: "GET",
    data: { text: sourceText },
    success: function(response) {
      document.getElementById("translation-result").textContent = response.translation;
    },
    error: function(error) {
      console.log(error);
    }
  });
}

// 선택 구글 이미지
$(document).ready(function() {
  $('#lang').select2({
    templateResult: formatOption
  });
});

function formatOption(option) {
  if (!option.id) {
    return option.text;
  }
  
  var $option = $(
    '<span><img src="https://www.shutterstock.com/image-vector/google-popular-realistic-social-media-600w-2275269793.jpg" class="lang-icon" /> ' + option.text + '</span>'
  );
  return $option;
}
