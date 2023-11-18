import Header from '../../components/Header';
import '../../../dist/output.css';
import { Link } from 'react-router-dom';
const explore = (): any => {
  return (
    <>
      <title>Explore Eateries</title>
      <link rel="stylesheet" href="../../dist/output.css" />
      {/* To start, first open the project directory
      Then input the following command to make sure Tailwind CSS runs:
          npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
  */}
      {/* Navbar */}
      <Header />
      <main className="bg-ExploreBGD">
        <div className="bg-black bg-opacity-50">
          {/* space */}
          <div className="invisible">space</div>
          {/* Greetings */}
          <div className="ml-9 mt-36">
            <h1 className="uppercase text-white text-4xl md:text-8xl font-bold">
              Explore
              <br />
              what suits
              <br />
              your taste!
            </h1>
            <p className="text-gray-300 text-lg md:text-3xl mt-4">
              Savoury. Sweet. Drinks? Of Course!
            </p>
            <p className="text-gray-300 text-[10px]">
              (Tip: Make sure to give them a call to check their operating
              hours)
            </p>
          </div>
          {/* Inquire Button */}
          <Link to="/pages/explore/inquire">
            <div className="fixed bottom-16 right-24 md:bottom-16 md:right-40">
              <button className="btn fixed bg-main-blue text-white border-main-blue hover:bg-blue-700 hover:border-blue-700 md:text-xl rounded-full pl-5 pr-5 md:pl-9 md:pr-9 normal-case font-normal">
                Inquire
              </button>
            </div>
          </Link>
          {/* Start of List */}
          <div className="w-full bg-white p-9 mt-48">
            {/* Establishment 1 */}
            <div className="grid md:grid-cols-2 md:grid-rows-4 gap-4">
              <img
                src="../img/kyoto.jpg"
                alt="Kyo-To"
                className="row-span-full w-full h-[256px] md:h-[408px] object-cover object-center"
              />
              <div>
                <h1 className="text-main-red font-bold uppercase text-4xl">
                  kyo-to
                </h1>
                <p className="font-semibold">
                  G/F Coyiuto House, 119 C. Palanca Street, Legaspi Village
                </p>
              </div>
              <p className="text-gray-500">
                Kyo-to is a Japanese restaurant in the heart of Makati that
                offers an authentic kaiseki dining experience. Kaiseki is a
                traditional Japanese multi-course meal, so you can enjoy a wide
                variety of flavorful dishes at Kyo-to.
              </p>
              <div>
                <h1 className="font-bold uppercase text-lg">popular foods:</h1>
                <p className="text-gray-500">
                  Yakimono, Tsukidash, Kamo rosu, Harmonious soup, Sashimi
                </p>
              </div>
              <div className="grid grid-cols-2 content-end">
                <p className="font-bold">₱6,500 - ₱7,500</p>
                <div className="flex content-center">
                  <img
                    src="../img/phone-call.png"
                    alt="call"
                    className="h-6 w-6"
                  />
                  <p className="font-bold ml-2">02.805.7743</p>
                </div>
              </div>
            </div>
            <hr className="mt-8 mb-8" />
            {/* Establishment 2 */}
            <div className="grid md:grid-cols-2 md:grid-rows-4 gap-4">
              <img
                src="../img/metronome.jpg"
                alt="Metronome"
                className="row-span-full w-full h-[256px] md:h-[408px] object-cover object-center"
              />
              <div>
                <h1 className="text-main-red font-bold uppercase text-4xl">
                  Metronome
                </h1>
                <p className="font-semibold">160 Bolanos St. Legazpi Village</p>
              </div>
              <p className="text-gray-500">
                Metronome is a modern French restaurant by Chef Mike Calo, and
                if you want to enjoy the best of French cuisine in a stylish and
                romantic setting then this is the place to be.
              </p>
              <div>
                <h1 className="font-bold uppercase text-lg">popular foods:</h1>
                <p className="text-gray-500">
                  Lobster Spaghettini, Beef Bourguignon, Steak Frites, L’ultime,
                  Halibut{' '}
                </p>
              </div>
              <div className="grid grid-cols-2 content-end">
                <p className="font-bold">₱1,500 - ₱7,000</p>
                <div className="flex content-center">
                  <img
                    src="../img/phone-call.png"
                    alt="call"
                    className="h-6 w-6"
                  />
                  <p className="font-bold ml-2">+63 917 147 3776</p>
                </div>
              </div>
            </div>
            <hr className="mt-8 mb-8" />
            {/* Establishment 3 */}
            <div className="grid md:grid-cols-2 md:grid-rows-4 gap-4">
              <img
                src="../img/wolfgang.jpg"
                alt="Wolfgang’s Steakhouse"
                className="row-span-full w-full h-[256px] md:h-[408px] object-cover object-top"
              />
              <div>
                <h1 className="text-main-red font-bold uppercase text-4xl">
                  wolfgang's steak house
                </h1>
                <p className="font-semibold">One Bonifacio High Street</p>
              </div>
              <p className="text-gray-500">
                You can’t go wrong with perfectly cooked steak and a luxurious
                ambiance for a fancy dinner date! World-renowned Wolfgang’s
                Steakhouse is a great choice for a romantic dinner date,
                especially if you both can’t say no to steak.
              </p>
              <div>
                <h1 className="font-bold uppercase text-lg">popular foods:</h1>
                <p className="text-gray-500">
                  Filet Mignon, Grilled Salmon, Lamb chops, Tiramisu, Chocolate
                  Mousse Cake
                </p>
              </div>
              <div className="grid grid-cols-2 content-end">
                <p className="font-bold">₱3,500 - ₱10,000</p>
                <div className="flex content-center">
                  <img
                    src="../img/phone-call.png"
                    alt="call"
                    className="h-6 w-6"
                  />
                  <p className="font-bold ml-2">+63 917 710 1682</p>
                </div>
              </div>
            </div>
          </div>
          {/* space */}
          <div className="mt-8 md:mt-28 invisible">space</div>
        </div>
      </main>
    </>
  );
};

export default explore;
