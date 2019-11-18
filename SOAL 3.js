function cekkoin(jumlah,koin)
{
 if (jumlah === 0) 
  {
     return [];
   } 
 else
   {
     if (jumlah >= koin[0]) 
       {
        left = (jumlah - koin[0]);
        return [koin[0]].concat(jumlahKoin(left, coins) );
        } 
      else
        {
         coins.shift();
         return cekkoin(jumlah, koin);
        }
    }
} 
console.log(amountTocoins((49), [25, 10, 5, 1]));
console.log(amountTocoins((31), [25, 10, 5, 1]));
console.log(amountTocoins((50), [25, 10, 5, 1]));
