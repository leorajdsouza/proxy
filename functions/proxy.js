const fetch = require('node-fetch');


exports.handler = async (event, context)=>{

    try{

        const response = await fetch('https://yts.am/api'+event.path,{
            method: event.method,
            header: event.header,
            body: event.body,
        });
     
    const data = await response.json()
        
    return {
        statusCode: response.statusCode,
        body: JSON.stringify(data),
        header: 'application/json'
    }


    }catch(e) { 
        return{
            statusCode: 500,
            body: JSON.stringify(e),
            header: {
                'Content-Type' : 'application/json'
            }
        }

    }
}

