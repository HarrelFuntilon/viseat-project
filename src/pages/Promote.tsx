import Header from "../components/Header";
import "../../dist/output.css";
const promote = () => {
  return (
    <>
      <title>Promote Establishment</title>
      {/*To start, first open the project directory
      Then input the following command to make sure Tailwind CSS runs:
          npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
      */}
      {/*Navbar*/}
      <Header />
      <main className="bg-PromoteBGD bg-cover bg-no-repeat ">
        <div className="bg-black bg-opacity-50">
          {/*Space*/}
          <div className="invisible">space</div>
          {/*Greeting*/}
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
          {/*About Establishment*/}
          <div className="bg-white md:rounded-3xl sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 p-12 sm:rounded-b-none">
            <form>
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
                name="estname"
                type="text"
                placeholder="Name of your restaurant or karenderya"
                className="input input-bordered w-full mt-2"
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Address (Building No., Street, Barangay):
              </h1>
              <input
                name="estaddress"
                type="text"
                placeholder="Bldg #4, Pag-Ibig St., Brgy. Maligaya"
                className="input input-bordered w-full mt-2"
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Contact Details (Telephone No. or Cellphone No.):
              </h1>
              <input
                name="estcont"
                type="text"
                placeholder="(+02)1234 5678 or 0912 345 6789"
                className="input input-bordered w-full mt-2"
              />
              <h1 className="mt-8 text-lg text-gray-500">Short Description:</h1>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-52 mt-2 text-base max-h-52"
                placeholder="Tell us about your establishment..."
                defaultValue={""}
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Photo of Establishment:
              </h1>
              <input
                name="estphoto"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="file-input file-input-bordered w-full"
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Menu Price Range (in Philippine Peso):
              </h1>
              <div className="grid grid-cols-3 gap-4 w-fit">
                <div>
                  <label>
                    <h1 className="label-text text-gray-500 ">Minimum of:</h1>
                  </label>
                  <input
                    name="minprice"
                    type="text"
                    placeholder={"1.0"}
                    className="input input-bordered w-full mt-2"
                  />
                </div>
                <div>
                  <label>
                    <h1 className="label-text text-gray-500 ">Maximum of:</h1>
                  </label>
                  <input
                    name="maxprice"
                    type="text"
                    placeholder={"9999.0"}
                    className="input input-bordered w-full mt-2"
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
            </form>
          </div>
          {/*About owner*/}
          <div className="bg-white md:rounded-3xl sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 p-12 sm:rounded-b-none mt-8">
            <form>
              <h1 className="uppercase font-bold text-3xl">Owner Information</h1>
              <p className="text-gray-500 mt-1 text-sm">
                All fields are required to be filled out
              </p>
              <h1 className="mt-8 text-lg text-gray-500">Name:</h1>
              <input
                name="estname"
                type="text"
                placeholder="Juan Dela Cruz"
                className="input input-bordered w-full mt-2"
              />
              <h1 className="mt-8 text-lg text-gray-500">
                Contact Number (Telephone No. or Cellphone No.):
              </h1>
              <input
                name="estaddress"
                type="text"
                placeholder="(+02)1234 5678 or 0912 345 6789"
                className="input input-bordered w-full mt-2"
              />
              <p className="mt-8 text-sm text-justify">
                We will contact you via this contact number to notify you about
                your establishment’s application. Before you click submit, please
                double-check the information you provided. By clicking submit, you
                agree to share the information you provided to our system.
              </p>
            </form>
          </div>
          {/*Action buttons*/}
          <div className="sm:ml-auto sm:mr-auto md:ml-64 md:mr-64 sm:rounded-b-none mt-8">
            <form>
              <div className="grid grid-cols-2 gap-6">
                <button className="btn w-full">Clear</button>
                <button className="btn btn-primary border-main-blue bg-main-blue w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/*Filler space for Background*/}
          <div className="mt-32 invisible">space</div>
        </div>
      </main>
    </>
  );
};

export default promote;
