/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let num = n;
    let set= new Set();
    while(num!=1 ){
    let NumLen =  num.toString().length;
        num=0;
    for(i=0;i<NumLen;i++){
       num+= (Math.floor((n/ 10**i) % 10))**2; 
    };
        if(set.has(num))return false;
        set.add(num);
        n=num;
    };
  
    return true;

};
