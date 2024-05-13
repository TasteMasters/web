let desafios = [
  {
    title: "Dominando a Fabricação de Massas",
    category: "Culinária Italiana",
    estimated_time_minutes: 120,
    average_cost_reais: 30,
    serving_size: 4,
    description:
      "Aprenda a fazer vários tipos de massas do zero como um chef profissional.",
    ingredients: ["Farinha", "Ovos", "Azeite", "Sal"],
    preparation:
      "1. Misture a farinha e os ovos para formar uma massa.\n2. Amasse a massa até ficar lisa.\n3. Abra a massa e corte no formato desejado.\n4. Cozinhe em água fervente até ficar al dente.\n5. Sirva com o seu molho favorito.",
    result_image: "massas_resultado.jpg",
  },
  {
    title: "Assando o Pão de Sourdough Perfeito",
    category: "Panificação",
    estimated_time_minutes: 180,
    average_cost_reais: 20,
    serving_size: 6,
    description:
      "Aprenda a arte de assar pão de sourdough do zero usando fermentação natural e técnicas de fermentação.",
    ingredients: ["Farinha", "Água", "Sal", "Fermento Sourdough"],
    preparation:
      "1. Misture farinha, água, sal e fermento sourdough.\n2. Deixe a massa fermentar por várias horas.\n3. Modele a massa e deixe crescer.\n4. Asse em um forno pré-aquecido até dourar.\n5. Aproveite o aroma e o sabor do pão de sourdough recém-assado!",
    result_image: "pao_sourdough_resultado.jpg",
  },
];

function getAllChallenges() {
  return desafios;
}

function getChallenge(title) {
  return desafios.find((desafio) => desafio.title === title);
}

function createChallenge(newChallenge) {
  desafios.push(newChallenge);
}

function updateChallenge(title, updatedChallenge) {
  const index = desafios.findIndex((desafio) => desafio.title === title);
  if (index !== -1) {
    desafios[index] = { ...desafios[index], ...updatedChallenge };
    return true;
  }
  return false;
}

function deleteChallenge(title) {
  const index = desafios.findIndex((desafio) => desafio.title === title);
  if (index !== -1) {
    desafios.splice(index, 1);
    return true;
  }
  return false;
}

export {
  getAllChallenges,
  getChallenge,
  createChallenge,
  updateChallenge,
  deleteChallenge,
};
