let users = ["Pedro", "Ana", "Joana", "Diego","Davi Messias", "Cristiano"];
let searchUser = prompt("Digite o nome do usuario que dseja buscar: ")
if (searchUser == ""){
    console.log("Não pode enviar em branco! ");
}
else{
    let user = users.filter (user => user.toLowerCase().includes(searchUser.toLowerCase().trim()
    ));



if(user.legth == 0){
    console.log("Usuário no foud! ");

}

else{
    console.log("Usuário encontrado "+user);
    let index = users.indexOf(user);
    users[index] = "novo valor";

    users.forEach (elemennt =>{
        console.log(elemennt)
    });
}}