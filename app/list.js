import './list.scss'

const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4' }
];

const tableBody = document.getElementById('tableBody');

items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>
            <button class="btn btn-warning btn-sm me-2">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
});

function deleteItem(id) {
    alert(`Delete item with ID: ${id}`);
}