class Service {

  URL = 'https://pokeapi.co/api/v2';

  getIdFromUrl = (url) => {
    const urlSlices = url.split('/');
    return urlSlices[urlSlices.length - 2];
  }

  getData = async (endpoint) => {
    try {
      const response = await fetch(`${this.URL}/${endpoint}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  getDataList = async (endpoint) => {
    try {
      const data = await this.getData(endpoint);
      const dataWithIds = await data.results.map(el => ({ id: this.getIdFromUrl(el.url), ...el }));
      return dataWithIds;
    } catch (error) {
      console.error(error);
    }
  }

  getPokemons = async () => {
    try {
      return await this.getDataList('pokemon');
    } catch (error) {
      console.error(error);
    }
  }

  getBerries = async () => {
    try {
      return await this.getDataList('berry');
    } catch (error) {
      console.error(error);
    }
  }

  getOnePokemon = async (id) => {
    try {
      const data = await this.getData(`pokemon/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  getOneBerry = async (id) => {
    try {
      const data = await this.getData(`berry/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Service;
