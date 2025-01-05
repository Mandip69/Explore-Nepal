import React from 'react';
import Syambu from '../images/Swayambhunath.webp';
import Mount from '../images/Mount.jpeg';
import Mou from '../images/Mou.png';
import Culture from '../images/Culture.jpg';
import Treking from '../images/Treking.jpeg';

const About = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
       {/* ABout nepal section  */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Nepal</h1>
        <p className="mt-2 text-lg text-gray-600">Discover the beauty, culture, and history of Nepal.</p>
      </div>

      {/* History and Culture section  */}
      <section className="mt-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">History and Culture</h2>
            <p className="mt-4 text-gray-600">
              Nepal, a landlocked country in South Asia, is rich in history and culture. Known as the birthplace of Lord Buddha, 
              Nepal boasts a diverse heritage influenced by Hinduism and Buddhism. The country is home to ancient temples, 
              vibrant festivals, and unique customs that reflect its deep cultural roots.
            </p>
          </div>
          <img
            src={Syambu}
            alt="Swayambhunath Stupa"
            className="h-64 w-full max-w-sm rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>
      </section>

      {/* Geography Section  */}
      <section className="mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={Mount}
            alt="Mount Everest"
            className="h-64 w-full max-w-sm rounded-lg shadow-lg object-cover mx-auto"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Geography</h2>
            <p className="mt-4 text-gray-600">
              Nepal is renowned for its breathtaking landscapes, from the towering peaks of the Himalayas, including Mount Everest,
              to lush valleys and serene lakes. The diverse terrain makes Nepal a paradise for nature enthusiasts.
            </p>
          </div>
        </div>
      </section>

     {/* Popular travel section  */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Popular Travel Activities</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img
              src={Mou}
              alt="Trekking"
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Trekking</h3>
            <p className="mt-2 text-gray-600">
              Explore world-famous trekking routes like the Annapurna Circuit and Everest Base Camp.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Treking}
              alt="Cultural Exploration"
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Cultural Exploration</h3>
            <p className="mt-2 text-gray-600">
              Discover ancient temples, monasteries, and festivals that showcase Nepal's vibrant culture.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Culture}
              alt="Temple"
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Temples</h3>
            <p className="mt-2 text-gray-600">
              Visit ancient temples to find inner peace and learn about Nepal's spiritual traditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
