const button = document.getElementById("#submit")

button.addEventListener("click", (req,res)=>{
    const question = document.getElementById("#question").value
    const opt1 = document.getElementById("#opt1").value
    const opt2 = document.getElementById("#opt2").value
    const opt3 = document.getElementById("#opt3").value
    const opt4 = document.getElementById("#opt4").value
    const ans = document.getElementById("#ans").value

    const email = localstorage.getItem("email")

    var obj = {email,question}
})