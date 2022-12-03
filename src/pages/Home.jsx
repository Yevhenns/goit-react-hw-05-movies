import { fetchTrending } from 'services/API';

export const Home = () => {
    fetchTrending()
      .then(console.log(fetchTrending()))
      .catch(error => console.log(error.message))
      .finally(() => console.log(2));
}
  




