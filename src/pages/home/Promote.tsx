import Header from '../../components/Header';
import '../../../dist/output.css';
import { useState } from 'react';
import Axios from 'axios';
const promote = (): any => {
  const [formData, setFormData] = useState({
    storename: '',
    address: '',
    minprice: '',
    name: '',
    contact: '',
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await Axios.post('http://localhost:3000/addstore', formData)
      .then((response) => {
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error('Error:', error); // Handle errors
      });
  };

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <title>Promote Establishment</title>
      {/* Navbar */}
      <Header />
      <main className="bg-PromoteBGD bg-cover bg-no-repeat ">
        <div className="bg-black bg-opacity-50">
          {/* Space */}
          <div className="invisible">space</div>
          {/* Greeting */}
          <form method="post" onSubmit={handleSubmit}>
            <div className="mt-56 mb-48 w-auto">
              <h1 className="grid md:place-content-center text-white text-6xl font-bold mb-3">
                SIGN UP. PROMOTE BOOST!
              </h1>
              <h1 className="grid md:place-content-center sm:place-content-start text-2xl text-gray-400">
                Register your establishment now
              </h1>
              <h1 className="grid md:place-content-center sm:place-content-start text-2xl text-gray-400">
                and let's promote it
              </h1>
              <div className="grid md:place-content-center sm:place-content-start ml-16 mr-16 md:ml-0 md:mr-0 mt-4">
                <a href="#move-page" id="move-page" className="-scroll-mt-6">
                  <button className="btn bg-white text-black rounded-2xl font-bold capitalize text-xl pl-8 pr-8">
                    Promote Now
                  </button>
                </a>
              </div>
            </div>
            {/* About Establishment */}
            <div className="bg-white md:rounded-3xl sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 p-12 sm:rounded-b-none">
              <h1 className="uppercase font-bold text-3xl">
                Applying your Establishment
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                All fields are required to be filled out
              </p>
              <h1 className="mt-8 text-lg text-gray-500">
                Name of Establishment:
              </h1>
              <input
                name="storename"
                type="text"
                placeholder="Name of your restaurant or karenderya"
                className="input input-bordered w-full mt-2"
                onChange={handleChange}
                required
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Address (Building No., Street, Barangay):
              </h1>
              <input
                name="address"
                type="text"
                placeholder="Bldg #4, Pag-Ibig St., Brgy. Maligaya"
                className="input input-bordered w-full mt-2"
                onChange={handleChange}
                required
              />
              <h1 className="mt-8 text-lg text-gray-500">Short Description:</h1>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-52 mt-2 text-base max-h-52"
                placeholder="Tell us about your establishment..."
                defaultValue={''}
              />
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mt-8">
                <div>
                  <h1 className="text-lg text-gray-500">
                    Photo of Establishment
                  </h1>
                  <label>
                    <h1 className="label-text text-gray-500">
                      Please submit the most recent photo of your establishment:
                    </h1>
                  </label>
                </div>
                <div>
                  <h1 className="text-lg text-gray-500">
                    Menu Price Range (in Philippine Peso):
                  </h1>
                  <label>
                    <h1 className="label-text text-gray-500 ">Minimum of:</h1>
                  </label>
                </div>
                <div>
                  <input
                    name="estphoto"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="file-input file-input-bordered w-full"
                  />
                </div>
                <div>
                  <input
                    name="minprice"
                    type="text"
                    placeholder={'1.0'}
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <h1 className="mt-8 text-lg text-gray-500">
                Most Popular Dishes (at most 5):
              </h1>
              <div className="flex flex-row">
                <input
                  name="dishes"
                  type="text"
                  placeholder="What dish do your customers frequently order?"
                  className="input input-bordered basis-3/4 mt-2 mr-3"
                />
                <button className="btn btn-disabled basis-1/4 mt-2">
                  Add another dish
                </button>
              </div>
            </div>
            {/* About owner */}
            <div className="bg-white md:rounded-3xl sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 p-12 sm:rounded-b-none mt-8">
              <h1 className="uppercase font-bold text-3xl">
                Owner Information
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                All fields are required to be filled out
              </p>
              <h1 className="mt-8 text-lg text-gray-500">Name:</h1>
              <input
                name="name"
                type="text"
                placeholder="Juan Dela Cruz"
                className="input input-bordered w-full mt-2"
                onChange={handleChange}
                required
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Contact Number (Telephone No. or Cellphone No.):
              </h1>
              <input
                name="contact"
                type="text"
                placeholder="(+02)1234 5678 or 0912 345 6789"
                className="input input-bordered w-full mt-2"
                onChange={handleChange}
                required
              />
              <p className="mt-8 text-sm text-justify">
                We will contact you via this contact number to notify you about
                your establishment’s application. Before you click submit,
                please double-check the information you provided. By clicking
                submit, you agree to share the information you provided to our
                system.
              </p>
            </div>
            {/* Action buttons */}
            <div className="sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 sm:rounded-b-none mt-8">
              <div className="grid grid-cols-2 gap-6">
                <button className="btn w-full">Clear</button>
                <input
                  type="submit"
                  className="btn btn-primary border-main-blue bg-main-blue w-full"
                  value="Submit"
                />
              </div>
            </div>
            {/* Filler space for Background */}
            <div className="mt-32 invisible">space</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default promote;
