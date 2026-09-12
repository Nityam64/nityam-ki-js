let f1=0,f2=1,f3,temp,n=prompt("enter n"),ans="0 , 1 ";
for(let i=0;i<n-2;i++)
{
    f3=f1+f2;
    ans += ", "+f3;
    f1=f2;
    f2=f3;
}
alert(ans)

// for-of loop ---> a type of loop used to apply for loop on strings and arrays similar to the for on loop used in vectors in cpp to fetch the elements of the vector
// syntax -->
//  
//      for(let i of str/arr)
//          {
//          do some work
//          }
//
// for-in loop ---> a type of loop used to apply for loop on objects to return thier keys
// syntax -->
//
//      for(let i in str/arr)
//          {
//          do some work
//          }
