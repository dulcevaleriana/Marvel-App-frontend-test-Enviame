import React from "react";
import {Ejercicio2_result} from '../js/Ejercicio2_result';
// JSON 

const Ejercicio2 = () => {
    const values =  {
        1: {
            carrier: "CCH",
            service: "DEX",
        },
        17: {
            carrier: "CHP",
            service: "express",
        }
    }
    // JSON
    let json = { 
                data: {
                    BUIN: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    },
                    LAJA: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LEBU: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LOTA: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    }
                }
    }

    const showValue = (values:{}) => {
        return JSON.stringify(values,null, 4);
    }

    const showJson = (json:{}) => {
        return JSON.stringify(json,null, 4);
    }

    return(
        <div className="class-Ejercicio2">
            <pre>
                <h4>values</h4>
                {showValue(values)}
            </pre>
            <pre>
                <h4>json</h4>
                {showJson(json)}
            </pre>
            <pre>
                <h4>Result</h4>
                {Ejercicio2_result(values,json)}
            </pre>
        </div>
    )
}

export default Ejercicio2;