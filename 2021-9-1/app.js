/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let a =n;
    let PreValue =1;
    let LastValue =2;
    let b;
    if(a== 1 || a==2){
        if(a==1){
            b= PreValue;
            return b
        }
        if(a==2){
            b= LastValue;
            return b
        }
    }
        else{
            for(i=3;3<=i<=45;i++) {
                var NewValue = PreValue + LastValue;
                PreValue = LastValue;
                if(i==a){
                    b = NewValue;
                    return b
                }
                LastValue = NewValue;
            }
        }
    
};



//https://leetcode.com/problems/climbing-stairs/