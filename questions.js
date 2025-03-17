// Danh sách câu hỏi theo môn học và bài học
const questions = {
    toan: {
      bai1: [
        {
          image: "images/questions/toan/bai1/image1.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai1/explanation1.png"
        },
        {
          image: "images/questions/toan/bai1/image2.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai1/explanation2.png"
        },
        {
          image: "images/questions/toan/bai1/image3.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai1/explanation3.png"
        },
        {
          image: "images/questions/toan/bai1/image4.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai1/explanation4.png"
        },
        {
          image: "images/questions/toan/bai1/image5.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai1/explanation5.png"
        },
        {
          image: "images/questions/toan/bai1/image6.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai1/explanation6.png"
        },
        {
          image: "images/questions/toan/bai1/image7.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai1/explanation7.png"
        },
        {
          image: "images/questions/toan/bai1/image8.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai1/explanation8.png"
        },
        {
          image: "images/questions/toan/bai1/image9.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai1/explanation9.png"
        },
        {
          image: "images/questions/toan/bai1/image10.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai1/explanation10.png"
        }
      ],
      bai2: [
        {
          image: "images/questions/toan/bai2/image1.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai2/explanation1.png"
        },
        {
          image: "images/questions/toan/bai2/image2.png",
          answer: "C",
          explanationImage: "images/solutions/toan/bai2/explanation2.png"
        },
        {
          image: "images/questions/toan/bai2/image3.png",
          answer: "A",
          explanationImage: "images/solutions/toan/bai2/explanation3.png"
        },
        {
          image: "images/questions/toan/bai2/image4.png",
          answer: "A",
          explanationImage: "images/solutions/toan/bai2/explanation4.png"
        },
        {
          image: "images/questions/toan/bai2/image5.png",
          answer: "D",
          explanationImage: "images/solutions/toan/bai2/explanation5.png"
        },
        {
          image: "images/questions/toan/bai2/image6.png",
          answer: "A",
          explanationImage: "images/solutions/toan/bai2/explanation6.png"
        },
        {
          image: "images/questions/toan/bai2/image7.png",
          answer: "B",
          explanationImage: "images/solutions/toan/bai2/explanation7.png"
        },
        {
          image: "images/questions/toan/bai2/image8.png",
          answer: "B",
          explanationImage: "images/solutions/toan/bai2/explanation8.png"
        },
        {
          image: "images/questions/toan/bai2/image9.png",
          answer: "B",
          explanationImage: "images/solutions/toan/bai2/explanation9.png"
        },
        {
          image: "images/questions/toan/bai2/image10.png",
          answer: "A",
          explanationImage: "images/solutions/toan/bai2/explanation10.png"
        }
      ],
      bai3: [
        {
          "image": "images/questions/toan/bai3/image1.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai3/explanation1.png"
        },
        {
          "image": "images/questions/toan/bai3/image2.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai3/explanation2.png"
        },
        {
          "image": "images/questions/toan/bai3/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai3/explanation3.png"
        },
        {
          "image": "images/questions/toan/bai3/image4.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai3/explanation4.png"
        },
        {
          "image": "images/questions/toan/bai3/image5.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai3/explanation5.png"
        },
        {
          "image": "images/questions/toan/bai3/image6.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai3/explanation6.png"
        },
        {
          "image": "images/questions/toan/bai3/image7.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai3/explanation7.png"
        },
        {
          "image": "images/questions/toan/bai3/image8.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai3/explanation8.png"
        },
        {
          "image": "images/questions/toan/bai3/image9.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai3/explanation9.png"
        },
        {
          "image": "images/questions/toan/bai3/image10.png",
          "answer": "D",
          "explanationImage": "images/solutions/toan/bai3/explanation10.png"
        }
      ],
      bai4: [
        {
          "image": "images/questions/toan/bai4/image1.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai4/explanation1.png"
        },
        {
          "image": "images/questions/toan/bai4/image2.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai4/explanation2.png"
        },
        {
          "image": "images/questions/toan/bai4/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai4/explanation3.png"
        },
        {
          "image": "images/questions/toan/bai4/image4.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai4/explanation4.png"
        },
        {
          "image": "images/questions/toan/bai4/image5.png",
          "answer": "D",
          "explanationImage": "images/solutions/toan/bai4/explanation5.png"
        },
        {
          "image": "images/questions/toan/bai4/image6.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai4/explanation6.png"
        },
        {
          "image": "images/questions/toan/bai4/image7.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai4/explanation7.png"
        },
        {
          "image": "images/questions/toan/bai4/image8.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai4/explanation8.png"
        },
        {
          "image": "images/questions/toan/bai4/image9.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai4/explanation9.png"
        },
        {
          "image": "images/questions/toan/bai4/image10.png",
          "answer": "D",
          "explanationImage": "images/solutions/toan/bai4/explanation10.png"
        }
      ],
      bai5: [
        {
          "image": "images/questions/toan/bai5/image1.png",
          "answer": "C",
          "explanationImage": "images/solutions/toan/bai5/explanation1.png"
        },
        {
          "image": "images/questions/toan/bai5/image2.png",
          "answer": "A",
          "explanationImage": "images/solutions/toan/bai5/explanation2.png"
        },
        {
          "image": "images/questions/toan/bai5/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai5/explanation3.png"
        },
        {
          "image": "images/questions/toan/bai5/image4.png",
          "answer": "B",
          "explanationImage": "images/solutions/toan/bai5/explanation4.png"
        },
        {
          "image": "images/questions/toan/bai5/image5.png",
          "answer": "D",
          "explanationImage": "images/solutions/toan/bai5/explanation5.png"
        }
      ],
    },
    tin: {
      bai1: [
        {
          image: "images/questions/tin/bai1/image1.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation1.png"
        },
        {
          image: "images/questions/tin/bai1/image2.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation2.png"
        },
        {
          image: "images/questions/tin/bai1/image3.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation3.png"
        },
        {
          image: "images/questions/tin/bai1/image4.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation4.png"
        },
        {
          image: "images/questions/tin/bai1/image5.png",
          answer: "C",
          explanationImage: "images/solutions/tin/bai1/explanation5.png"
        },
        {
          image: "images/questions/tin/bai1/image6.png",
          answer: "A",
          explanationImage: "images/solutions/tin/bai1/explanation6.png"
        },
        {
          image: "images/questions/tin/bai1/image7.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation7.png"
        },
        {
          image: "images/questions/tin/bai1/image8.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai1/explanation8.png"
        },
        {
          image: "images/questions/tin/bai1/image9.png",
          answer: "D",
          explanationImage: "images/solutions/tin/bai1/explanation9.png"
        },
        {
          image: "images/questions/tin/bai1/image10.png",
          answer: "D",
          explanationImage: "images/solutions/tin/bai1/explanation10.png"
        }
      ],
      bai2: [
        {
          image: "images/questions/tin/bai2/image1.png",
          answer: "C",
          explanationImage: "images/solutions/tin/bai2/explanation1.png"
        },
        {
          image: "images/questions/tin/bai2/image2.png",
          answer: "C",
          explanationImage: "images/solutions/tin/bai2/explanation2.png"
        },
        {
          image: "images/questions/tin/bai2/image3.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai2/explanation3.png"
        },
        {
          image: "images/questions/tin/bai2/image4.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai2/explanation4.png"
        },
        {
          image: "images/questions/tin/bai2/image5.png",
          answer: "A",
          explanationImage: "images/solutions/tin/bai2/explanation5.png"
        },
        {
          image: "images/questions/tin/bai2/image6.png",
          answer: "C",
          explanationImage: "images/solutions/tin/bai2/explanation6.png"
        },
        {
          image: "images/questions/tin/bai2/image7.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai2/explanation7.png"
        },
        {
          image: "images/questions/tin/bai2/image8.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai2/explanation8.png"
        },
        {
          image: "images/questions/tin/bai2/image9.png",
          answer: "B",
          explanationImage: "images/solutions/tin/bai2/explanation9.png"
        },
        {
          image: "images/questions/tin/bai2/image10.png",
          answer: "A",
          explanationImage: "images/solutions/tin/bai2/explanation10.png"
        }
      ],
      "bai3": [
        {
          "image": "images/questions/tin/bai3/image1.png",
          "answer": "A",
          "explanationImage": "images/solutions/tin/bai3/explanation1.png"
        },
        {
          "image": "images/questions/tin/bai3/image2.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai3/explanation2.png"
        },
        {
          "image": "images/questions/tin/bai3/image3.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai3/explanation3.png"
        },
        {
          "image": "images/questions/tin/bai3/image4.png",
          "answer": "D",
          "explanationImage": "images/solutions/tin/bai3/explanation4.png"
        },
        {
          "image": "images/questions/tin/bai3/image5.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai3/explanation5.png"
        },
        {
          "image": "images/questions/tin/bai3/image6.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai3/explanation6.png"
        },
        {
          "image": "images/questions/tin/bai3/image7.png",
          "answer": "D",
          "explanationImage": "images/solutions/tin/bai3/explanation7.png"
        },
        {
          "image": "images/questions/tin/bai3/image8.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai3/explanation8.png"
        },
        {
          "image": "images/questions/tin/bai3/image9.png",
          "answer": "A",
          "explanationImage": "images/solutions/tin/bai3/explanation9.png"
        },
        {
          "image": "images/questions/tin/bai3/image10.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai3/explanation10.png"
        }
      ],
      bai4: [
        {
          "image": "images/questions/tin/bai4/image1.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai4/explanation1.png"
        },
        {
          "image": "images/questions/tin/bai4/image2.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation2.png"
        },
        {
          "image": "images/questions/tin/bai4/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai4/explanation3.png"
        },
        {
          "image": "images/questions/tin/bai4/image4.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation4.png"
        },
        {
          "image": "images/questions/tin/bai4/image5.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai4/explanation5.png"
        },
        {
          "image": "images/questions/tin/bai4/image6.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai4/explanation6.png"
        },
        {
          "image": "images/questions/tin/bai4/image7.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation7.png"
        },
        {
          "image": "images/questions/tin/bai4/image8.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation8.png"
        },
        {
          "image": "images/questions/tin/bai4/image9.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation9.png"
        },
        {
          "image": "images/questions/tin/bai4/image10.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai4/explanation10.png"
        }
      ],
      bai5: [
        {
          "image": "images/questions/tin/bai5/image1.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation1.png"
        },
        {
          "image": "images/questions/tin/bai5/image2.png",
          "answer": "A",
          "explanationImage": "images/solutions/tin/bai5/explanation2.png"
        },
        {
          "image": "images/questions/tin/bai5/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation3.png"
        },
        {
          "image": "images/questions/tin/bai5/image4.png",
          "answer": "A",
          "explanationImage": "images/solutions/tin/bai5/explanation4.png"
        },
        {
          "image": "images/questions/tin/bai5/image5.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation5.png"
        },
        {
          "image": "images/questions/tin/bai5/image6.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation6.png"
        },
        {
          "image": "images/questions/tin/bai5/image7.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation7.png"
        },
        {
          "image": "images/questions/tin/bai5/image8.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation8.png"
        },
        {
          "image": "images/questions/tin/bai5/image9.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai5/explanation9.png"
        },
        {
          "image": "images/questions/tin/bai5/image10.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai5/explanation10.png"
        }
      ],
      bai6: [
        {
          "image": "images/questions/tin/bai6/image1.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation1.png"
        },
        {
          "image": "images/questions/tin/bai6/image2.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai6/explanation2.png"
        },
        {
          "image": "images/questions/tin/bai6/image3.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation3.png"
        },
        {
          "image": "images/questions/tin/bai6/image4.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation4.png"
        },
        {
          "image": "images/questions/tin/bai6/image5.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation5.png"
        },
        {
          "image": "images/questions/tin/bai6/image6.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation6.png"
        },
        {
          "image": "images/questions/tin/bai6/image7.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation7.png"
        },
        {
          "image": "images/questions/tin/bai6/image8.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation8.png"
        },
        {
          "image": "images/questions/tin/bai6/image9.png",
          "answer": "B",
          "explanationImage": "images/solutions/tin/bai6/explanation9.png"
        },
        {
          "image": "images/questions/tin/bai6/image10.png",
          "answer": "C",
          "explanationImage": "images/solutions/tin/bai6/explanation10.png"
        }
      ],
    },
    dia: {
      bai1: [
        {
          image: "images/questions/dia/bai1/image1.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation1.png"
        },
        {
          image: "images/questions/dia/bai1/image2.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai1/explanation2.png"
        },
        {
          image: "images/questions/dia/bai1/image3.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation3.png"
        },
        {
          image: "images/questions/dia/bai1/image4.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation4.png"
        },
        {
          image: "images/questions/dia/bai1/image5.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai1/explanation5.png"
        },
        {
          image: "images/questions/dia/bai1/image6.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai1/explanation6.png"
        },
        {
          image: "images/questions/dia/bai1/image7.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation7.png"
        },
        {
          image: "images/questions/dia/bai1/image8.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai1/explanation8.png"
        },
        {
          image: "images/questions/dia/bai1/image9.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation9.png"
        },
        {
          image: "images/questions/dia/bai1/image10.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai1/explanation10.png"
        },
        {
          image: "images/questions/dia/bai1/image11.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation11.png"
        },
        {
          image: "images/questions/dia/bai1/image12.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation12.png"
        },
        {
          image: "images/questions/dia/bai1/image13.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai1/explanation13.png"
        },
        {
          image: "images/questions/dia/bai1/image14.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation14.png"
        },
        {
          image: "images/questions/dia/bai1/image15.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation15.png"
        },
        {
          image: "images/questions/dia/bai1/image16.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai1/explanation16.png"
        },
        {
          image: "images/questions/dia/bai1/image17.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation17.png"
        },
        {
          image: "images/questions/dia/bai1/image18.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai1/explanation18.png"
        },
        {
          image: "images/questions/dia/bai1/image19.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai1/explanation19.png"
        },
        {
          image: "images/questions/dia/bai1/image20.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai1/explanation20.png"
        }
      ],
      bai2: [
        {
          image: "images/questions/dia/bai2/image1.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation1.png"
        },
        {
          image: "images/questions/dia/bai2/image2.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation2.png"
        },
        {
          image: "images/questions/dia/bai2/image3.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation3.png"
        },
        {
          image: "images/questions/dia/bai2/image4.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation4.png"
        },
        {
          image: "images/questions/dia/bai2/image5.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation5.png"
        },
        {
          image: "images/questions/dia/bai2/image6.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation6.png"
        },
        {
          image: "images/questions/dia/bai2/image7.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai2/explanation7.png"
        },
        {
          image: "images/questions/dia/bai2/image8.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation8.png"
        },
        {
          image: "images/questions/dia/bai2/image9.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation9.png"
        },
        {
          image: "images/questions/dia/bai2/image10.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation10.png"
        },
        {
          image: "images/questions/dia/bai2/image11.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation11.png"
        },
        {
          image: "images/questions/dia/bai2/image12.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation12.png"
        },
        {
          image: "images/questions/dia/bai2/image13.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation13.png"
        },
        {
          image: "images/questions/dia/bai2/image14.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai2/explanation14.png"
        },
        {
          image: "images/questions/dia/bai2/image15.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai2/explanation15.png"
        },
        {
          image: "images/questions/dia/bai2/image16.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation16.png"
        },
        {
          image: "images/questions/dia/bai2/image17.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation17.png"
        },
        {
          image: "images/questions/dia/bai2/image18.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation18.png"
        },
        {
          image: "images/questions/dia/bai2/image19.png",
          answer: "A",
          explanationImage: "images/solutions/dia/bai2/explanation19.png"
        },
        {
          image: "images/questions/dia/bai2/image20.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation20.png"
        },
        {
          image: "images/questions/dia/bai2/image21.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation21.png"
        },
        {
          image: "images/questions/dia/bai2/image22.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation22.png"
        },
        {
          image: "images/questions/dia/bai2/image23.png",
          answer: "C",
          explanationImage: "images/solutions/dia/bai2/explanation23.png"
        },
        {
          image: "images/questions/dia/bai2/image24.png",
          answer: "B",
          explanationImage: "images/solutions/dia/bai2/explanation24.png"
        },
        {
          image: "images/questions/dia/bai2/image25.png",
          answer: "D",
          explanationImage: "images/solutions/dia/bai2/explanation25.png"
        }
      ],
      bai3: [
        {
          "image": "images/questions/dia/bai3/image1.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai3/explanation1.png"
        },
        {
          "image": "images/questions/dia/bai3/image2.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai3/explanation2.png"
        },
        {
          "image": "images/questions/dia/bai3/image3.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai3/explanation3.png"
        },
        {
          "image": "images/questions/dia/bai3/image4.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai3/explanation4.png"
        },
        {
          "image": "images/questions/dia/bai3/image5.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai3/explanation5.png"
        },
        {
          "image": "images/questions/dia/bai3/image6.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai3/explanation6.png"
        },
        {
          "image": "images/questions/dia/bai3/image7.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai3/explanation7.png"
        },
        {
          "image": "images/questions/dia/bai3/image8.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai3/explanation8.png"
        },
        {
          "image": "images/questions/dia/bai3/image9.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai3/explanation9.png"
        },
        {
          "image": "images/questions/dia/bai3/image10.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai3/explanation10.png"
        },
        { "image": "images/questions/dia/bai3/image11.png", "answer": "B", "explanationImage": "images/solutions/dia/bai3/explanation11.png" },
        { "image": "images/questions/dia/bai3/image12.png", "answer": "A", "explanationImage": "images/solutions/dia/bai3/explanation12.png" },
        { "image": "images/questions/dia/bai3/image13.png", "answer": "B", "explanationImage": "images/solutions/dia/bai3/explanation13.png" },
        { "image": "images/questions/dia/bai3/image14.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation14.png" },
        { "image": "images/questions/dia/bai3/image15.png", "answer": "B", "explanationImage": "images/solutions/dia/bai3/explanation15.png" },
        { "image": "images/questions/dia/bai3/image16.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation16.png" },
        { "image": "images/questions/dia/bai3/image17.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation17.png" },
        { "image": "images/questions/dia/bai3/image18.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation18.png" },
        { "image": "images/questions/dia/bai3/image19.png", "answer": "D", "explanationImage": "images/solutions/dia/bai3/explanation19.png" },
        { "image": "images/questions/dia/bai3/image20.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation20.png" },
        { "image": "images/questions/dia/bai3/image21.png", "answer": "B", "explanationImage": "images/solutions/dia/bai3/explanation21.png" },
        { "image": "images/questions/dia/bai3/image22.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation22.png" },
        { "image": "images/questions/dia/bai3/image23.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation23.png" },
        { "image": "images/questions/dia/bai3/image24.png", "answer": "C", "explanationImage": "images/solutions/dia/bai3/explanation24.png" },
        { "image": "images/questions/dia/bai3/image25.png", "answer": "D", "explanationImage": "images/solutions/dia/bai3/explanation25.png" }
      ],
      bai5: [
        {
          "image": "images/questions/dia/bai5/image1.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation1.png"
        },
        {
          "image": "images/questions/dia/bai5/image2.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai5/explanation2.png"
        },
        {
          "image": "images/questions/dia/bai5/image3.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation3.png"
        },
        {
          "image": "images/questions/dia/bai5/image4.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation4.png"
        },
        {
          "image": "images/questions/dia/bai5/image5.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation5.png"
        },
        {
          "image": "images/questions/dia/bai5/image6.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation6.png"
        },
        {
          "image": "images/questions/dia/bai5/image7.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai5/explanation7.png"
        },
        {
          "image": "images/questions/dia/bai5/image8.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation8.png"
        },
        {
          "image": "images/questions/dia/bai5/image9.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation9.png"
        },
        {
          "image": "images/questions/dia/bai5/image10.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation10.png"
        },
        {
          "image": "images/questions/dia/bai5/image11.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation11.png"
        },
        {
          "image": "images/questions/dia/bai5/image12.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation12.png"
        },
        {
          "image": "images/questions/dia/bai5/image13.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation13.png"
        },
        {
          "image": "images/questions/dia/bai5/image14.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation14.png"
        },
        {
          "image": "images/questions/dia/bai5/image15.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai5/explanation15.png"
        },
        {
          "image": "images/questions/dia/bai5/image16.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai5/explanation16.png"
        },
        {
          "image": "images/questions/dia/bai5/image17.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai5/explanation17.png"
        },
        {
          "image": "images/questions/dia/bai5/image18.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai5/explanation18.png"
        },
        {
          "image": "images/questions/dia/bai5/image19.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation19.png"
        },
        {
          "image": "images/questions/dia/bai5/image20.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai5/explanation20.png"
        }
      ],
      bai6: [
        { "image": "images/questions/dia/bai6/image1.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation1.png" },
        { "image": "images/questions/dia/bai6/image2.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation2.png" },
        { "image": "images/questions/dia/bai6/image3.png", "answer": "A", "explanationImage": "images/solutions/dia/bai6/explanation3.png" },
        { "image": "images/questions/dia/bai6/image4.png", "answer": "D", "explanationImage": "images/solutions/dia/bai6/explanation4.png" },
        { "image": "images/questions/dia/bai6/image5.png", "answer": "B", "explanationImage": "images/solutions/dia/bai6/explanation5.png" },
        { "image": "images/questions/dia/bai6/image6.png", "answer": "D", "explanationImage": "images/solutions/dia/bai6/explanation6.png" },
        { "image": "images/questions/dia/bai6/image7.png", "answer": "A", "explanationImage": "images/solutions/dia/bai6/explanation7.png" },
        { "image": "images/questions/dia/bai6/image8.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation8.png" },
        { "image": "images/questions/dia/bai6/image9.png", "answer": "B", "explanationImage": "images/solutions/dia/bai6/explanation9.png" },
        { "image": "images/questions/dia/bai6/image10.png", "answer": "B", "explanationImage": "images/solutions/dia/bai6/explanation10.png" },
        { "image": "images/questions/dia/bai6/image11.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation11.png" },
        { "image": "images/questions/dia/bai6/image12.png", "answer": "A", "explanationImage": "images/solutions/dia/bai6/explanation12.png" },
        { "image": "images/questions/dia/bai6/image13.png", "answer": "D", "explanationImage": "images/solutions/dia/bai6/explanation13.png" },
        { "image": "images/questions/dia/bai6/image14.png", "answer": "A", "explanationImage": "images/solutions/dia/bai6/explanation14.png" },
        { "image": "images/questions/dia/bai6/image15.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation15.png" },
        { "image": "images/questions/dia/bai6/image16.png", "answer": "D", "explanationImage": "images/solutions/dia/bai6/explanation16.png" },
        { "image": "images/questions/dia/bai6/image17.png", "answer": "B", "explanationImage": "images/solutions/dia/bai6/explanation17.png" },
        { "image": "images/questions/dia/bai6/image18.png", "answer": "A", "explanationImage": "images/solutions/dia/bai6/explanation18.png" },
        { "image": "images/questions/dia/bai6/image19.png", "answer": "C", "explanationImage": "images/solutions/dia/bai6/explanation19.png" },
        { "image": "images/questions/dia/bai6/image20.png", "answer": "D", "explanationImage": "images/solutions/dia/bai6/explanation20.png" }
      ],
      bai7: [
        {
          "image": "images/questions/dia/bai7/image1.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation1.png"
        },
        {
          "image": "images/questions/dia/bai7/image2.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai7/explanation2.png"
        },
        {
          "image": "images/questions/dia/bai7/image3.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation3.png"
        },
        {
          "image": "images/questions/dia/bai7/image4.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation4.png"
        },
        {
          "image": "images/questions/dia/bai7/image5.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai7/explanation5.png"
        },
        {
          "image": "images/questions/dia/bai7/image6.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation6.png"
        },
        {
          "image": "images/questions/dia/bai7/image7.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation7.png"
        },
        {
          "image": "images/questions/dia/bai7/image8.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation8.png"
        },
        {
          "image": "images/questions/dia/bai7/image9.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai7/explanation9.png"
        },
        {
          "image": "images/questions/dia/bai7/image10.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation10.png"
        },
        {
          "image": "images/questions/dia/bai7/image11.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai7/explanation11.png"
        },
        {
          "image": "images/questions/dia/bai7/image12.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai7/explanation12.png"
        },
        {
          "image": "images/questions/dia/bai7/image13.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation13.png"
        },
        {
          "image": "images/questions/dia/bai7/image14.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation14.png"
        },
        {
          "image": "images/questions/dia/bai7/image15.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation15.png"
        },
        {
          "image": "images/questions/dia/bai7/image16.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation16.png"
        },
        {
          "image": "images/questions/dia/bai7/image17.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation17.png"
        },
        {
          "image": "images/questions/dia/bai7/image18.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation18.png"
        },
        {
          "image": "images/questions/dia/bai7/image19.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai7/explanation19.png"
        },
        {
          "image": "images/questions/dia/bai7/image20.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai7/explanation20.png"
        }
      ],
      bai8: [
        {
          "image": "images/questions/dia/bai8/image1.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai8/explanation1.png"
        },
        {
          "image": "images/questions/dia/bai8/image2.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation2.png"
        },
        {
          "image": "images/questions/dia/bai8/image3.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai8/explanation3.png"
        },
        {
          "image": "images/questions/dia/bai8/image4.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation4.png"
        },
        {
          "image": "images/questions/dia/bai8/image5.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai8/explanation5.png"
        },
        {
          "image": "images/questions/dia/bai8/image6.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation6.png"
        },
        {
          "image": "images/questions/dia/bai8/image7.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai8/explanation7.png"
        },
        {
          "image": "images/questions/dia/bai8/image8.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai8/explanation8.png"
        },
        {
          "image": "images/questions/dia/bai8/image9.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai8/explanation9.png"
        },
        {
          "image": "images/questions/dia/bai8/image10.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai8/explanation10.png"
        },
        {
          "image": "images/questions/dia/bai8/image11.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation11.png"
        },
        {
          "image": "images/questions/dia/bai8/image12.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai8/explanation12.png"
        },
        {
          "image": "images/questions/dia/bai8/image13.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation13.png"
        },
        {
          "image": "images/questions/dia/bai8/image14.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai8/explanation14.png"
        },
        {
          "image": "images/questions/dia/bai8/image15.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai8/explanation15.png"
        },
        {
          "image": "images/questions/dia/bai8/image16.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai8/explanation16.png"
        },
        {
          "image": "images/questions/dia/bai8/image17.png",
          "answer": "B",
          "explanationImage": "images/solutions/dia/bai8/explanation17.png"
        },
        {
          "image": "images/questions/dia/bai8/image18.png",
          "answer": "D",
          "explanationImage": "images/solutions/dia/bai8/explanation18.png"
        },
        {
          "image": "images/questions/dia/bai8/image19.png",
          "answer": "C",
          "explanationImage": "images/solutions/dia/bai8/explanation19.png"
        },
        {
          "image": "images/questions/dia/bai8/image20.png",
          "answer": "A",
          "explanationImage": "images/solutions/dia/bai8/explanation20.png"
        }
      ],
    },
  };
