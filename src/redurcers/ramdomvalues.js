export default function () {

    
        const mingold = 100;
        const maxgolg = 9999;
        const mindistance = 1000
        const maxdistance = 99999
        const randofgold = mingold + Math.floor(Math.random() * (maxgolg - mingold));
        const randofgdistance = mindistance + Math.floor(Math.random() * (maxdistance -mindistance));
return[
    randofgold,randofgdistance
]
    
    
    }