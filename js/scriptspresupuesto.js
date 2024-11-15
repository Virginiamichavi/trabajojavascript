
/****************CALCULAR PRESUPUESTO********* */
function presupuesto(){
    let sumaTotal = 0; 

    const tipoPag = document.querySelector("#trabajos");
    const plazoMes = document.querySelector("#plazos");
    const opciones = document.querySelectorAll("#extras input");
    const preTotal = document.querySelector("#total");

    let suma = ()=>{
        sumaTotal = parseInt(tipoPag.value);

        switch (plazoMes.value) {
            case "1":
                sumaTotal += 200;
                break;
            case "2":
                sumaTotal += 150;
                break;
            case "3":
                sumaTotal += 50;
                break;
            case "4":
                sumaTotal += 0;
                break;
            default:
                sumaTotal += 0;
                break;
        }

        opciones.forEach(element => {
            if(element.checked){
                sumaTotal += parseInt(element.value);
            }
        });
        preTotal.value = sumaTotal.toFixed(2)+"€";
    }

    opciones.forEach(element => {
        element.addEventListener("change",suma,false);
    });
    tipoPag.addEventListener("change",suma,false);
    plazoMes.addEventListener("change",suma,false);
}

 presupuesto();
