const translateText = async (text, targetLanguage) => {
    const apiKey = "YOUR_API_KEY"; // 여기에 자신의 구글 클라우드 번역 API 키를 입력하세요
  
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
    const data = {
      q: text,
      target: targetLanguage,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("번역 요청에 실패했습니다.");
      }
  
      const result = await response.json();
      const translatedText = result.data.translations[0].translatedText;
  
      console.log("번역 결과:", translatedText);
    } catch (error) {
      console.error("번역 오류:", error);
    }
  };
  
  // 사용 예시
  translateText("Hello, world!", "ko");