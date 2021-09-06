/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(scores) {
    // create ranks array in descending order
    let ranks = scores.slice(0).sort((a, b) => b - a);
        
    // map places in ranks if no medal
    return scores.map(function(scores){
       if (scores === ranks[0]) return 'Gold Medal';
       else if (scores === ranks[1]) return 'Silver Medal';
       else if (scores === ranks[2]) return 'Bronze Medal';
       else 
           for(i=0;i<ranks.length;i++){
           if(scores===ranks[i])return (ranks.indexOf(scores) + 1).toString();
           }
           });
};
