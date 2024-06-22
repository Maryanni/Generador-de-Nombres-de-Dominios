let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];


function domainName(){
   for(let arrPronoun = 0; arrPronoun < pronoun.length; arrPronoun++){
        for(let arrAdj = 0; arrAdj < adj.length; arrAdj++){
            for(let arrNoun = 0; arrNoun < noun.length; arrNoun++){
                for(let arrExtension = 0; arrExtension < extension.length; arrExtension++){
                    console.log(pronoun[arrPronoun] + adj[arrAdj] + noun[arrNoun] + extension[arrExtension]);
                }
            }
        }
   }
}

domainName();

