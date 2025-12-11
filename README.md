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

---

## 2. Respuesta de la IA

La IA generó:

- Un formulario HTML básico.
- Un script en JavaScript con lógica para calcular:
  - IVA del 19%.
  - Descuento o recargo del 10% según afiliación.
  - Conversión a USD para extranjeros.
- Un flujo general de cálculo.

Sin embargo, también generó errores importantes:

- **Confundió procedencia con tipo de afiliado.**
- Trató “extranjero” como si fuera una afiliación (similar a “asociado” o “no asociado”).
- No comprendió que una persona **extranjera puede ser asociada o no asociada**.
- Parte de la lógica se aplicó en lugares incorrectos o mal estructurados.

---

## 3. ¿Qué decidí aplicar y por qué?

Apliqué únicamente:

- La estructura del formulario HTML.
- La idea de separar valor base, IVA y ajuste.
- La conversión del total final a dólares usando TRM.
- El modelo general del proceso de cálculo.

**Motivo:**  
Estas partes ayudaron a construir más rápido una base visual y funcional del proyecto, pero no eran suficientes ni estaban completamente alineadas con los requerimientos. Por eso fueron corregidas y mejoradas.

---

## 4. ¿Qué no apliqué y por qué?

### ❌ Lógica incorrecta sobre procedencia y afiliación
No apliqué la interpretación equivocada donde la IA trató *extranjero* como afiliación.  
Esto no fue usado porque:

- Un usuario puede ser extranjero y estar asociado.
- O ser extranjero y no estar asociado.
- La IA no distinguía esas combinaciones, generando resultados erróneos.

### ❌ Flujo incompleto o mal estructurado
No se usaron partes como:

- Cálculos mezclados (sin etapas claras).
- Ajustes aplicados en momentos incorrectos.
- Totales sin separar “subtotal” y “ajuste”.
- Falta de validación entre afiliación y procedencia.

Estas fallas impedían cumplir correctamente los requerimientos técnicos de la prueba.

---

## ¿Por qué usé IA?

Utilicé IA **como una herramienta de apoyo visual**, para acelerar:

- La comprensión inicial del reto.
- El diseño conceptual del flujo.
- La organización preliminar del código.

La intención NO era que la IA resolviera la prueba por completo, sino que me ayudara a entender mejor la lógica.

Finalmente, fue necesario un análisis propio para:

- Corregir los errores de interpretación.
- Reorganizar la lógica.
- Implementar correctamente todas las combinaciones de afiliado + procedencia.
- Garantizar que los cálculos fueran exactos en COP y USD.

En conclusión, la IA fue usada como apoyo, pero el desarrollo final dependió del razonamiento humano para cumplir todos los requisitos correctamente.


> 
