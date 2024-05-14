let users = [
    {
        id: 1,
        name: 'João da silva',
        specialization: 'Chef Especialista em Culinária Italiana',
        description: 'Minha paixão pela culinária italiana começou quando eu era apenas uma criança, ajudando minha avó na cozinha enquanto ela preparava pratos tradicionais que há gerações faziam parte da nossa família.',
        workshops_started: [ 2 ],
        created_workshops: [ 1, 2 ],
        image: '/mocks/img/chef.png',
    },
    {
        id: 2,
        name: 'Giovanni Rossi',
        specialization: 'Chef Especialista em Culinária Italiana',
        description: 'Minha paixão pela culinária italiana começou quando eu era apenas uma criança, ajudando minha avó na cozinha enquanto ela preparava pratos tradicionais que há gerações faziam parte da nossa família. ',
        workshops_started: [ 1, 2 ],
        created_workshops: [  ],
        image: '/mocks/img/chef.png',
    }
]

function getAllUsers() {
    return users;
}

function getUser(userId) {
    return users.find(user => user.id === userId);
}

function createUser(newUser) {
    users.push(newUser);
    return newUser;
}

function updateUser(userId, updatedUser) {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    } else {
        return null; // Retorna null se o usuário não for encontrado
    }
}

function deleteUser(userId) {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        return deletedUser[0];
    } else {
        return null; // Retorna null se o usuário não for encontrado
    }
}

export { getAllUsers, getUser, createUser, updateUser, deleteUser }