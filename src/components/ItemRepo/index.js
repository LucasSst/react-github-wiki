
import "./styles"
import { ItemContainer, Column } from "./styles";

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id) 
    
  }
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <Column>
        <a href={repo.html_url} rel="noreferrer" target="_blank" >Ver repositório</a>
        <a href="#" className="remover" rel="noreferrer">Remover</a>
      </Column>
        <hr />
    </ItemContainer>
  )
};

export default ItemRepo;