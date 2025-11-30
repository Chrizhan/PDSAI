// JavaScript Example: Reading Entities
// Filterable fields: 
async function fetchEntityNameEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/692b112e5932d605476bd354/entities/EntityName`, {
        headers: {
            'api_key': '5e830659a310460b8e8859360706d219', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Render!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// JavaScript Example: Updating an Entity
// Filterable fields: 
async function updateEntityNameEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/692b112e5932d605476bd354/entities/EntityName/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '5e830659a310460b8e8859360706d219', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}
