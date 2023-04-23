import {Container} from "./styles"
import gitLogo from "../assets/github.png"
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button"

import {api} from "../services/api"

import { useState } from "react";
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState ([]);

  const handleSearchRepo = async() => {

    const  {data} = await api.get(`repos/${currentRepo}`)
    

   
    if(data.id){

      const isExist = repos.find((repos) => repos.id === data.id)

      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
      }else{alert('Repositório já informado!')}

    }
    
  }

  const handleRemoveRepo = (id) => {
    repos.filter((repos, i , arr) => (repos.id === id ? arr.splice(i) : 'Não é possivel deletar'))
    
  }
  return (
    <Container className="App">
      
      <img src={gitLogo} width={72}  height={72} alt="github icon"/>
      <Input  value={currentRepo} onChange={(event) => setCurrentRepo(event.target.value)}/>
      {repos.map( value => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={value}/> )}
      
      <Button onClick={handleSearchRepo}/>
    </Container>
  );
}

export default App;
