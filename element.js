let head_element = document.createElement('h1')
head_element.textContent = "this is html classes"

let bd = document.body

bd.append(head_element)


head_element.setAttribute('align','center')
head_element.setAttribute('style','background-color: yellow')
head_element.setAttribute('style','color: yellow')




head_element.removeAttribute('align')

let img  =  document.querySelector('#img')
img.setAttribute('src','burger_img.jpg')
// img.setAttribute('height','500px')
