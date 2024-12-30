function fun()
{
    alert("successful")
}

function sum()
{
    let a = parseInt(prompt("Enter 1 number"))
    let b = parseInt(prompt("Enter 2 number"))

    document.querySelector('#add').innerHTML = a+b
   
    
    
}

function sub()
{
    let a = parseInt(prompt("Enter 1 number"))
    let b = parseInt(prompt("Enter 2 number"))

    let ab = document.querySelector('#sub')
    ab.innerHTML = a-b
    ab.style.color = "red"

}

function mul()
{
    let a = parseInt(prompt("Enter 1 number"))
    let b = parseInt(prompt("Enter 2 number"))

    document.querySelector('#mul').innerHTML = a*b
}


function div()
{
    let a = parseInt(prompt("Enter 1 number"))
    let b = parseInt(prompt("Enter 2 number"))

    document.querySelector('#div').innerHTML = a/b
}



function red()
{
   a =  document.querySelector('#common')
   a.style.backgroundColor = "red"
}

function red1()
{
   a =  document.querySelector('#common')
   a.style.backgroundColor = "blue"
}



function common(color)
{
  a  =   document.querySelector('#common')
    a.style.backgroundColor = color
}