import React, {useState, useEffect} from 'react';
import {getMarvelCharathers} from '../js/getMarvelCharathers';
import ChangeDateFormat from '../js/ChangeDateFormat';
import '../assets/css/style.scss';

const Ejercicio3 = () => {
    const [marvelData, setMarvelData] = useState([]);
    const [heroeName, setheroeName] = useState("");

    const getData = async () => {
        try{
          let data = await getMarvelCharathers();
          setMarvelData(data);
        }catch(error){
          let errorMessage = "Some mistake was happend, please try again";
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          console.log(errorMessage);
        }
      }

      const editHeroe = (heroeid) =>{
        return(
            <>
                {marvelData.filter(heroes => heroes.id.includes(heroeid)).map((item, key)=>(
                    <ul key={key}>
                        <li><img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.thumbnail.path + "." + item.thumbnail.extension}/></li>
                        <li><input value={item.name} /></li>
                        <li>{item.description}</li>
                        <li>{ChangeDateFormat(item.modified)}</li>
                        <li><button onClick={editHeroe(item.id)}>"Save it"</button></li>
                    </ul>
                ))}
            </>
        )
      }
    
      useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return(
        <div className="class-Ejercicio3">
            <input onChange={(a) => setheroeName(a.target.value)} type="text" placeholder="find a hero"/>
            <button>search</button>
            {marvelData !== null ? (
                <>
                    {marvelData.filter(heroe => heroe.name.includes(heroeName)).map((item, key)=>(
                        <ul key={key}>
                            <li><img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.thumbnail.path + "." + item.thumbnail.extension}/></li>
                            <li>{item.name}</li>
                            <li>{item.description === "" ? "this hero don't have a description add one here!!" : item.description}</li>
                            <li>{ChangeDateFormat(item.modified)}</li>
                            <li><button onClick={editHeroe(item.id)}>"Edit Hero"</button></li>
                        </ul>
                    ))}
                </>
            )
            :
            (
                <>Ejercicio3</>
            )}
            
        </div>
    )
}

export default Ejercicio3;