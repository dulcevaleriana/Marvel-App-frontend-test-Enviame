export const Ejercicio2_result = (values,json) =>{

    let result = "";
        
    let json_str = JSON.stringify(json.data);
    
    let regex = "";
    
    json_str = json_str.replace(/over_carrier_service_id/g,"over");
    json_str = json_str.replace(/under_carrier_service_id/g,"under");
    
    for (const x in values) {
    
      if (x > 9){
                regex = new RegExp(x, "g");
                  json_str = json_str.replace(regex,JSON.stringify(values[x]));
      } else {
                  regex = new RegExp("over\":"+x+",", "g");
                
                  json_str = json_str.replace(regex,"over\":"+JSON.stringify(values[x])+",");
                
                regex = new RegExp("under\":"+x+"}", "g");
                
                  json_str = json_str.replace(regex,"under\":"+JSON.stringify(values[x])+"}");
      }

      result = JSON.parse(json_str);

    }

    return JSON.stringify(result,null, 4);
}