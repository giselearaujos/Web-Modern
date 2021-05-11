// O ponto acessa um atributo, membros 
// Através do ponto depois do object Math é possivel acessar a função ceil
console.log(Math.ceil(8.2));

const obj = {}
obj.name = 'Omar';
obj.age = 25;
console.log(obj);
console.log(obj.name);

function AddObject(name){
    this.name = name;
}

const AddObject1 = new AddObject('Garfo');
const AddObject2 = new AddObject('Faca');
console.log(AddObject1.name);
console.log(AddObject2.name);
