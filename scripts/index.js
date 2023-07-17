
const button = document.querySelector("#button")

button.addEventListener("click",()=>{
    const username = document.querySelector("#name").value
    const email = document.querySelector("#email").value

    var obj = {username,email}

    // console.log(obj,"http://localhost:8080/user/register")
    var x = postData(obj,"https://lastbackend-dqh6.onrender.com/user/register")
    console.log(x)
})

async function postData(data,url){
    var res = await fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    var data = await res.json()
   localStorage.setItem("email",data.email)

   window.location.href = `dashboard.html`
}
