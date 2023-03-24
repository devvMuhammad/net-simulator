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
      {
        question: "Find the argument of the complex number (1 + i)^5.",
        options: ["pi/4", "pi/2", "3pi/4", "pi"],
        answer: "pi/4",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which conic section is obtained when a plane intersects a double cone and the plane is parallel to one of the cones?",
        options: ["ellipse", "parabola", "hyperbola", "circle"],
        answer: "circle",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If a + b + c = 3, then what is the minimum value of (a^2 + 1)(b^2 + 1)(c^2 + 1)?",
        options: ["2", "3", "8", "5"],
        answer: "8",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If the arithmetic mean of two positive numbers is 6 and the geometric mean is 4, then what is the larger number?",
        options: ["8", "9", "10", "11"],
        answer: "8",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Evaluate the integral of x^3/(1+x^2)^2 with respect to x.",
        options: [
          "-x/(1+x^2) + C",
          "1/2 ln(1+x^2) + C",
          "-1/2 ln(1+x^2) + C",
          "-1/2 tan^-1(x) + C",
        ],
        answer: "-x/(1+x^2) + C",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the Maclaurin series expansion of sin(x)?",
        options: [
          "x - x^3/3! + x^5/5! - x^7/7! + ...",
          "1 - x^2/2! + x^4/4! - x^6/6! + ...",
          "x + x^3/3! + x^5/5! + x^7/7! + ...",
          "None of the above",
        ],
        answer: "x - x^3/3! + x^5/5! - x^7/7 + ...",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the equation of the line passing through the point (3, -2, 1) and parallel to the vector <2, 1, -3>?",
        options: [
          "2x + y - 3z = 13",
          "2x + y - 3z = -13",
          "2x + y - 3z = -19",
          "None of the above",
        ],
        answer: "2x + y - 3z = 13",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Find the standard form of the equation of a parabola with vertex at (1, -3) and focus at (1, -5).",
        options: [
          "(y+3)^2 = 4(x-1)",
          "(x-1)^2 = 4(y+3)",
          "(y+3)^2 = -4(x-1)",
          "None of the above",
        ],
        answer: "(y+3)^2 = 4(x-1)",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "For which values of x is the function f(x) = (x^2-4)/(x-2) continuous?",
        options: ["x = 0", "x = 1", "x = 2", "x = 4"],
        answer: "x = 2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the limit of the function f(x) = (x^2-1)/(x-1) as x approaches 1?",
        options: ["2", "0", "Does not exist", "Infinity"],
        answer: "2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If the probability of an event is 0.3, what is the probability of its complement?",
        options: [
          "0.3",
          "0.7",
          "1.0",
          "Cannot be determined",
          "None of the above",
        ],
        answer: "0.7",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In how many ways can a committee of 4 be chosen from 10 people?",
        options: ["210", "840", "5040", "None of the above"],
        answer: "210",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          'In how many ways can the letters of the word "BANANA" be arranged?',
        options: ["60", "120", "360", "None of the above"],
        answer: "60",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Find the angle between the vectors a = i + 2j and b = 2i + j.",
        options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
        answer: "45 degrees",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Find the equation of the hyperbola with vertices at (0, ±5) and foci at (0, ±√29).",
        options: [
          "y^2/25 - x^2/16 = 1",
          "x^2/25 - y^2/16 = 1",
          "y^2/16 - x^2/25 = 1",
          "x^2/16 - y^2/25 = 1",
        ],
        answer: "y^2/16 - x^2/25 = 1",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Determine the values of a and b for which the function f(x) = {ax+b, x<2; 3x-2, x>=2} is continuous at x=2.",
        options: ["a=3, b=4", "a=1, b=-1", "a=1, b=4", "a=3, b=-2"],
        answer: "a=1, b=-1",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find the limit lim x->∞ (x^2 - 5x + 6)/(2x^2 + 3x - 2).",
        options: ["1/2", "3/4", "1", "2"],
        answer: "1/2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "A fair die is rolled. What is the probability that the result is a prime number?",
        options: ["1/2", "1/3", "2/3", "1/6"],
        answer: "1/2",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In how many ways can 3 people be chosen from 5 to form a committee?",
        options: ["5", "8", "10", "15"],
        answer: "10",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In how many ways can the letters of the word APPLE be arranged?",
        options: ["60", "120", "240", "360"],
        answer: "60",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "In how many ways can 4 boys and 3 girls be seated in a row if the girls must sit together?",
        options: ["144", "288", "5040", "1440"],
        answer: "1440",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Find the equation of the circle passing through (2,1) and touching the line 2x+3y-4=0 at (1,-1).",
        options: [
          "x^2+y^2-6x-2y+5=0",
          "x^2+y^2+6x+2y-5=0",
          "x^2+y^2+6x+2y+5=0",
          "x^2+y^2-6x-2y-5=0",
        ],
        answer: "x^2+y^2-6x-2y+5=0",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the coefficient of x^3 in the expansion of (1+2x)^5?",
        options: ["40", "80", "100", "120"],
        answer: "40",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the probability of getting at least one head when three fair coins are flipped simultaneously?",
        options: ["1/8", "3/8", "5/8", "7/8"],
        answer: "7/8",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the limit of (x^3 - 2x^2 + x) / (x^2 - 3x + 2) as x approaches 2?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "India and Pakistan are playing a cricket match at the MCG. The probability of Pakistan not losing is:",
        options: ["1/2", "2/3", "1", "0"],
        answer: "2/3",
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
      {
        question:
          "What is the direction of the magnetic field lines produced by a current-carrying wire?",
        options: [
          "Circular around the wire",
          "Radial from the wire",
          "Tangential to the wire",
          "Longitudinal along the wire",
        ],
        answer: "Circular around the wire",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What happens to the force between two charges when the distance between them is tripled?",
        options: [
          "It becomes 9 times smaller",
          "It becomes 3 times smaller",
          "It becomes 1/3 times smaller",
          "It remains the same",
        ],
        answer: "It becomes 1/3 times smaller",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the SI unit of electric field?",
        options: ["Coulomb", "Volt", "Watt", "Newton/Coulomb"],
        answer: "Newton/Coulomb",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the cause of the magnetic field produced by a moving charged particle?",
        options: [
          "The electric field of the particle",
          "The charge of the particle",
          "The motion of the particle",
          "The mass of the particle",
        ],
        answer: "The motion of the particle",
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
      {
        question: "Which of the following has the highest boiling point?",
        options: ["CH4", "C2H6", "C3H8", "C4H10"],
        correctOption: "C4H10",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "What is the oxidation state of sulphur in H2SO4?",
        options: ["+6", "+4", "+2", "-2"],
        correctOption: "+6",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Which of the following compounds has the lowest boiling point?",
        options: ["CH3OH", "C2H5OH", "C3H7OH", "C4H9OH"],
        correctOption: "CH3OH",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
  {
    subject: "Intelligence",
    questions: [
      {
        question:
          "What is the next number in the sequence: 1, 2, 4, 7, 11, 16, ...",
        options: ["22", "23", "24", "25"],
        answer: "23",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ...",
        options: ["20", "21", "22", "23"],
        answer: "21",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "If PURPLE is coded as SVUNQF, then what is the code for ORANGE?",
        options: ["QSPCWH", "QSPBNG", "PRTGFD", "PSUDMF"],
        answer: "QSPCWH",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find odd one out:",
        options: ["cat", "dog", "cow", "lion"],
        answer: "cow",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Find odd one out:",
        options: ["piano", "violin", "trumpet", "cello"],
        answer: "trumpet",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question: "Which of the following is an isomer of butane?",
        options: ["methane", "ethene", "propane", "2-methylpropane"],
        answer: "2-methylpropane",
        selectedOption: "",
        category: "unattempted",
      },
      {
        question:
          "Consider the following reaction: N2(g) + 3H2(g) ⇌ 2NH3(g) + heat. What happens to the concentration of NH3 when the pressure of the system is increased?",
        options: [
          "The concentration of NH3 increases",
          "The concentration of NH3 decreases",
          "The concentration of NH3 remains unchanged",
          "The concentration of NH3 increases or decreases depending on the initial concentration of the reactants and products",
        ],
        answer:
          "The concentration of NH3 increases or decreases depending on the initial concentration of the reactants and products",
        selectedOption: "",
        category: "unattempted",
      },
    ],
  },
];

export default mcqArray;
