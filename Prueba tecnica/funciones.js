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
        <div class="invoice-row">
            <span>Valor base</span>
            <span>$${tarifaNum.toLocaleString()}</span>
        </div>
        <div class="invoice-row">
            <span>${etiquetaAjuste}</span>
            <span>$${valorAjuste.toLocaleString()}</span>
        </div>
        <div class="invoice-row">
            <span>Iva (19%)</span>
            <span>$${iva.toLocaleString()}</span>
        </div>
        <div class="invoice-divider"></div>
        <div class="invoice-total">
            <span>Total a pagar</span>
            <span>$${total.toLocaleString()} COP</span>
        </div>
    `;

    if (procedencia === "extranjero") {
        const totalUSD = total / trm;
        texto += `
        <div class="invoice-row" style="margin-top: 5px; font-size: 14px; color: #777;">
            <span>Valor en Dólares (TRM ${trm})</span>
            <span>$${totalUSD.toFixed(2)} USD</span>
        </div>`;
    }

    document.getElementById("tituloResultado").innerText = "Detalle del cálculo";
    document.getElementById("valorResultado").innerHTML = texto;
    document.getElementById("resultado").style.display = "block";
}






