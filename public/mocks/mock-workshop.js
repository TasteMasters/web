let workshops = [
  {
    id: 1,
    title: "Workshop de Risotos",
    description: "Aprenda a preparar risotos deliciosos com técnicas profissionais e segredos transmitidos por gerações de chefs italianos. Neste curso exclusivo, você será imerso na arte e na ciência por trás de um dos pratos mais emblemáticos da culinária italiana. Desde a seleção dos ingredientes frescos e sazonais até a criação da base perfeita de caldo e o ponto exato de cozimento do arroz, cada passo será cuidadosamente explorado e aprimorado para garantir que você possa reproduzir em sua própria cozinha risotos que impressionam até os paladares mais exigentes. Além disso, você terá a oportunidade de aprender os segredos dos temperos e combinações de ingredientes que elevam o sabor e a textura de cada prato, transformando-os em verdadeiras obras de arte culinárias. Prepare-se para uma jornada sensorial e educativa que irá expandir seus horizontes gastronômicos e encantar seus convidados com o autêntico sabor da Itália.",
    category: "Culinária Italiana",
    difficulty: "Fácil",
    image: "/mocks/img/image-card.svg",
    start_date: '2024/05/10', 
    creator_id: 1,
    creator_experience: "Chef com 10 anos de experiência na culinária italiana.",
    ingredients: ["Arroz arbóreo", "Caldo de legumes", "Queijo parmesão", "Cogumelos", "Manteiga"],
    topics: [
      {
        topic_title: "Introdução ao Risoto",
        estimated_time: "30 minutos",
        topic_description: "Breve introdução sobre a origem e os princípios básicos do risoto.",
        video_link: "https://www.youtube.com/embed/Y4iWrQSv5Fg?si=gKe2zN8S5D7XMRgz",
        completed: false
      },
      {
        topic_title: "Preparação do Caldo de Legumes",
        estimated_time: "1 hora",
        topic_description: "Passo a passo para preparar um caldo de legumes caseiro.",
        video_link: "",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  },
  {
    id: 2,
    title: "Workshop de Sushi",
    description: "Bem-vindo à nossa experiência de aprendizado exclusiva, onde você terá a oportunidade de mergulhar no fascinante mundo da culinária japonesa e dominar a arte do sushi autêntico. Em nosso curso, você será guiado por renomados chefs japoneses, que compartilharão seus conhecimentos profundos e suas habilidades especializadas para criar sushi de classe mundial. Desde a seleção dos ingredientes frescos e de alta qualidade até a aplicação das técnicas tradicionais de preparo de arroz, corte de peixe e montagem dos rolos, cada aspecto do processo será cuidadosamente explorado e demonstrado. Você aprenderá a importância da precisão e da delicadeza na elaboração de cada peça de sushi, enquanto mergulha na rica tradição e cultura por trás dessa arte culinária milenar. Além disso, você terá a oportunidade de praticar suas habilidades sob a orientação atenta dos chefs, garantindo que você saia do curso com confiança para recriar essas delícias em sua própria cozinha. Prepare-se para uma jornada sensorial e educacional que irá transformar sua percepção sobre sushi e proporcionar uma experiência verdadeiramente memorável.",
    category: "Culinária Japonesa",
    difficulty: "Intermediário",
    image: "/mocks/img/image-card.svg",
    start_date: '10/05/2024', 
    creator_id: 2,
    creator_experience: "Sushiman com experiência em restaurantes japoneses renomados.",
    ingredients: ["Arroz para sushi", "Alga nori", "Peixe fresco", "Wasabi", "Gengibre em conserva"],
    topics: [
      {
        topic_title: "Preparação do Arroz para Sushi",
        estimated_time: "1 hora",
        topic_description: "Como preparar o arroz perfeito para sushi com vinagre de arroz e açúcar.",
        video_link: "https://www.youtube.com/watch?v=Y4iWrQSv5Fg",
        completed: false
      },
      {
        topic_title: "Corte de Peixe",
        estimated_time: "1 hora",
        topic_description: "Técnicas para cortar peixe para sushi em fatias uniformes.",
        video_link: "https://www.youtube.com/watch?v=tgZw9UFP3tI",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  },
  {
    id: 3,
    title: "Workshop de Pizza Napoletana",
    description: "Aprenda a fazer pizzas autênticas napolitanas com massa leve e ingredientes frescos.",
    category: "Culinária Italiana",
    difficulty: "Intermediário",
    image: "/mocks/img/image-card.svg",
    start_date: '10/05/2024',
    creator_id: 2,
    creator_experience: "Pizzaiolo com experiência em pizzarias italianas reconhecidas.",
    ingredients: ["Farinha tipo 00", "Tomate San Marzano", "Mozzarella di Bufala", "Manjericão fresco", "Azeite de oliva extra virgem"],
    topics: [
      {
        topic_title: "Preparo da Massa",
        estimated_time: "2 horas",
        topic_description: "Passo a passo para preparar uma massa de pizza napolitana autêntica.",
        video_link: "url_video_5",
        completed: false
      },
      {
        topic_title: "Montagem da Pizza",
        estimated_time: "30 minutos",
        topic_description: "Como montar e assar a pizza de maneira tradicional napolitana.",
        video_link: "url_video_6",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  },
  {
    id: 4,
    title: "Workshop de Churrasco Gaúcho",
    description: "Aprenda a preparar cortes de carne suculentos no estilo tradicional gaúcho.",
    category: "Culinária Brasileira",
    difficulty: "Difícil",
    image: "/mocks/img/image-card.svg",
    start_date: '10/05/2024',
    creator_id: 1,
    creator_experience: "Churrasqueiro com anos de experiência em eventos e competições de churrasco.",
    ingredients: ["Picanha", "Costela de boi", "Asa de frango", "Linguicinha", "Sal grosso"],
    topics: [
      {
        topic_title: "Preparação das Carnes",
        estimated_time: "4 horas",
        topic_description: "Dicas e truques para temperar e preparar cortes de carne para o churrasco.",
        video_link: "url_video_7",
        completed: false
      },
      {
        topic_title: "Técnicas de Churrasco",
        estimated_time: "2 horas",
        topic_description: "Técnicas avançadas para assar as carnes na churrasqueira e atingir o ponto certo.",
        video_link: "url_video_8",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  },
  {
    id: 5,
    title: "Workshop de Pâtisserie Francesa",
    description: "Aprenda a fazer sobremesas requintadas da culinária francesa, como macarons e éclairs.",
    category: "Culinária Francesa",
    difficulty: "Intermediário",
    image: "/mocks/img/image-card.svg",
    start_date: '10/05/2024',
    creator_id: 1,
    creator_experience: "Pâtissier com formação em Paris e experiência em confeitarias renomadas.",
    ingredients: ["Farinha de amêndoas", "Chocolate Valrhona", "Manteiga de alta qualidade", "Creme de leite fresco", "Frutas frescas"],
    topics: [
      {
        topic_title: "Preparo da Massa de Macaron",
        estimated_time: "2 horas",
        topic_description: "Passo a passo para preparar a massa delicada dos famosos macarons franceses.",
        video_link: "url_video_9",
        completed: false
      },
      {
        topic_title: "Decoração de Éclairs",
        estimated_time: "1 hora",
        topic_description: "Técnicas de decoração para deixar as éclairs ainda mais irresistíveis.",
        video_link: "url_video_10",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  },
  {
    id: 6,
    title: "Workshop de Coquetelaria Molecular",
    description: "Explore o mundo da coquetelaria com técnicas inovadoras e ingredientes surpreendentes.",
    category: "Coquetelaria",
    difficulty: "Difícil",
    image: "/mocks/img/image-card.svg",
    start_date: '10/05/2024',
    creator_id: 2,
    creator_experience: "Mixologista premiado em competições internacionais de coquetelaria molecular.",
    ingredients: ["Espumas", "Caviar de coquetel", "Esferas de gelo aromatizadas", "Nitrogênio líquido", "Extratos e essências concentradas"],
    topics: [
      {
        topic_title: "Técnicas de Espumas",
        estimated_time: "1 hora",
        topic_description: "Como criar espumas leves e aromáticas para adicionar textura aos coquetéis.",
        video_link: "url_video_11",
        completed: false
      },
      {
        topic_title: "Preparo de Esferificações",
        estimated_time: "2 horas",
        topic_description: "Passo a passo para criar esferas líquidas com sabores intensos e surpreendentes.",
        video_link: "url_video_12",
        completed: false
      },
      // Adicione mais tópicos conforme necessário
    ],
  }
];

let count = workshops.length;

function getAllWorkshops() {
  return workshops;
}

function getWorkshop(id) {
  return workshops.find((workshop) => workshop.id === id);
}

function createWorkshop(newWorkshop) {
  const id = count + 1;
  const workshopWithId = { ...newWorkshop, id };
  workshops.push(workshopWithId);
  return id;
}

function updateWorkshop(id, updatedWorkshop) {
  const index = workshops.findIndex((workshop) => workshop.id === id);
  if (index !== -1) {
    const currentWorkshop = workshops[index];
    const updatedValues = { ...currentWorkshop, ...updatedWorkshop };

    // Verifica se algum valor no objeto de atualização está nulo ou vazio e mantém as informações anteriores
    for (const key in updatedValues) {
      if (updatedValues[key] === null || updatedValues[key] === '') {
        updatedValues[key] = currentWorkshop[key];
      }
    }

    workshops[index] = updatedValues;
    return true;
  }
  return false;
}

function deleteWorkshop(id) {
  const index = workshops.findIndex((workshop) => workshop.id === id);
 
  if (index !== -1) {
    workshops.splice(index, 1);
    return true;
  }

  return false;
}

export { getAllWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop };