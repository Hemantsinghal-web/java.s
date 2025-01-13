function factor()
{
    console.log("hello");
    
let input1 = document.querySelector('#input1').value
let input2= document.querySelector('#input2').value
let input3 = document.querySelector('#input3').value
let input4 = document.querySelector('#input4').value

let arr = [input1,input2,input3,input4]

for (let i = 0; i < 4;i++) 
{
    console.log(arr);
    
}


for(let i=0;i<4;i++)
{
    let n = arr[i]
    for(let j=1;j<=n;j++)
    {
    if(n%j==0)
    {
        console.log(j);
        
    }
    }
    console.log("next");
    
}

}