// ==============================
// FORMULARIO DE CONTACTO
// ==============================

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    // Obtener datos del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar campos obligatorios

    if (!nombre || !telefono || !correo || !mensaje) {

        alert("Por favor completa todos los campos obligatorios.");

        return;

    }

    // Validar correo

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoRegex.test(correo)) {

        alert("Ingresa un correo electrónico válido.");

        return;

    }

    // Validar teléfono (9 dígitos)

    const telefonoRegex = /^[0-9]{9}$/;

    if (!telefonoRegex.test(telefono)) {

        alert("Ingresa un número de teléfono válido de 9 dígitos.");

        return;

    }

    // Número de WhatsApp de Megatrazo
    // Reemplaza este número por el real

    const numeroWhatsApp = "51975500757";

    // Construir mensaje

    let texto = `Hola, Megatrazo.%0A%0A`;
    texto += `Quisiera solicitar una cotización.%0A%0A`;
    texto += `👤 *Nombre:* ${nombre}%0A`;
    texto += `📱 *Teléfono:* ${telefono}%0A`;
    texto += `📧 *Correo:* ${correo}%0A`;

    if (empresa !== "") {

        texto += `🏬 *Empresa:* ${empresa}%0A`;

    }

    texto += `%0A📝 *Proyecto:*%0A${mensaje}`;

    // Abrir WhatsApp

    window.open(

        `https://wa.me/${numeroWhatsApp}?text=${texto}`,

        "_blank"

    );

    // Limpiar formulario

    formulario.reset();

});
