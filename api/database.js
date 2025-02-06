async function data() {
    
    let data = await fetch("http://localhost:3000/student")
    let fdata = await data.json()
    let tdata = fdata.map((e)=>`
    <tr>
     <td> ${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.city} </td>
    <td> <button onclick = "mydelete('${e.id}')"> Delete</button> </td>
    </tr>
    `).join("")
    document.querySelector('#tbody').innerHTML = tdata



    
}

data()


function mydelete(id){

    fetch(`http://localhost:3000/student/${id}`,{method : "DELETE"}).then(res=>alert("deleted!!!!!"))
}



function savedata()
{
    let fredata = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        contact : document.querySelector('#contact').value,
        city : document.querySelector('#city').value
    }


    fetch('http://localhost:3000/student',{
        method : "POST",
        header : {'contact-type' : 'application/json'},
        body : JSON.stringify(fredata)
    }).then(r=>alert("data inserted successfully.....!!!!"))
}