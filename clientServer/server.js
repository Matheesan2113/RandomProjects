var express = require("express");
var app = express();
var bodyParser=require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients=[{
    "id":"ikhbj",
    "text":"noubh"
},{
    "id":"fdgj",
    "text":"fyuifj"
},{
    "id":"rthjb",
    "text":"fyuifj"
}
                ];

app.get('/', function(req,res){
    res.send(ingredients); 
        });

app.post('/',function(req,res){
   var ingredient=req.body;
    if(!ingredient||ingredient.text===""){
        response.status(500).send({error: "your ingredient must have text"});
    }
    else{
        ingredients.push(ingredient);
        res.status(200).send(ingredients);
    }
});

app.put('/:ingredientId',function(req,res){
    var newText=req.body.text;
    if(!newText||newText===""){
       res.status(500).send({error:"you must provide text"});
       }
        else{
            var objectFound=false;
       for(var x=0;x<ingredients.length;x++){
       var ing=ingredients[x];
    if(ing.id===req.params.ingredientId){
        ingredients[x].text=newText;
        objectFound=true
        break;
    }
   }
            if(!objectFound){
                res.status(500).send({error:"Must have object"});
            }
            else{
                res.status(200).send(ingredients);
            }
}
});

app.listen(3000,function(){
    console.log("Cserver running on port 3000")
});