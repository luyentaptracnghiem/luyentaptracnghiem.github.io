const subjectSelect = document.getElementById("subjectSelect");
const lessonSelectContainer = document.getElementById("lessonSelectContainer");
const lessonSelect = document.getElementById("lessonSelect");
const randomButton = document.getElementById("randomButton");
const checkAnswerButton = document.getElementById("checkAnswerButton");
const randomImage = document.getElementById("randomImage");
const result = document.getElementById("result");
const explanationImage = document.getElementById("explanationImage");
const quizForm = document.getElementById("quizForm");

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

  if (!questions[selectedSubject] || !questions[selectedSubject][selectedLesson]) {
    result.textContent = "⚠ Không có câu hỏi nào!";
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
  quizForm.reset();
});

checkAnswerButton.addEventListener("click", () => {
  if (!currentQuestion) {
    result.textContent = "Hãy bấm 'Câu hỏi' trước!";
    result.className = "error";
    return;
  }

  const selectedAnswer = quizForm.answer.value;
  if (!selectedAnswer) {
    result.textContent = "Vui lòng chọn đáp án trước!";
    result.className = "error";
    return;
  }

  result.classList.remove("correct", "wrong");

  if (selectedAnswer === currentQuestion.answer) {
    result.textContent = "🎉 Chính xác!";
    result.classList.add("correct");
  } else {
    result.textContent = `❌ Sai rồi! Đáp án đúng là ${currentQuestion.answer}.`;
    result.classList.add("wrong");
    explanationImage.src = currentQuestion.explanationImage;
    explanationImage.classList.remove("hidden");
  }
});
