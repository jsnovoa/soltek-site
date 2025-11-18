
function calcularAhorro() {
    let consumo = parseFloat(document.getElementById('consumo').value);
    let tarifa = parseFloat(document.getElementById('tarifa').value);
    if(isNaN(consumo) || isNaN(tarifa)) {
        document.getElementById('resultado').innerText = "Por favor ingresa valores válidos.";
        return;
    }
    let costoActual = consumo * tarifa;
    let cuotaSolar = costoActual * 0.85; // Simulación: 15% ahorro
    let ahorroAnual = (costoActual - cuotaSolar) * 12;

    document.getElementById('resultado').innerText = 
        `Costo actual mensual: $${costoActual.toLocaleString()} COP
Cuota Soltek mensual: $${cuotaSolar.toLocaleString()} COP
Ahorro anual: $${ahorroAnual.toLocaleString()} COP`;

    // Generar gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    if(window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costo Actual', 'Cuota Soltek'],
            datasets: [{
                label: 'Comparación mensual (COP)',
                data: [costoActual, cuotaSolar],
                backgroundColor: ['#f44336', '#4caf50']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Comparación de costos mensuales' }
            }
        }
    });
}
