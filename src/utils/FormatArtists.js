export const formatArtists = (artists) => {
    if (artists.length === 0) {
        return ['...']; // Si no hay artistas, muestra puntos suspensivos
    } else if (artists.length <= 2) {
        return artists.map((artist) => ({name: artist.name, id: artist.id}));
    } else {
        const otherArtistsCount = artists.length - 2;
        const formattedArtists = artists.slice(0, 2).map((artist) => ({name: artist.name, id: artist.id}));
        formattedArtists.push({name: `y ${otherArtistsCount} mas`, id: null});
        return formattedArtists; // Si hay más de 2 artistas, devuelve los primeros dos y la cantidad de artistas restantes
    }
};