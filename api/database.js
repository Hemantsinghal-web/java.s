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
     <td> <button onclick = "myedit('${e.id}')"> Edit       </button> </td>
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



async function myedit(id) {

    let data = await fetch(`http://localhost:3000/student/${id}`)
    let resdata = await data.json()
    let form = `
    <input type="text" value="${resdata.id}" id="id1" readonly> <br><br>
    <input type="text" value="${resdata.name}" id="name1" > <br><br>
    <input type="text" value="${resdata.age}" id="age1" > <br><br>
    
    <input type="text" value="${resdata.city}" id="city1" > <br><br>
    <input type="submit" value="Update"  onclick = "finaldata('${resdata.id}')">`

    document.querySelector('#editform').innerHTML = form
    
}

function finaldata(id)
{
    let frmdata = {
        id : document.querySelector('#id1').value,
        name : document.querySelector('#name1').value,
        // contact : document.querySelector('#contact1').value,
        city : document.querySelector('#city1').value,
        age : document.querySelector('#age1').value
    }

    fetch(`http://localhost:3000/student/${id}`,{
        method : "PUT",
        header : {'content-type' : 'application/json'},
        body : JSON.stringify(frmdata)
    } )
}then(r=>alert("update successfully"))