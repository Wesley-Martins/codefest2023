const btnSubmit = document.getElementById("btnSubmit")
const nameInput = document.querySelector(".nameInput");
const cpfInput = document.querySelector(".cpfInput");
const emailInput = document.querySelector(".emailInput");
const telephoneInput = document.querySelector(".telephoneInput");

btnSubmit.addEventListener("click", async () => {
    try {
        const user = {
            name: nameInput.value,
            cpf: cpfInput.value,
            email: emailInput.value,
            telephone: telephoneInput.value
        }
    
        const reqOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(user)
        }
    
        const endpoint = "http://localhost:3030/create";
    
        const request = await fetch(endpoint, reqOptions);
    
        const response = await request.json();

        alert(`Você foi cadastrado com sucesso\nSeu código do sorteio é ${response.gift_number}`);

        console.log(response)
    } 
    catch(error) {
        console.log(error)
    }
})