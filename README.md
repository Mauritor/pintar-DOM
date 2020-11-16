## Pintar el DOM

>html
```html
    <div class="row my-5" id="lista-users"></div>

        <template id="template-user">
            <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3 mb-3">
                <div class="card">
                    <img src="" alt="" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"><span></span></p>
                    </div>
                 </div>
            </div>
        </template>
```
>js
```javascript
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

```
## Example
![Example](https://res.cloudinary.com/dhaqermou/image/upload/v1605531768/Dar-Ip/k31iaikml812hvldr5rv.png)