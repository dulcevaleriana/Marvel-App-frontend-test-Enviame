import React, {useState, useEffect} from 'react';
import {getMarvelCharathers} from '../js/getMarvelCharathers';
import ChangeDateFormat from '../js/ChangeDateFormat';
import '../assets/css/style.scss';

const Ejercicio3 = () => {
    const [marvelData, setMarvelData] = useState([]);
    const [heroName, setheroName] = useState("");
    const [statusEdit, setStatusEdit] = useState(false);
 
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
    
    useEffect(() => {
        getData();
    },[]);

    return(
        <div className="class-Ejercicio3">
            <input onChange={(a) => setheroName(a.target.value)} type="text" placeholder="find a hero"/>
            <button>search</button>

            {marvelData !== null ? (
                <>
                    {marvelData.filter(hero => hero.name.includes(heroName)).map((item, key)=>(
                        <ul key={key}>
                            <li><img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.thumbnail.path + "." + item.thumbnail.extension}/></li>
                            <li><input placeholder={item.name} className={statusEdit ? "" : "class-disabled"}/></li>
                            <li><input placeholder={item.description === "" ? "this hero don't have a description add one here!!" : item.description} className={statusEdit ? "" : "class-disabled"}/></li>
                            <li>{ChangeDateFormat(item.modified)}</li>
                            <li><button onClick={statusEdit ? (()=>setStatusEdit(false)) : (()=>setStatusEdit(true))}>"Edit Hero"</button></li>
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