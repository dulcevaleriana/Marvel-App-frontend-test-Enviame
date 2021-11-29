import React from 'react';
import ChangeDateFormat from '../js/ChangeDateFormat';

const CardHero = (props:{
    path:string, 
    extension:string, 
    name:string, 
    statusEdit:boolean,
    description:string,
    dateFormat:string,
    boolFalse:()=>void,
    boolTrue:()=>void
}) => {
    return(
        <div className="class-CardHero">
            <img src={props.path + "." + props.extension} alt={props.path + "." + props.extension}/>
            <div>
                <input placeholder={props.name} className={props.statusEdit ? "" : "class-disabled"}/>
                <p>{ChangeDateFormat(props.dateFormat)}</p>
                <textarea rows={3} placeholder={props.description === "" ? "this hero don't have a description add one here!!" : props.description} className={props.statusEdit ? "" : "class-disabled"}/>
                <button onClick={props.statusEdit ? (()=>props.boolFalse()) : (()=>props.boolTrue())}>{props.statusEdit ? "Save hero" : "Edit Hero"}</button>
            </div>
        </div>
    )
}

export default CardHero;