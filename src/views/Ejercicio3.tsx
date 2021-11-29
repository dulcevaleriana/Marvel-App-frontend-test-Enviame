import React, {useState, useEffect} from 'react';
import {getMarvelCharathers} from '../js/getMarvelCharathers';
import '../assets/css/style.scss';
import CardHero from '../components/CardHero';

const Ejercicio3 = () => {
    const [marvelData, setMarvelData] = useState<any | null>(null);
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
            <div>
                <h4>FIND YOUR HERO</h4>
                <input onChange={(a) => setheroName(a.target.value)} type="text" placeholder="Write here a hero name"/>
                <button>search</button>
            </div>

            {marvelData !== null ? (
                <div>
                    {marvelData.filter((hero: { name: string | string[]; }) => hero.name.includes(heroName)).map((item:any, key:any)=>(
                        <CardHero
                            key={key}
                            path={item.thumbnail.path}
                            extension={item.thumbnail.extension}
                            name={item.name}
                            statusEdit={statusEdit}
                            description={item.description}
                            dateFormat={item.modified}
                            boolFalse={()=>setStatusEdit(false)}
                            boolTrue={()=>setStatusEdit(true)}
                        />
                    ))}
                </div>
            )
            :
            (
                <>Ejercicio3</>
            )}
            
        </div>
    )
}

export default Ejercicio3;