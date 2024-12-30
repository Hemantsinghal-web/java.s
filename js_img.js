let img = document.getElementById('img')
img.src = "img_1.jpg"

let h = document.getElementsByClassName('head')
h[0].style.color = "blue"
h[0].style.fontSize = "80px"
h[0].innerHTML = "<i>we are developers</i>"

let h2 = document.getElementById('head2')
h2.style.cssText = "background-color: red; padding: 30px; font-size:80px; color:white"
// h2.textContent = "<i>we are learner</i>"

// document.getElementById('para').innerHTML = "paragraph"
// document.getElementById('para').textContent="hello my name"



let o1 = document.getElementById('li1')
// o1.style.background-color = "red";



let l = document.getElementsByTagName('li')

for(let i=0;i<11;i++)
{
    if(i%2==0)
    {
        l[i].style.backgroundColor = "green"
    }
}
