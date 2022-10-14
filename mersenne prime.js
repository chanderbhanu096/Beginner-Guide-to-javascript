const isPrime = num => {
   let i = 2;
   while(i <= num / 2){
      if(num % i++ === 0){
         return false;
      };
   };
   return true;
}
const mersennePrime = num => {
   if(!isPrime(num)){
      return false;
   };
   let i = 0, n = num+1;
   while(n !== 1){
      if(n % 2 !== 0){
         return false;
      };
      n /= 2;
   };
   return true;
};
console.log(mersennePrime(37));

