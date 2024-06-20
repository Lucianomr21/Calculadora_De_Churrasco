document.getElementById('calcular').addEventListener('click', function() {
    // Get input values
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    // Calculate quantities
    const carneBovina = (homens * 500 + mulheres * 300 + criancas * 100) / 1000;
    const frango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    const linguica = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    const refrigerante = (homens * 300 + mulheres * 200 + criancas * 200) / 1000;
    const cerveja = (homens * 800 + mulheres * 500) / 1000;

    // Display results
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li>${carneBovina.toFixed(1)} kg de carne bovina</li>
        <li>${frango.toFixed(1)} kg de frango</li>
        <li>${linguica.toFixed(1)} kg de linguiça</li>
        <li>${refrigerante.toFixed(1)} l de refrigerante</li>
        <li>${cerveja.toFixed(1)} l de cerveja</li>
    `;
});
