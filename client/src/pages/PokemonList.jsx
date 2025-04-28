
import { fetchAll } from "../api/Api";
import Navbar from '../components/Navbar';
import CardSection from '../components/CardSection';



const PokemonList = async ({ searchParams }) => {



    const res = await fetchAll();
    console.log(res?.data)
    let data = res?.data?.results || [];
  
  
    return (
      <div className='flex flex-col gap-2 bg-slate-100 min-h-[100vh]'>
        <Navbar />
        <h1 className='my-2 text-xl font-semibold text-gray-500 mx-5 transition-all'>Explore All Pokémon Cards</h1>
        <CardSection filterData={data} />
      </div>
    )
  }

export default PokemonList