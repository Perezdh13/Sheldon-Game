//var opciones = [piedra,papel,tijeras,lagarto,spock]
let opciones =[0,1,2,3,4];


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
          }else{
            if(b == 0){//usuario b escoge piedra
              return "no me leas la mente"
            }
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
          }else{
            if(b == 1){//usuario b escoge papel 
              return "no me leas la mente"
            }
          }
        }
      }

    }
  
  }

  //usuario a escoge tijeras
  if (a == 2){
    if(b == 0){//usuario b escoge piedra
     return "gana piedra"
    }else{
      if(b == 1){//usuario b escoge papel
      return "gana tijeras"
      }else{
        if(b == 2){//usuario b escoge tijeras
        return "no me leas la mente"
        }else{
          if(b == 3){//usuario b escoge lagarto
          return "gana tijeras"
          }else{
            if(b == 4){//usuario b escoge spock
            return "gana spock"
            }
          }
        }
      }
    }
  }
}


 module.exports = compara;