const verifyAuth = (req, res) => {
    console.log("verifyAuth Called");
    const auth = req.headers.auth;

    if(!auth){
        
        res.status(422).send("token is missing");
    }
    if(auth !== process.env.ROUTE_PASSWORD){
        res.status(401).send("unauthorized access");

    }
    console.log(req.headers);
      
  };

module.exports = {verifyAuth};