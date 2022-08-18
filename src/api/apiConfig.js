const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a27179076e185ef35140bd4221215c83',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;