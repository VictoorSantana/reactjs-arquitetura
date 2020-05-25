export default { 
 
    temToken: () => {
        //Nesse metodo irá checar se o cliente tem o token gravado no local storage do navegado

        const token = localStorage.getItem("keyToken");   

        let isAuth = false;
        if (token !== null && token !== undefined) {
            if(token.trim().length > 0) {
                isAuth = true;
            } else {
                isAuth = false;
            }
        }

        return isAuth;
        
    }
}