const subjectSelect = document.getElementById("subjectSelect");
const questionTypeContainer = document.getElementById("questionTypeContainer");
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
let usedQuestions = new Set(); // Lưu các câu hỏi đã xuất hiện

subjectSelect.addEventListener("change", () => {
  const selectedSubject = subjectSelect.value;
  lessonSelect.innerHTML = "";

  if (selectedSubject === "toan") {
    questionTypeContainer.style.display = "block";
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
    questionTypeContainer.style.display = "block";
    lessonSelectContainer.style.display = "block";
    lessonSelect.innerHTML = `
  <option value="bai1">Bài 1: Làm quen với Trí tuệ nhân tạo</option>
  <option value="bai2">Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống</option>
  <option value="bai3">Bài 3: Một số thiết bị mạng thông dụng</option>
  <option value="bai4">Bài 4: Giao thức mạng</option>
  <option value="bai5">Bài 5: Thực hành chia sẻ tài nguyên trên mạng</option>
  <option value="bai6">Bài 6: Giao tiếp và ứng xử trong không gian mạng</option>
  <option value="bai7">Bài 7:HTML và cấu trúc trang web</option>
  <option value="bai8">Bài 8:Định dạng văn bản</option>
  <option value="bai9">Bài 9:Tạo danh sách, bảng</option>
  <option value="bai10">Bài 10:Tạo liên kết</option>
`;
  } else if (selectedSubject === "dia") {
    questionTypeContainer.style.display = "block";
    lessonSelectContainer.style.display = "block";
    lessonSelect.innerHTML = `
  <option value="bai1">Bài 1: Vị trí địa lí và phạm vi lãnh thổ</option>
  <option value="bai2">Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa</option>
  <option value="bai3">Bài 3: Sự phân hoá đa dạng của thiên nhiên</option>
  <option value="bai5">Bài 5: Vấn đề sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường</option>
  <option value="bai6">Bài 6: Dân số Việt Nam</option>
  <option value="bai7">Bài 7: Lao động và việc làm</option>
  <option value="bai8">Bài 8: Đô thị hoá</option>
  <option value="bai10">Bài 10: Chuyển Dịch Cơ Cấu Kinh Tế</option>
  <option value="bai11">Bài 11: Vấn đề phát triển ngành nông nghiệp</option>
  <option value="bai12">Bài 12: Vấn đề phát triển ngành lâm nghiệp và ngành thuỷ sản</option>
  <option value="bai15">Bài 15: Chuyển dịch cơ cấu ngành công nghiệp</option>
  <option value="bai16">Bài 16:Một số ngành công nghiệp </option> 
  <option value="bai17">Bài 17:Tổ chức lãnh thổ công nghiệp </option> 
  <option value="bai19">Bài 19:Vai trò, các nhân tố ảnh hưởng đến sự phát triển và phân bố các ngành dịch vụ </option>  
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
    if (result.textContent !== "Hãy bấm vào 'Câu hỏi' trước bạn nhé!") {
      result.textContent = "⚠ Không có câu hỏi nào cả!";
    }
    result.className = "error";
    return;
  }

  const selectedType = parseInt(document.getElementById("questionTypeSelect").value);
  let subjectQuestions = questions[selectedSubject][selectedLesson].filter(q => q.type === selectedType);
  let availableQuestions = subjectQuestions.filter(q => !usedQuestions.has(q));

  if (availableQuestions.length === 0) {
    result.textContent = "⚠ Đã hết câu hỏi rồi ạ!";
    result.className = "error";
    quizForm.style.display = "none"; // Ẩn form khi hết câu hỏi
    checkAnswerButton.style.display = "none"; // Ẩn nút kiểm tra đáp án
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[randomIndex];
  usedQuestions.add(currentQuestion);

  // Hiển thị đáp án tương ứng
  if (currentQuestion.type === 2 && Array.isArray(currentQuestion.answer)) {
    let html = `
    <div class="row">
      <div class="question">
        <strong>a.</strong>
        <div class="option" data-name="answer0" data-value="Đúng">Đúng</div>
        <div class="option" data-name="answer0" data-value="Sai">Sai</div>
      </div>
      <div class="question">
        <strong>b.</strong>
        <div class="option" data-name="answer1" data-value="Đúng">Đúng</div>
        <div class="option" data-name="answer1" data-value="Sai">Sai</div>
      </div>
    </div>
    <div class="row">
      <div class="question">
        <strong>c.</strong>
        <div class="option" data-name="answer2" data-value="Đúng">Đúng</div>
        <div class="option" data-name="answer2" data-value="Sai">Sai</div>
      </div>
      <div class="question">
        <strong>d.</strong>
        <div class="option" data-name="answer3" data-value="Đúng">Đúng</div>
        <div class="option" data-name="answer3" data-value="Sai">Sai</div>
      </div>
    </div>
  `;
    quizForm.innerHTML = html;

    quizForm.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', () => {
        const name = option.getAttribute('data-name');

        // Xóa chọn cũ cùng câu hỏi
        quizForm.querySelectorAll(`.option[data-name="${name}"]`).forEach(opt => {
          opt.classList.remove('selected-dung', 'selected-sai', 'clicked');
        });

        // Thêm chọn mới + hiệu ứng nhún
        const isDung = option.getAttribute('data-value') === "Đúng";
        option.classList.add(isDung ? 'selected-dung' : 'selected-sai');
        option.classList.add('clicked');

        // Loại bỏ class .clicked sau khi animation kết thúc để có thể tái sử dụng
        setTimeout(() => {
          option.classList.remove('clicked');
        }, 200);
      });
    });


  } else {
    quizForm.innerHTML = `
    <div class="row">
      <label>
        <input type="radio" name="answer" value="A"> Đáp án A
      </label>
      <label>
        <input type="radio" name="answer" value="B"> Đáp án B
      </label>
    </div>
    <div class="row">
      <label>
        <input type="radio" name="answer" value="C"> Đáp án C
      </label>
      <label>
        <input type="radio" name="answer" value="D"> Đáp án D
      </label>
    </div>
  `;
  }

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
    if (result.textContent === "⚠ Đã hết câu hỏi rồi ạ!" || quizForm.style.display === "none") {
      return;
    }
    result.textContent = "Hãy bấm vào 'Câu hỏi' trước bạn nhé!";
    result.className = "error";
    return;
  }

  // Nếu là dạng Đúng/Sai
  if (currentQuestion.type === 2 && Array.isArray(currentQuestion.answer)) {
    let correct = true;
    for (let i = 0; i < 4; i++) {
      const selectedOption = quizForm.querySelector(`.option.selected-dung[data-name="answer${i}"], .option.selected-sai[data-name="answer${i}"]`);

      if (!selectedOption) {
        correct = false;
        break; // Nếu chưa chọn đầy đủ, coi như sai
      }

      const selectedValue = selectedOption.getAttribute('data-value');
      if (selectedValue !== currentQuestion.answer[i]) {
        correct = false;
        break; // Sai 1 câu là sai luôn
      }
    }

    if (correct) {
      result.textContent = "🎉 Gì thế này? Chính xác tất cả câu á! Ảo vậy 😱";
      result.className = "correct";
      correctSound.play();
    } else {
      result.textContent = "❌ Tiếc quá! Bạn đã làm sai câu nào đó rồi 😭";
      result.className = "wrong";
      explanationImage.src = currentQuestion.explanationImage;
      explanationImage.classList.remove("hidden");
      wrongSound.play();
    }

    return; // Dừng tại đây nếu đang xử lý đúng/sai
  }

  // Nếu là dạng ABCD như bình thường
  const selectedAnswer = quizForm.answer?.value;
  if (!selectedAnswer) {
    result.textContent = "Vui lòng bạn chọn đáp án trước!";
    result.className = "error";
    return;
  }

  result.classList.remove("correct", "wrong", "error");
  if (selectedAnswer === currentQuestion.answer) {
    result.textContent = "🎉 Ối dồi ôi! Thiên tài là đây chứ đâu🤯";
    result.classList.add("correct");
    correctSound.play();
  } else {
    result.textContent = `❌ Ủa alo? Đọc kỹ đề chưa vậy🫠 Đáp án đúng là ${currentQuestion.answer}`;
    result.classList.add("wrong");
    explanationImage.src = currentQuestion.explanationImage;
    explanationImage.classList.remove("hidden");
    wrongSound.play();
  }
});
