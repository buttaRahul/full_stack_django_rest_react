export class APICall {
    static BASE_URL = "http://127.0.0.1:8000/api/todos/"


    static async GET() {
        const resp = await fetch(this.BASE_URL)
        if (resp.ok) {
            const data = await resp.json()
            
            return {
                "ok": resp.ok,
                "data": data,
            }
        }
        else {
            return {
                "ok": resp.ok,
                "status": resp.status,
                "statusText": resp.statusText,
                "error": "BAD URL",
            }
        }
    }


    static async PATCH(id){
        const options = {
            "method": "PATCH",
            "headers": {
                "Content-Type":"application/json",
            },
            "body":JSON.stringify({
                "completed": true,
            })
        }
        const newUrl = `${this.BASE_URL}${id}/`
        // console.log(newUrl)
        const resp = await fetch(newUrl,options)
        const data = await resp.json()

        if(resp.ok) {
            return {
                "ok": resp.ok,
                "message": "Marked as Completed for todo :" + id,
                
            }
        }

        else{
            return {
                "ok": resp.ok,
                "status": resp.status,
                "statusText": resp.statusText,
                "error": data,

            }
        }

    }


    static async POST(title){
        const options = {
            "method": "POST",
            "headers":{
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "title" : title,
            })

        }
        const resp = await fetch(this.BASE_URL,options)
        const data = await resp.json()
        if(resp.ok){
          
          return {
            "ok": resp.ok,
            "message" : "New todo created with id "+ data.id, 
          }
        }

        else{
         

            // console.log(data)
            return{
                "ok": resp.ok,
                "error": data,
                "status": resp.status,
                "statusText": resp.statusText,

            }
        }
        
        

    }



    static async DELETE(id){
    
        const resp = await fetch(`${this.BASE_URL}${id}`,{"method": "DELETE"})
        // const data = await 
        if(resp.ok ){
            return {
                "ok" : resp.ok,
                "message" : "Todo with id "+ id + " deleted", 
                
            }
        }

        else{
            const data = await resp.json()
            return {
                "ok": resp.ok,
                "status" : resp.status,
                "statusText" : resp.statusText,
                "error" : data,
            }
        }
    }





}


// APICall.GET().then(resp => {
//     if(resp.ok) console.log(resp.data)
//     else {
//         console.log(resp.error)
// }
// })

// APICall.DELETE(24).then(resp => {
    
//     if(resp.ok) console.log(resp.message)
//     else {
//         console.log(resp.error)
//         console.log(resp.status)
//         console.log(resp.statusText)
// }
// })

// APICall.POST().then(resp => {
    
//     if(resp.ok) console.log(resp.message)
//     else {
//         console.log(resp.error)
//         console.log(resp.status)
//         console.log(resp.statusText)
// }
// })

// APICall.POST("CAT").then(resp => {
    
//     if(resp.ok) console.log(resp.message)
//     else {
//         console.log(resp.error)
//         console.log(resp.status)
//         console.log(resp.statusText)
// }
// })

// APICall.PATCH(23).then(resp => {
    
//     if(resp.ok) console.log(resp.message)
//     else {
//         console.log(resp.error)
//         console.log(resp.status)
//         console.log(resp.statusText)
// }
// })