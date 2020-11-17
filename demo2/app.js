addEventListener('DOMContentLoaded', () => {
    getDatos();
})
const url = 'http://jsonplaceholder.typicode.com/users'
const getDatos = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    showDatos(data);
}

const list = document.querySelector('#listado')
const showDatos = (data) => {
    const template = document.querySelector('#card-template').content;
    const fragment = new DocumentFragment();

    data.forEach(item => {
        template.querySelector('.card-header').textContent = item.name;
        template.querySelector('.card-title').textContent = item.username;
        template.querySelector('p').textContent = item.email;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    })
    list.appendChild(fragment);
}