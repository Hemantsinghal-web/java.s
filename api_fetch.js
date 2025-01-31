async function retrive_data()
{
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let final_data = await data.json()
    let tdata = final_data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.title} </td>
    <td> ${e.body} </td>
    </tr>
    `).join("")

    document.querySelector('#displaydata').innerHTML = tdata

}

retrive_data()