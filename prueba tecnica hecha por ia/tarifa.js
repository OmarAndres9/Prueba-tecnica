/**

 * Calcula el valor base, IVA, valor total, y el ajuste (descuento/recargo)
 * para un tipo de afiliado y tarifa dada.
 * @param {string} tipoAfiliado - 'asociado', 'noAsociado', o 'extranjero'.
 * @param {number} valorTarifaBase - El valor base de la tarifa (ej. 500000 para Comprador).
 * @returns {object} Un objeto con todos los valores calculados.
 */


  // Constantes del problema
const TASA_IVA = 0.19; // 19%
const TRM = 3830.02; // Tasa Representativa del Mercado (dólar)
const VALOR_ADICIONAL_IVA_INCLUIDO = 50;

function calcularValoresInscripcion(tipoAfiliado, valorTarifaBase) {
    // 1. Calcular el Valor Base
    // La tarifa dada ya incluye un valor con IVA (los 50) que debemos quitar para hallar el VALOR BASE
    // La tarifa se define como: [Costo Base] + 50
    const valorTarifaTotalIVAIncluido = valorTarifaBase + VALOR_ADICIONAL_IVA_INCLUIDO;

    // Para obtener el Valor Base sin IVA, se debe dividir el valor con IVA por (1 + TASA_IVA)
    // Se toma como base el Valor Total de la Tarifa (ej. 500050)
    const valorBase = valorTarifaTotalIVAIncluido / (1 + TASA_IVA);
    
    // 2. Valor de IVA
    const valorIVA = valorTarifaTotalIVAIncluido - valorBase; 

    // 3. Valor Total a Pagar (antes de ajustes)
    let valorTotalPagar = valorTarifaTotalIVAIncluido;
    let porcentajeAjuste = 0; // Se usará para mostrar el ajuste aplicado
    let valorAjuste = 0; // Valor del descuento/recargo
    let moneda = 'COP';

    // 4. Aplicar Descuento o Recargo / Convertir a Dólares
    switch (tipoAfiliado) {
        case 'asociado':
            porcentajeAjuste = -0.10; // 10% de Descuento
            valorAjuste = valorTotalPagar * porcentajeAjuste;
            valorTotalPagar += valorAjuste;
            break;
        case 'noAsociado':
            porcentajeAjuste = 0.10; // 10% de Recargo
            valorAjuste = valorTotalPagar * porcentajeAjuste;
            valorTotalPagar += valorAjuste;
            break;
        case 'extranjero':
            // Extranjero: realiza el pago en dólares
            moneda = 'USD';
            valorBase /= TRM;
            valorIVA /= TRM;
            valorTotalPagar /= TRM;
            porcentajeAjuste = 0; // No aplica descuento/recargo
            valorAjuste = 0;
            break;
        default:
            // Por defecto, no hay ajuste (caso no especificado)
            break;
    }
    
    // Devolver los resultados
    return {
        valorBase: valorBase,
        valorIVA: valorIVA,
        valorTotalPagar: valorTotalPagar,
        porcentajeAjuste: porcentajeAjuste,
        valorAjuste: valorAjuste,
        moneda: moneda
    };
}