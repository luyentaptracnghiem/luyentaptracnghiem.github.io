const subjectSelect = document.getElementById("subjectSelect");
const lessonSelectContainer = document.getElementById("lessonSelectContainer");
const lessonSelect = document.getElementById("lessonSelect");
const randomButton = document.getElementById("randomButton");
const checkAnswerButton = document.getElementById("checkAnswerButton");
const randomImage = document.getElementById("randomImage");
const result = document.getElementById("result");
const explanationImage = document.getElementById("explanationImage");
const quizForm = document.getElementById("quizForm");

// Ẩn phần chọn đáp án và nút kiểm tra ban đầu
quizForm.style.display = "none";
checkAnswerButton.style.display = "none";

let currentQuestion = null; // Lưu câu hỏi hiện tại

subjectSelect.addEventListener("change", () => {
  const selectedSubject = subjectSelect.value;
  lessonSelect.innerHTML = "";

  if (selectedSubject === "toan") {
    lessonSelectContainer.style.display = "block";
    lessonSelect.innerHTML = `
  <option value="bai1">Bài 1: Tính đơn điệu và cực trị của hàm số</option>
  <option value="bai2">Bài 2: Giá trị lớn nhất và nhỏ nhất của hàm số</option>
  <option value="bai3">Bài 3: Đường tiệm cận của đồ thị hàm số</option>
  <option value="bai4">Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số</option>
  <option value="bai5">Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn</option>
  <option value="bai6">Bài 6: Vectơ trong không gian</option>
  <option value="bai7">Bài 7: Hệ trục toạ độ trong không gian</option>
  <option value="bai8">Bài 8: Biểu thức toạ độ của các phép toán vectơ</option>
  <option value="bai9">Bài 9: Khoảng biến thiên và khoảng tứ phân vị</option>
  <option value="bai10">Bài 10: Phương sai và độ lệch chuẩn</option>
  <option value="bai11">Bài 11: Nguyên hàm</option>
  <option value="bai12">Bài 12: Tích phân</option>
  <option value="bai13">Bài 13: Ứng dụng hình học của tích phân</option>
  <option value="bai14">Bài 14: Phương trình mặt phẳng</option>
  <option value="bai15">Bài 15: Phương trình đường thẳng trong không gian</option>
  <option value="bai16">Bài 16: Công thức tính góc trong không gian</option>
  <option value="bai17">Bài 17: Phương trình mặt cầu</option>
  <option value="bai18">Bài 18: Xác suất có điều kiện</option>
`;
  } else if (selectedSubject === "tin") {
    lessonSelectContainer.style.display = "block";
    lessonSelect.innerHTML = `
  <option value="bai1">Bài 1: Làm quen với Trí tuệ nhân tạo</option>
  <option value="bai2">Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống</option>
  <option value="bai3">Bài 3: Một số thiết bị mạng thông dụng</option>
  <option value="bai4">Bài 4: Giao thức mạng</option>
  <option value="bai5">Bài 5: Thực hành chia sẻ tài nguyên trên mạng</option>
  <option value="bai6">Bài 6: Giao tiếp và ứng xử trong không gian mạng</option>
`;
  } else if (selectedSubject === "dia") {
    lessonSelectContainer.style.display = "block";
    lessonSelect.innerHTML = `
  <option value="bai1">Bài 1: Vị trí địa lí và phạm vi lãnh thổ</option>
  <option value="bai2">Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa</option>
  <option value="bai3">Bài 3: Sự phân hoá đa dạng của thiên nhiên</option>
  <option value="bai5">Bài 5: Vấn đề sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường</option>
  <option value="bai6">Bài 6: Dân số Việt Nam</option>
  <option value="bai7">Bài 7: Lao động và việc làm</option>
  <option value="bai8">Bài 8: Đô thị hoá</option>
`;
  } else {
    lessonSelectContainer.style.display = "none";
  }
});

randomButton.addEventListener("click", () => {
  const selectedSubject = subjectSelect.value;
  const selectedLesson = lessonSelect.value;

  // Hiển thị lựa chọn đáp án và nút kiểm tra
  quizForm.style.display = "block";
  checkAnswerButton.style.display = "block";

  if (!questions[selectedSubject] || !questions[selectedSubject][selectedLesson]) {
    result.textContent = "⚠ Không có câu hỏi nào cả!";
    result.className = "error";
    return;
  }

  let subjectQuestions = questions[selectedSubject][selectedLesson];

  const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
  currentQuestion = subjectQuestions[randomIndex];

  randomImage.src = currentQuestion.image;
  randomImage.classList.remove("hidden");
  explanationImage.classList.add("hidden");
  result.textContent = "";
  result.classList.remove("correct", "wrong", "error"); // Xóa nền xanh/đỏ khi chuyển câu hỏi mới
  quizForm.reset();
});

// Tạo audio cho đúng và sai
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

checkAnswerButton.addEventListener("click", () => {
  if (!currentQuestion) {
    result.textContent = "Hãy bấm vào 'Câu hỏi' trước bạn nhé!";
    result.className = "error";
    return;
  }

  const selectedAnswer = quizForm.answer.value;
  if (!selectedAnswer) {
    result.textContent = "Vui lòng bạn chọn đáp án trước!";
    result.className = "error";
    return;
  }
  result.classList.remove("correct", "wrong", "error");
  if (selectedAnswer === currentQuestion.answer) {
    result.textContent = "🎉 Ối dồi ôi! Thiên tài là đây chứ đâu🤯";
    result.classList.add("correct");
    correctSound.play(); // Phát âm thanh đúng
  } else {
    result.textContent = `❌ Ủa alo? Đọc kỹ đề chưa vậy🫠 Đáp án đúng là ${currentQuestion.answer}`;
    result.classList.add("wrong");
    explanationImage.src = currentQuestion.explanationImage;
    explanationImage.classList.remove("hidden");
    wrongSound.play(); // Phát âm thanh sai
  }
});
