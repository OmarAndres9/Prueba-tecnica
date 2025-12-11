# Prueba Técnica – Calculadora de Tarifas de Inscripción

Este repositorio contiene la solución completa de la prueba técnica, organizada en dos enfoques:

- **Prueba técnica estándar** → Desarrollo manual siguiendo estrictamente los requerimientos.  
- **Prueba técnica hecha con apoyo de IA** → Donde se muestra cómo se usó un modelo inicial generado por IA para acelerar el proceso, pero luego fue mejorado y corregido.

---

# Calculadora de Tarifas de Inscripción

El proyecto implementa una calculadora desarrollada con **HTML, CSS y JavaScript**, que determina el valor final a pagar según:

- Tarifa de inscripción
- Tipo de afiliado
- Procedencia del participante (nacional / extranjero)
- Conversión a USD con TRM = 3,830.02 (si aplica)

---

## ✔ Objetivo del proyecto

Automatizar el proceso de cálculo aplicando correctamente:

- IVA del **19%**
- Ajuste de **-10%** (asociado) o **+10%** (no asociado)
- Conversión a dólares para extranjeros
- Visualización clara de cada etapa del cálculo

---

##  Tarifas de inscripción (IVA incluido)

| Tipo      | Valor     |
|-----------|-----------|
| Comprador | $500.000  |
| Vendedor  | $400.000  |
| Expositor | $120.000  |

---

##  Tipos de afiliado

| Afiliación   | Ajuste |
|--------------|--------|
| Asociado     | -10%   |
| No Asociado  | +10%   |

---

##  Procedencia

| Procedencia | Moneda |
|-------------|---------|
| Nacional    | COP     |
| Extranjero  | USD (TRM) |

---

##  Proceso de cálculo

1. Seleccionar tarifa (Valor Base).
2. Aplicar **descuento o recargo** según afiliación.
3. Obtener **Subtotal**.
4. Calcular IVA del 19%.
5. Obtener total en **COP**.
6. Si es extranjero → convertir a **USD**.

---

##  Gráfico conceptual del razonamiento
               ┌──────────────────────────┐
               │   Seleccionar Tarifa      │
               │       (Valor Base)        │
               └─────────────┬────────────┘
                             │
                             ▼
               ┌──────────────────────────┐
               │ Aplicar Afiliación        │
               │  - Asociado  → -10%       │
               │  - No Asociado → +10%     │
               └─────────────┬────────────┘
                             │
                             ▼
                  Ajuste aplicado al Base
                             │
                             ▼
               ┌──────────────────────────┐
               │     Obtener Subtotal      │
               │   (Base ajustado)         │
               └─────────────┬────────────┘
                             │
                             ▼
               ┌──────────────────────────┐
               │     Calcular IVA 19%      │
               └─────────────┬────────────┘
                             │
            Subtotal + IVA = Total en COP
                             │
                             ▼
      ┌──────────────────────────────────────────┐
      │     Procedencia: Nacional / Extranjero    │
      └───────────────────┬────────────────────────┘
                          │
             Nacional     │      Extranjero
               ▼          │         ▼
       Pago final en COP  │  Total USD = Total / TRM

---

# 2. Acerca de la versión generada por IA

La IA generó una primera versión con:

- Un formulario HTML básico
- Una lógica general del proceso
- El flujo conceptual del cálculo (modelo visual inicial)

Este modelo permitió visualizar rápidamente la estructura del proyecto, pero **incluía errores importantes**.

---

# 3. Mejoras realizadas a partir del modelo visual generado por IA

Tomé ese modelo visual preliminar y **lo utilicé como referencia**, pero fue necesario:

### ✔ Corregir la interpretación de la IA  
La IA confundió:
- *Procedencia* con *tipo de afiliación*  
- Y trató “extranjero” como si fuera una afiliación

Esto generaba combinaciones inválidas.

**Yo reorganicé completamente la lógica**, permitiendo todas estas combinaciones válidas:

- Asociado + Nacional  
- No Asociado + Nacional  
- Asociado + Extranjero  
- No Asociado + Extranjero  

---

### ✔ Mejoras de lógica y estructura

Se realizaron los siguientes cambios:

- Separación clara entre:
  - Valor base
  - IVA
  - Subtotal
  - Ajuste
  - Total final
- Mayor claridad en el flujo del cálculo
- Validación correcta de todas las opciones
- Cálculo exacto en COP antes de convertir a USD
- Eliminación de operaciones duplicadas o aplicadas en un orden incorrecto

---

### ✔ Funciones adicionales agregadas

Además de corregir la lógica, agregué funciones que faltaban:

- Validación de campos vacíos
- Mensajes claros de error
- Formateo de valores en moneda
- Limpieza del formulario
- Mostrar paso a paso el cálculo final
- Organización del código en funciones reutilizables

---

# 4. ¿Qué NO se tomó del modelo inicial?

- Lógica mezclada y mal organizada  
- Interpretación incorrecta de la procedencia  
- Cálculos aplicados en el orden equivocado  
- Ausencia de validaciones  
- Uso confuso de condiciones para afiliación y país

Estas partes fueron descartadas porque no cumplían con los requerimientos reales de la prueba.

---

# 5. ¿Por qué se usó IA?

Se utilizó IA **solo como ayuda visual inicial**:

- Para crear un primer boceto del formulario  
- Para generar un flujo conceptual de cálculo  
- Para acelerar la fase de ideación  

Sin embargo:

> El desarrollo final fue producto del análisis humano, la corrección lógica y la implementación manual siguiendo estrictamente los requerimientos.

La IA fue un **apoyo**, no la solución final.

---

## 📁 Estructura del repositorio

---

## 🏁 Conclusión

El proyecto combina:

- Un modelo visual inicial generado por IA  
- Mejoras, correcciones y funciones adicionales implementadas manualmente  
- Un flujo de cálculo totalmente alineado con los requerimientos de la prueba técnica  

El resultado final es una calculadora sólida, validada y correctamente estructurada.

---



