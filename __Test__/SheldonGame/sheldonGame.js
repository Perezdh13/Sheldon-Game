//var opciones = [piedra,papel,tijeras,lagarto,spock]
var opciones =[0,1,2,3,4];


function compara(a,b){
 //usuario a escoge piedra
  if (a == 0){
    if(b == 1){ //usuario b escoge papel
      return "gana papel"; 
    }else{
      if(b == 2){//usuario b escoge tijeras
        return "gana piedra";
      }else{
        if(b == 3){//usuario b escoge lagarto
          return "gana lagarto";
        }else{
          if(b == 4){//usuario b escoge spock
            return "gana spock";
          }
        }
      }

    }
    
  }

//usuario a escoge papel
  if (a == 1){
  if(b == 0){ //usuario b escoge piedra
    return "gana papel"; 
  }else{
    if(b == 2){//usuario b escoge tijeras
      return "gana piedra";
    }else{
      if(b == 3){//usuario b escoge lagarto
        return "gana lagarto";
      }else{
        if(b == 4){//usuario b escoge spock
          return "gana spock";
        }
      }
    }

  }
  
  }
}


 module.exports = compara;