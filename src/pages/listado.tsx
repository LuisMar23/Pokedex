import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
import { useState, useEffect } from "react";
import Figure from "react-bootstrap/Figure";

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query,setQuery]=useState("");
  useEffect(() => {
    const obtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    obtenerTodos();
  });
  const filtrarpokemon=pokemons?.slice(0,151).filter((pokemon)=>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });
  return (
    <div>
      <h1>Pokemon</h1>
      <header>
        <input value={query} placeholder="Buscar Pokemon" onChange={(event)=>setQuery(event.target.value.trim())}/>
      </header>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {filtrarpokemon?.slice(0, 151).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header >
                  <b>Tipo:</b> {pokemon.type} {pokemon.type2}  
                  <Card.Img className="float-right"
                  variant="right"
                  height="50"
                  
                  width="30"
                  src={pokemon.img_gif}
                  />
                </Card.Header>
                <Card.Img
                  variant="top"
                  height="150"
                  className="d-block mx-auto w-50"
                  width="100"
                  src={pokemon.img_large}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {pokemon.id}-{pokemon.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/3208/3208707.png"
                      />
                      <b> HP :</b>
                      {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/834/834240.png"
                      />
                      <b> Ataque :</b> {pokemon.atack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/571/571923.png"
                      />
                      <b> Defensa :</b> {pokemon.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/297/297837.png"
                      />
                      <b> E.Ataque :</b> {pokemon.sp_atack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/8146/8146733.png"
                      />
                      <b> E.defensa :</b> {pokemon.sp_def}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/2455/2455905.png"
                      />
                      <b> Velocidad :</b> {pokemon.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listado;
