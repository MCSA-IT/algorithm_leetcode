var checkOnesSegment = function (s) {
  
  
    let ones = 0;
    let seg= 0;
  
    for (let num of s) {
      if (num === "1" && ones < 1) {
        ones++;
        seg++;
        if (seg > 1) return false;
      } else if (num === "0") {
        ones = 0;
      }
    }
  
    return seg == 1;
  };