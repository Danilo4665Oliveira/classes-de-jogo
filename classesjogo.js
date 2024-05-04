class Heroi {
  constructor(nome,idade,tipo){
  this.nome= nome;
  this.idade= idade;
  this.tipo= tipo;
  }
  
  atacar(){
    let ataque;
    switch(this.tipo){
      case "Mago":
        ataque ='Usou magia';
        break
      case "Guerreiro":
        ataque ='Usou espada';
        break;
      case"Monge":
      ataque ='Usou artes marciais';
      break;
      case"Ninja":
      ataque ='Usou Shuriken';
      break;  
    }
  console.log(this.nome +" o " +this.tipo+ " atacou usando "+ ataque);
  }
}

const heroi1= new Heroi("Danilo",21, 'Ninja');
heroi1.atacar();

