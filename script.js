// Datos de Productos
const productos = {
    perros: [
        { id: 1, nombre: 'Alimento Premium Perro Adulto', precio: 25000, imagen: '🦴', categoria: 'Alimento' },
        { id: 2, nombre: 'Juguete Interactivo', precio: 8500, imagen: '🎾', categoria: 'Juguetes' },
        { id: 3, nombre: 'Collar Antipulgas Natural', precio: 12000, imagen: '🔵', categoria: 'Salud' },
        { id: 4, nombre: 'Cama Ortopédica', precio: 35000, imagen: '🛏️', categoria: 'Accesorios' }
    ],
    gatos: [
        { id: 5, nombre: 'Alimento Premium Gato Adulto', precio: 22000, imagen: '🐟', categoria: 'Alimento' },
        { id: 6, nombre: 'Rascador Torre', precio: 28000, imagen: '🪵', categoria: 'Accesorios' },
        { id: 7, nombre: 'Arena Sanitaria Premium', precio: 9500, imagen: '📦', categoria: 'Higiene' },
        { id: 8, nombre: 'Juguete Ratón Interactivo', precio: 6500, imagen: '🐭', categoria: 'Juguetes' }
    ]
};

// Menu Mobile
document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Mostrar Productos
function showProducts(category) {
    const container = document.getElementById('productosContainer');
    const btnPerros = document.getElementById('btnPerros');
    const btnGatos = document.getElementById('btnGatos');

    // Cambiar estados de botones
    if (category === 'perros') {
        btnPerros.classList.add('active', 'bg-green-600', 'text-white');
        btnGatos.classList.remove('active', 'bg-blue-600', 'text-white');
    } else {
        btnGatos.classList.add('active', 'bg-blue-600', 'text-white');
        btnPerros.classList.remove('active', 'bg-green-600', 'text-white');
    }

    container.innerHTML = productos[category].map(p => `
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden fade-in">
            <div class="bg-gradient-to-br from-green-100 to-blue-100 h-40 flex items-center justify-center text-6xl">
                ${p.imagen}
            </div>
            <div class="p-4">
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">${p.categoria}</span>
                <h4 class="font-bold text-gray-800 mt-2">${p.nombre}</h4>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-2xl font-bold text-green-600">$${p.precio.toLocaleString()}</span>
                    <button class="bg-green-600 text-white px-4 py-2 rounded-lg">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Lógica del Chat
function openChat() {
    document.getElementById('chatWidget').classList.remove('hidden');
}

function closeChat() {
    document.getElementById('chatWidget').classList.add('hidden');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const container = document.getElementById('chatMessages');
    container.innerHTML += `<div class="flex justify-end chat-message"><div class="bg-green-600 text-white px-4 py-2 rounded-2xl">${text}</div></div>`;
    
    input.value = '';
    
    setTimeout(() => {
        container.innerHTML += `<div class="flex justify-start chat-message"><div class="bg-white shadow-md px-4 py-2 rounded-2xl">Entiendo. Un veterinario revisará tu consulta a la brevedad.</div></div>`;
        container.scrollTop = container.scrollHeight;
    }, 1000);
}

// Inicializar
showProducts('perros');