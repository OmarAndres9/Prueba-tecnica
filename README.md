# Prueba-tecnica

# Ejercicios de Prueba Técnica

Este repositorio contiene dos carpetas con diferentes aproximaciones para la prueba técnica:
# Calculadora de Tarifas de Inscripción

Este proyecto implementa una calculadora en **HTML + JavaScript** que determina el valor final a pagar según la tarifa de inscripción, el tipo de afiliado y la procedencia del participante.

---

## ✔ Objetivo del proyecto

Automatizar el cálculo del valor final aplicando:

- IVA del 19%.
- Descuento o recargo del 10% según afiliación.
- Conversión a USD si el participante es extranjero (TRM = 3,830.02).

---

## 🧾 Tarifas de inscripción (IVA incluido)

| Tipo      | Valor     |
|-----------|-----------|
| Comprador | $500.000  |
| Vendedor  | $400.000  |
| Expositor | $120.000  |

---

## 🧍 Tipos de afiliado

| Afiliación   | Ajuste |
|--------------|--------|
| Asociado     | -10%   |
| No Asociado  | +10%   |

---

## 🌍 Procedencia

| Procedencia | Moneda |
|-------------|---------|
| Nacional    | COP     |
| Extranjero  | USD (conversion TRM) |

---

## 🔢 Proceso de cálculo

1. Obtener **Valor Base**.
2. Calcular **IVA (19%)**.
3. Obtener **Subtotal = Base + IVA**.
4. Aplicar **descuento o recargo (±10%)** según afiliación.
5. Obtener el **Total final en COP**.
6. Si es extranjero: convertir a USD → `Total / TRM`.

---

## 📊 Gráfico conceptual del razonamiento
                  ┌──────────────────────┐
                  │   Seleccionar Tarifa  │
                  └──────────┬───────────┘
                             │
                         Valor Base
                             │
                             ▼
                  ┌──────────────────────┐
                  │   Calcular IVA 19%   │
                  └──────────┬───────────┘
                             │
                    Base + IVA = Subtotal
                             │
                             ▼
                ┌──────────────────────────┐
                │   Tipo de Afiliado?       │
                │  Asociado / No Asociado   │
                └───────────┬──────────────┘
                            │
                 -10%       │       +10%
                  ▼         │         ▼
            (Descuento)     │    (Recargo)
                            ▼
                        Total COP
                            │
                            ▼
          ┌──────────────────────────────────┐
          │ Procedencia? Nacional / Extranjero│
          └───────────────┬───────────────────┘
                          │
              Nacional    │     Extranjero
                 ▼        │          ▼
          Pago en COP     │   Total USD = Total / TRM



## Prueba tecnica
Contiene la solución de la prueba técnica desarrollada estándarmente.

## prueba tecnica hecha por ia
Contiene la solución intentada utilizando una Inteligencia Artificial.
> **Nota:** La versión generada por la IA presentó varios errores y no produjo el resultado esperado correctamante.
