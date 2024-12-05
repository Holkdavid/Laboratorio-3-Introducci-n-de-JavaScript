// Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

// Manejador del botón calcular
document.getElementById("calculate").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operation").value;

    // Validar entrada
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Por favor, ingrese números válidos.";
        return;
    }

    // Realizar operación y mostrar resultado
    const resultado = realizarOperacion(num1, num2, operacion);
    document.getElementById("result").textContent = `Resultado: ${resultado}`;
});
