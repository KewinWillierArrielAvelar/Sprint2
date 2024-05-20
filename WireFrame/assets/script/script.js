document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200);
    });
});

function loadMoreContent() {
    // Exemplo de conteúdo a ser adicionado
    const newContent = `
        <div class="col">
            <div class="card">
                <img src="https://placeimg.com/640/480/any" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Novo Grupo</h5>
                    <p class="card-text">Descrição adicional do grupo.</p>
                    <button type="button" class="btn btn-warning w-100">Ver</button>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Data e Hora</small>
                </div>
            </div>
        </div>
    `;
    document.getElementById('grid-cards').innerHTML += newContent;
}

// Adicione um listener para o botão
document.getElementById('load-more-btn').addEventListener('click', loadMoreContent);
