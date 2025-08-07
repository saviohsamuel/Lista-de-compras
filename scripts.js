const btnDelete = document.querySelectorAll(".delete");
const list = document.querySelector(".container__wrapper");
const btnAdd = document.querySelector(".submit");
const inputTxtProduct = document.querySelector(".new__item");

inputTxtProduct.addEventListener("input", () => {
    const regex = /\d+/g;
    inputTxtProduct.value = inputTxtProduct.value.replace(regex, "")    
})
btnAdd.addEventListener("click", (adicionar) => {
    adicionar.preventDefault();      
    const nameProduct = inputTxtProduct.value;

    if (!nameProduct) {
        alert("OPS!, faltou o nome do produto!");        
    } else {        
        const inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input__wrapper", "flex", "f-a-center");

        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input", "flex", "f-a-center");

        const inputCheck = document.createElement("input");
        inputCheck.type = "checkbox";

        const labelProduct = document.createElement("label");
        labelProduct.textContent = nameProduct;

        const btnDel = document.createElement("button");
        btnDel.classList.add("delete");

        const imgDel = document.createElement("img");
        imgDel.src = "imgs/trash.svg";
        imgDel.alt = "Icone de lixeira para apagar o item da lista";    

        btnDel.appendChild(imgDel);
        inputContainer.append(inputCheck, labelProduct);
        inputWrapper.append(inputContainer, btnDel);        
        list.prepend(inputWrapper);  
        inputTxtProduct.value = "";
    }
});

btnDelete.forEach((btn) => {
    btn.addEventListener("click", (deletar) => {
        deletar.preventDefault();                
        btn.parentElement.remove(); // Remove o item da lista (opcional)
    });
});