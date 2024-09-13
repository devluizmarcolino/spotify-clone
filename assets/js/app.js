document.addEventListener('DOMContentLoaded', () => {
    const artistData = [
        { name: 'Henrique & Juliano', image: './assets/images/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Matheus', image: './assets/images/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './assets/images/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './assets/images/artista-gustavo-limma.jpg' },
        { name: 'Grelo', image: './assets/images/artista-grelo.jpg' }
    ];
    
    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './assets/images/album-white-noise.jpg'},
        { name: 'O Céu Explica Tudo (Ao vivo)', artist: 'Henrique & Juliano', image: './assets/images/album-ceu-explica.jpg'},
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './assets/images/album-vida-loka.jpg'},
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './assets/images/album-hit-me.jpg'},
        { name: 'É o Grelo', artist: 'Grelo', image: './assets/images/album-grelo.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistData.forEach( artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="Imagem do${artist.name}">
        <div>
        <h3>${artist.name}</h3>
        <p>Artista</p>
        <div>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${album.image}" alt="Imagem do${album.name}">
        <div>
        <p>${album.name}</p>
        <h3>${album.artist}</h3>
        <div>
        `
        albumsGrid.appendChild(albumCard)
    })
});


