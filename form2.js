function validate()
{
    let name = document.querySelector('#name').value
    let contact = document.querySelector('#cont').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let cpassword = document.querySelector('#cpassword').value

    if(name == '')
    {
        alert("Plese enter name")
        document.querySelector('#name').focus()
        return false
    }

    
    else if(contact == '')
    {
    alert("Plese enter contact")
    document.querySelector('#cont').focus()
    return false
    }



        else if(contact.length>10 || contact.length<10)
        {
        alert("Enter a valid number")
        document.querySelector('#cont').focus()
        return false
        }

        else if( age == '')
        {
        alert("Plese enter age")
        document.querySelector('#age').focus()
        return false
        }
    
     else if(isNaN(age))
        {
            alert("Name should be in variable!!")
            document.querySelector('#age').focus()
            return false
        }


        else if(email == '')
        {
            alert("Plese enter Email")
            document.querySelector('#email').focus()
            return false
        }

        else if(!(email.includes('@')))
        {
            alert("Enter a valid email")
            document.querySelector('#email').focus()
            return false
        }


            else if(password == '')
            {
                alert("Enter a password")
                document.querySelector('#password').focus()
                return false
            }

            else if(!(password.match(/[`!@#$%^~*&]/)))
            {
                alert("please enter atleast one special charater")
                document.querySelector('#password').focus()
                return false
            }

            else if(cpassword == '')
                {
                    alert("Enter a Confirm password")
                    document.querySelector('#cpassword').focus()
                    return false
                }

                else if(password!=cpassword)
                    {
                        alert("please enter correct password")
                        document.querySelector('#cpassword').focus()
                        return false
                    }

}