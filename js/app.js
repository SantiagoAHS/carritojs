const listaCursos = document.querySelector('#lista-cursos');

let carrito =[];

function getCurso(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('agregar-carrito')){
        const item={}
        item.id= e.target.getAttribute('data-id');
        const padre =e.target.parentElement;
        item.name = padre.querySelector('h4').innerText;
        item.price = padre.querySelector('p span').innerText;
        item.image = padre.parentElement.querySelector('img').src;
        item.cantity = 1;
        //verifica si el objeto existe en el carrito
        if(carrito.some(itemCarrto => item.id === itemCarrto.id)){
            carrito = carrito.map(itemCarrto =>{
                if(itemCarrto.id === item.id){
                    itemCarrto.cantity++;
                    return itemCarrto;
                }else{
                    return itemCarrto;
                }
            })
        }else{
            carrito.push(item);
        }
        console.log(carrito);
    }
}

listaCursos.addEventListener('click', getCurso)