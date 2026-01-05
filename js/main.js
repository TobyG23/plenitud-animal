/* ================= PRODUCTOS ================= */

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

function showProducts(category) {
    const container = document.getElementById('productosContainer');
    const btnPerros = document.getElementById('btnPerros');
    const btnGatos = document.getElementById('btnGatos');

    if (!container) return;

    if (category === 'perros') {
        btnPerros.className = 'px-6 py-3 rounded-lg font-semibold transition bg-green-600 text-white shadow-lg';
        btnGatos.className = 'px-6 py-3 rounded-lg font-semibold transition bg-white text-gray-700 hover:bg-gray-50';
    } else {
        btnGatos.className = 'px-6 py-3 rounded-lg font-semibold transition bg-blue-600 text-white shadow-lg';
        btnPerros.className = 'px-6 py-3 rounded-lg font-semibold transition bg-white text-gray-700 hover:bg-gray-50';
    }

    container.innerHTML = productos[category].map(producto => `
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden fade-in">
            <div class="bg-gradient-to-br from-green-100 to-blue-100 h-40 flex items-center justify-center text-6xl">
                ${producto.imagen}
            </div>
            <div class="p-4">
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">${producto.categoria}</span>
                <h4 class="font-bold text-gray-800 mt-2 mb-1">${producto.nombre}</h4>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-2xl font-bold text-green-600">$${producto.precio.toLocaleString()}</span>
                    <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/* ================= MENU MOBILE ================= */

document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('hidden');
});

/* ================= CHAT IA ================= */

function openChat() {
    const chatbot = document.getElementById('zapierChatbot');
    if (chatbot && typeof chatbot.open === 'function') {
        chatbot.open();
    }
}

/* ================= VIDEOS ================= */

const v1 = document.getElementById('video1');
const v2 = document.getElementById('video2');

function safePlay(video) {
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const p = video.play();
    if (p !== undefined) {
        p.catch(() => {
            video.play();
        });
    }
}

function switchVideos(out, incoming) {
    if (!out || !incoming) return;

    out.pause();
    out.currentTime = 0;

    incoming.currentTime = 0;
    safePlay(incoming);

    out.classList.replace('opacity-100', 'opacity-0');
    incoming.classList.replace('opacity-0', 'opacity-100');
}

if (v1 && v2) {
    v1.muted = true;
    v2.muted = true;

    v1.playsInline = true;
    v2.playsInline = true;

    v1.playbackRate = 1.5;
    v2.playbackRate = 1;

    safePlay(v1);

    v1.onended = () => {
        v2.playbackRate = 1;
        switchVideos(v1, v2);
    };

    v2.onended = () => {
        v1.playbackRate = 1.5;
        switchVideos(v2, v1);
    };
}

/* ================= INIT ================= */

document.addEventListener('DOMContentLoaded', () => {
    showProducts('perros');
});
