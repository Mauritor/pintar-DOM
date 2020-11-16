document.addEventListener('DOMContentLoaded', (e) => {
    getDatos();
})
const getDatos = async () => {
    const res = await fetch('api.json');
    const data = await res.json();
    console.log(data);
    pintarUsuarios(data)
}

const listaUsuarios = document.querySelector("#lista-users");

const pintarUsuarios = (data) => { 
    const template = document.querySelector("#template-user").content;
    const fragment = new DocumentFragment();
    data.forEach((user) => {
        template.querySelector("img").setAttribute("src", user.img);
        template.querySelector("h5").textContent = user.name;
        template.querySelector(".card-text span").textContent = user.edad;
        
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
      });
      listaUsuarios.appendChild(fragment);
}




