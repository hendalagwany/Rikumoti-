export function safeRequest (requestFn , onError){
    try {
        return requestFn();
    } catch(error){
        console.error(error);

        if(onError){
            onError(error);
        }else{
            alert(error.message);
        }

        throw error;
    }
}