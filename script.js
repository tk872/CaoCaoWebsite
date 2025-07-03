document.addEventListener('DOMContentLoaded', function() {
    // ຟັງຊັນການເລື່ອນໜ້າແບບລຽບນຽນ
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function checkAnswers() {
    const answers = {
        q1: 'c', // ລາຊະວົງຮັ່ນຕາເວັນອອກ
        q2: 'b', // ການຮົບທີ່ກວນຕູ
        q3: 'c'  // ລັດເວີ່ຍ
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackElement = document.getElementById(`feedback${i}`);

        if (selectedAnswer) {
            if (selectedAnswer.value === answers[questionName]) {
                score++;
                feedbackElement.textContent = 'ຖືກຕ້ອງ!';
                feedbackElement.className = 'feedback correct';
            } else {
                feedbackElement.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກແມ່ນ ${answers[questionName].toUpperCase()}.`;
                feedbackElement.className = 'feedback incorrect';
            }
        } else {
            feedbackElement.textContent = 'ກະລຸນາເລືອກຄຳຕອບ.';
            feedbackElement.className = 'feedback incorrect';
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `ທ່ານໄດ້ຄະແນນ ${score} ຈາກ ${totalQuestions} ຄຳຖາມ!`;
}
