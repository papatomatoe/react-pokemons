class Service {

  URL = 'https://pokeapi.co/api/v2';

  getIdFromUrl = (url) => {
    const urlSlices = url.split('/');
    return urlSlices[urlSlices.length - 2];
  }

  getDate = async (endpoint) => {
    try {
      const response = await fetch(`${this.URL}/${endpoint}/`);
      const data = await response.json();
      const dataWithIds = await data.results.map(el => ({ id: this.getIdFromUrl(el.url), ...el }));
      return dataWithIds;
    } catch (error) {
      console.error(error);
    }
  }

  getPokemons = async () => {
    try {
      return await this.getDate('pokemon');
    } catch (error) {
      console.error(error);
    }
  }

  getBerries = async () => {
    try {
      return await this.getDate('berry');
    } catch (error) {
      console.error(error);
    }
  }
}

export default Service;
