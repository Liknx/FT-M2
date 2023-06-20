import Card from './Card';
import { v4 as uuidv4 } from 'uuid';


export default function Cards(props) {
   const { characters } = props;
   return(
      <div>
         {
            characters.map(e => 
               <Card
                  key={uuidv4()}
                  name={e.name}
                  species={e.species}
                  gender={e.gender}
                  image={e.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         }
      </div>
   )
}
