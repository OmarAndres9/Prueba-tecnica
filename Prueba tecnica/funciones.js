function calcular() {
    const tarifa = document.getElementById("tarifa").value;
    const afiliado = document.getElementById("afiliado").value;
    const procedencia = document.getElementById("procedencia").value;



    // VALIDACIÓN
    if (tarifa === "texto" || afiliado === "texto" || procedencia === "texto") {
        alert("Por favor complete todos los campos.");
        return;
    }

    const tarifaNum = parseFloat(tarifa);

    // Cálculo según la imagen: Base -> Ajuste -> Subtotal -> IVA -> Total
    let valorAjuste = 0;
    let etiquetaAjuste = "";
    let subtotal = 0;

    // 10% de ajuste sobre la base
    const montoAjuste = tarifaNum * 0.10;

    if (afiliado === "asociado") {
        valorAjuste = montoAjuste;
        etiquetaAjuste = "Asociado";
        subtotal = tarifaNum - valorAjuste; // Descuento
    } else if (afiliado === "noasociado") {
        valorAjuste = montoAjuste;
        etiquetaAjuste = "No asociado";
        subtotal = tarifaNum + valorAjuste; // Recargo
    } else {
        // Caso por defecto (aunque validado arriba)
        subtotal = tarifaNum;
    }

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    const trm = 3830.02;

    let texto = `
        Valor base: $${tarifaNum.toLocaleString()}<br>
        ${etiquetaAjuste}: $${valorAjuste.toLocaleString()}<br>
        Subtotal: $${subtotal.toLocaleString()}<br>
        Iva: $${iva.toLocaleString()}<br>
        <b>Total a pagar: $${total.toLocaleString()} COP</b>
    `;

    if (procedencia === "extranjero") {
        const totalUSD = total / trm;
        texto += `<br>Valor en Dólares: <b>$${totalUSD.toFixed(2)} USD</b> (TRM ${trm})`;
    }

    document.getElementById("tituloResultado").innerText = "Detalle del cálculo";
    document.getElementById("valorResultado").innerHTML = texto;
    document.getElementById("resultado").style.display = "block";
}







