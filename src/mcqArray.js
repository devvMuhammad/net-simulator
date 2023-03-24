const mcqArray = [
  {
    subject: "Mathematics",
    questions: [
      {
        question: "What is the derivative of x^2?",
        options: ["2x", "10x", "0", "None of these"],
        answer: "2x",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the value of pi?",
        options: ["3.14", "22/7", "4", "None of these"],
        answer: "3.14",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the value of log(1)?",
        options: ["0", "1", "infinity", "None of these"],
        answer: "0",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the square root of 64?",
        options: ["4", "8", "16", "None of these"],
        answer: "8",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["90 degrees", "180 degrees", "360 degrees", "None of these"],
        answer: "180 degrees",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "If a, b, and c are the lengths of the sides of a triangle, then which of the following is true?",
        options: ["a+b>c", "a+c>b", "b+c>a", "All of the above"],
        answer: "All of the above",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If f(x) = x^3 - 3x^2 - 4x + 12, what is f(2)?",
        options: ["-2", "2", "10", "12"],
        answer: "10",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If loga(5) = p and loga(25) = q, what is the value of p + q?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If the roots of the equation x^2 + bx + c = 0 are -3 and -4, what is the value of c?",
        options: ["-7", "7", "-12", "12"],
        answer: "-12",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "If sin(x) = 1/2 and cos(x) = √3/2, what is tan(x)?",
        options: ["1", "√3", "2", "-√3"],
        answer: "√3",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If A = {(x,y) | x + y = 0}, B = {(x,y) | x - y = 0}, and C = {(x,y) | x + y = 2}, which of the following is true?",
        options: ["A ⊆ B", "A ⊂ B", "A = C", "B ⊂ C"],
        answer: "A ⊂ B",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the inverse of the matrix [1 2; 3 4]?",
        options: [
          "[4 -2; -3 1]",
          "[1/4 -1/2; -3/4 1/2]",
          "[4 2; 3 1]",
          "[-1/4 1/2; 3/4 -1/2]",
        ],
        answer: "[-2 1; 3/2 -1/2]",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the value of the expression (2x + 3y)^2 - (2x - 3y)^2?",
        options: ["24xy", "20xy", "12xy", "18xy"],
        answer: "24xy",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the sum of the first 20 terms of the arithmetic sequence -3, -1, 1, ...?",
        options: ["-400", "400", "0", "200"],
        answer: "0",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Physics",
    questions: [
      {
        question: "What is the formula for force?",
        options: ["F = ma", "F = mgh", "F = kx", "None of these"],
        answer: "F = ma",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Newtons", "Joules", "Watts", "None of these"],
        answer: "Newtons",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Newtons", "Joules", "Watts", "None of these"],
        answer: "Newtons",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: [
          "299,792,458 m/s",
          "3,000,000 m/s",
          "30,000 m/s",
          "None of these",
        ],
        answer: "299,792,458 m/s",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["KE = 0.5mv^2", "KE = mgh", "KE = Fd", "None of these"],
        answer: "KE = 0.5mv^2",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the first law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed",
          "Entropy always increases",
          "Heat flows from hot to cold",
          "None of these",
        ],
        answer: "Energy cannot be created or destroyed",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question:
          "Which one of the following materials has the highest electrical conductivity?",
        options: ["Copper", "Silver", "Gold", "Aluminum"],
        answer: "Silver",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one of the following is NOT a unit of power?",
        options: ["Joule/second", "Watt", "Horsepower", "Joule/meter"],
        answer: "Joule/meter",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following statements about diffraction is FALSE?",
        options: [
          "It occurs when light passes through a narrow slit",
          "It is responsible for the color patterns seen in a CD",
          "It can be used to measure the size of an object",
          "It only occurs with sound waves",
        ],
        answer: "It only occurs with sound waves",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the magnitude of the magnetic field at the center of a circular coil carrying a current I?",
        options: ["μ₀I/2R", "μ₀I/4R", "μ₀I/R", "μ₀IR/2"],
        answer: "μ₀I/2R",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following statements about the photoelectric effect is FALSE?",
        options: [
          "It was explained by Albert Einstein in 1905",
          "It can be used to measure the frequency of light",
          "It occurs when light is shone on a metal surface",
          "It is caused by the emission of electrons from the metal surface",
        ],
        answer:
          "It is caused by the emission of electrons from the metal surface",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the ratio of the mass of a proton to the mass of an electron?",
        options: ["1:1", "1:1836", "1836:1", "1:0"],
        answer: "1836:1",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the speed of sound in air at 20°C?",
        options: ["343 m/s", "330 m/s", "300 m/s", "290 m/s"],
        answer: "343 m/s",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which one of the following is NOT a type of radioactive decay?",
        options: ["Alpha decay", "Beta decay", "Gamma decay", "Delta decay"],
        answer: "Delta decay",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which one of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Energy"],
        answer: "Energy",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the work done by a force of 10 N acting on an object that moves 5 m in the direction of the force?",
        options: ["5 J", "10 J", "50 J", "100 J"],
        answer: "50 J",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Chemistry",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "None of these"],
        answer: "Au",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the formula for water?",
        options: ["H2O", "CO2", "NaCl", "None of these"],
        answer: "H2O",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is Avogadro's number?",
        options: ["6.022 x 10^23", "3.14159", "9.81", "None of these"],
        answer: "6.022 x 10^23",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["7", "0", "14", "None of these"],
        answer: "7",
        category: "unattempted",
        selectedOption: "",
      },
      {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "None of these"],
        answer: "Nitrogen",
        category: "unattempted",
        selectedOption: "",
      },
    ],
  },
  {
    subject: "Intelligence",
    questions: [
      {
        question:
          "If CHAIR is coded as FHDOU, then what is the code for TABLE?",
        options: ["WDOUH", "YFDOU", "WDRQJ", "YHJUL"],
        correctOption: "WDRQJ",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the next number in the sequence: 1, 2, 4, 7, 11, 16, ...",
        options: ["22", "23", "24", "25"],
        correctOption: "23",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ...",
        options: ["20", "21", "22", "23"],
        correctOption: "21",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If PURPLE is coded as SVUNQF, then what is the code for ORANGE?",
        options: ["QSPCWH", "QSPBNG", "PRTGFD", "PSUDMF"],
        correctOption: "QSPCWH",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find odd one out:",
        options: ["cat", "dog", "cow", "lion"],
        correctOption: "cow",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find odd one out:",
        options: ["piano", "violin", "trumpet", "cello", "guitar"],
        correctOption: "trumpet",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
];

export default mcqArray;
