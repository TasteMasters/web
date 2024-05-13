let receitas = [
    {
        image: 'lasanha.jpg',
        title: 'Lasanha Clássica de Carne',
        description: 'Uma deliciosa e reconfortante lasanha clássica de carne perfeita para jantares em família.',
        category: 'Culinária Italiana',
        estimated_time_minutes: 90,
        average_cost_reais: 40,
        serving_size: 8,
        ingredients: ['Carne moída', 'Massa de lasanha', 'Molho de tomate', 'Queijo ricota', 'Queijo muçarela', 'Queijo parmesão', 'Cebola', 'Alho', 'Tempero italiano'],
        preparation: '1. Doure a carne moída com cebola e alho.\n2. Adicione molho de tomate e tempero italiano à carne.\n3. Faça camadas de massa de lasanha, molho de carne, queijo ricota e queijo muçarela em um refratário.\n4. Repita as camadas até acabarem os ingredientes.\n5. Cubra com queijo parmesão e leve ao forno até ficar borbulhante e dourado.',
    },
    {
        image: 'sushi.jpg',
        title: 'Rolinhos de Sushi Caseiro',
        description: 'Faça seus próprios rolinhos de sushi deliciosos e frescos em casa com esta receita fácil de seguir.',
        category: 'Culinária Japonesa',
        estimated_time_minutes: 60,
        average_cost_reais: 25,
        serving_size: 4,
        ingredients: ['Arroz para sushi', 'Alga nori', 'Peixe fresco (por exemplo, salmão, atum)', 'Pepino', 'Abacate', 'Molho de soja', 'Wasabi', 'Gari'],
        preparation: '1. Cozinhe o arroz para sushi de acordo com as instruções da embalagem e deixe esfriar.\n2. Coloque uma folha de alga nori em uma esteira de bambu para sushi.\n3. Espalhe uma camada fina de arroz sobre a folha de nori.\n4. Adicione o peixe, pepino e abacate sobre o arroz.\n5. Enrole o sushi firmemente usando a esteira de bambu.\n6. Corte o rolo de sushi em pedaços pequenos.\n7. Sirva com molho de soja, wasabi e gari.',
    },
];

function getAllRevenues() {
    return receitas;
}

function getRevenue(title) {
    return receitas.find(receita => receita.title === title);
}

function createRevenue(newRevenue) {
    receitas.push(newRevenue);
}

function updateRevenue(title, updatedRevenue) {
    const index = receitas.findIndex(receita => receita.title === title);
    if (index !== -1) {
        receitas[index] = { ...receitas[index], ...updatedRevenue };
        return true;
    }
    return false;
}

function deleteRevenue(title) {
    const index = receitas.findIndex(receita => receita.title === title);
    if (index !== -1) {
        receitas.splice(index, 1);
        return true;
    }
    return false;
}

export {
    getAllRevenues,
    getRevenue,
    createRevenue,
    updateRevenue,
    deleteRevenue
}