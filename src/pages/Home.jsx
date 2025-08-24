import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        /* landing page */
        <main id='Home' className='grow text-center bg-(image:--bg-image-home) bg-cover bg-center'>
            <section className='min-h-(--page-height) py-8 text-white grid place-content-center px-2'>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <p className='text-3xl font-medium text-gray-400'>&quot;Never forget what to watch next.&quot;</p>
                    <h1 className='text-6xl font-bold'>WatchVault</h1>
                    <Link to="/movies/new" className='py-2 px-4 bg-yellow-400 font-bold hover:bg-black text-black hover:border hover:border-yellow-400 hover:text-yellow-400 transition__colors rounded-lg shadow mt-20' >Add Movies</Link>
                    <p className='text-3xl w-3/5 text-gray-400'>&quot;Keep all your favorite movies and shows in one place, so you always know what’s next on your watchlist and never miss a story you love.&quot;</p>
                </div>
            </section>
            {/* second section with navigation links */}
            <section className='elf-end p-16'>
                <h2 className='text-4xl font-bold mb-12  text-white'>What&apos;s Inside Your Vault</h2>
                <div className='flex flex-row flex-wrap justify-evenly gap-8'>
                    <section className='w-[300px] bg-white text-black text-center aspect-square rounded-2xl shadow grid place-content-center p-4 transform-animation-box linear-bg'>
                        {/* Created by Ashik Biju | 2025 */}
                        <h3 className='font-bold text-2xl mb-4'>🎬 MovieQuest</h3>
                        <p>&quot;Find your next adventure, one movie at a time.&quot;</p>
                        <Link to="/movies/new"><FaArrowRight className='block mx-auto text-4xl mt-6 transform-animation-arrow' /></Link>
                    </section>
                    <section className='w-[300px] bg-white text-black text-center aspect-square rounded-2xl shadow grid place-content-center p-4 transform-animation-box linear-bg'>
                        <h3 className='font-bold text-2xl mb-4'>📝 Vaulted Picks</h3>
                        <p>&quot;All the movies you plan to watch, safely stored in your vault.&quot;</p>
                        <Link to="/movies/watchlist"><FaArrowRight className='block mx-auto text-4xl mt-6 transform-animation-arrow' /></Link>
                    </section>
                    <section className='w-[300px] bg-white text-black text-center aspect-square rounded-2xl shadow grid place-content-center p-4 transform-animation-box linear-bg'>
                        <h3 className='font-bold text-2xl mb-4'>✅ Watched & Vaulted</h3>
                        <p>&quot;Celebrate every story you&apos;ve seen and cherish it forever.&quot;</p>
                        <Link to="/movies/completed"><FaArrowRight className='block mx-auto text-4xl mt-6 transform-animation-arrow' /></Link>
                    </section>
                </div>
            </section>

        </main>
    )
}

export default Home