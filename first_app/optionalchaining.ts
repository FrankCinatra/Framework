interface Media{
    title: string;
    genres: string[];
    director?: {name: string};
}

/*const fetchedMediaData: Media = {
    title: 'Madagascar',
    genres: ['comedy', 'fiction'],
    director: {name: 'No se jajaja'}
};*/

const fetchedMediaData: Media = {
    title: 'Madagascar',
    genres: ['comedy', 'fiction']
};

//console.log(fetchedMediaData.director?.name);
console.log(fetchedMediaData.director ?? 'Director no encontrado');