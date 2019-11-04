function sockMerchant(n, ar) {
      const min = 1;
      const max = 100;
      
      ar = (typeof ar === "string") ? ar.split(' ') : ar;
 
      if (ar.length >= min
           && ar.length <= max
           && n === parseInt(n, 0)
           && n >= min
           && n <= max 
           && n === ar.length) {
                return findPairs(ar.slice(1), ar[0], 0);
      }
     
      // if does not meet criteria return 0
      return 0; 
 }

 sockMerchant(16,[6,5,2,3,5,2,2,1,1,5,1,3,3,3,5,6])
