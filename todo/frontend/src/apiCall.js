export class APICall{

    static BASE_URL = "http://127.0.0.1:8000/api/todos/"
    static async GET(){
        const resp = await fetch(this.BASE_URL)

        if(resp.ok){
        const jsonData =  await resp.json()

        return jsonData
        }
        else
        {
        //    return {
        //     "error": "Todo not created ",
        //     "code" : resp.status,
        //     "status_text" : resp.statusText
        //    }

             console.log("ERROR WHILE CREATING NEW TODO")
        }
        
    }

    static async PATCH(id){
        console.log('id in patch ', id)
        const options = {
            "method" : "PATCH",
            "headers" : {
                "Content-Type" : "application/json"
            },

            "body":JSON.stringify({
                "completed":true,
            })
        }
        // const url = `{}`
        const resp = await fetch(`${this.BASE_URL}${id}/`,options)
        
        if(!resp.ok) 
        //  return {
        //     "error": "Update Failed for Todo with id :" + id,

        // }
        {
            console.log("ERROR WHILE UPDATING TODO WITH ID: ",id)
            console.log(resp)

        }
        else{
            console.log("Todo updated for id",id)
        }
    }

    static async POST(title){
        const options = {
            "method" : "POST",
            "headers" : {
                "Content-Type": "application/json",
            },
            "body":JSON.stringify({
                "title" : title,
                
            })
        }
        const resp = await fetch(this.BASE_URL,options)

        if(resp.ok) {
            const jsonData = await resp.json()
            console.log("New todo created with id : ",jsonData.id)
        }
        else{
            console.log("Error while creating todo")
        }
    }


    static async DELETE(id){
        
        const resp  = await fetch(this.BASE_URL+id+"/",{"method":"DELETE"})
        if(resp.ok) {
            console.log("TODO DELTED")
        }
        else{
            console.log("ERROR WHILE DELETING")
        }
    }
}