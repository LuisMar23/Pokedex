import {Pokemon}from '../models/pokemon.m';
export async function getPokemons():Promise<Pokemon[]> {
  //LLAMANDO ALA API REST
  const response=await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
  const datos=await response.json();
  const pokemons=datos.results.map((pokemon:any)=>({
    name:pokemon.name,
    id:pokemon.national_number,
    img_gif:corregirNombre(pokemon.sprites['animated']),
    img_large:corregirNombre(pokemon.sprites['normal']),
    img_normal:corregirNombre(pokemon.sprites['large']),
    total:pokemon.total,
    hp:pokemon.hp,
    atack:pokemon.attack,
    defense:pokemon.defense,
    sp_atack:pokemon.sp_atk,
    sp_def:pokemon.sp_def,
    speed:pokemon.speed,
    type:pokemon.type[0],
    type2:pokemon.type[1]
  }));
  const unicosPokemons=pokemons.filter(
    (pokemon: any,index: number)=>
    pokemons.findIndex((other:any)=>other.id===pokemon.id)===index
  );
  return unicosPokemons;
}
export function corregirNombre(name:string):string{
  if(name.includes("farfetch'd")){
    return name.replace("farfetch'd",'farfetchd');
  
  }else if(name.includes("mr.-mime")){
    return name.replace("mr.-mime","mr-mime");
  }
  else if(name.includes("♂")){
    return name.replace("♂","-m")
  }
  else if(name.includes("♀")){
    return name.replace("♀","-f")
    // "♀"
  }
  else{
    return name;
  }
}