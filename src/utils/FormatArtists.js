export const formatArtists = (artists) => {
    if (artists.length === 0) {
        return 'Puntos suspensivos...'; // Si no hay artistas, muestra puntos suspensivos
    } else if (artists.length <= 2) {
        return artists.map(artist => artist.name).join(' , '); // Si hay 1 o 2 artistas, separa por 'y'
    } else {
        const otherArtistsCount = artists.length - 2;
        const formattedArtists = artists.slice(0, 2).map(artist => artist.name).join(', ');
        return `${formattedArtists}, y ${otherArtistsCount} más`; // Si hay más de 2 artistas, muestra los primeros dos y la cantidad de artistas restantes
    }
};