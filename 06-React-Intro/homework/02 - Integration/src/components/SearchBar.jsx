export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button
            // onClick={props.onSearch('HolaMundo')}
            onClick={console.log('Holaaaaa')}
         >
            Agregar
         </button>
      </div>
   );
}
