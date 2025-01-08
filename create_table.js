let student = [
    {
        roll : 1,
        name : "Hemant Singhal",
        age : 12,
        city : "Bhopal"
    },
    {
        roll : 2,
        name : "Rakesh Singhal",
        age : 12,
        city : "mumbai"

    },
    {
        roll : 3,
        name : "Arti Singhal",
        age : 12,
        city : "delhi"

    },
    {
        roll : 4,
        name : "Diksha Singhal",
        age : 12,
        city : "kadarnath"

    }
]

let finaldata = student.map((e)=>`

    <tr>
    <td> ${e.roll} </td>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.city} </td>
    </tr>

`).join("")


document.querySelector('#dispalydata').innerHTML = finaldata