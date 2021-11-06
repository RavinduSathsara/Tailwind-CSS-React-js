import React from "react";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
      <div className="bg-white dark:bg-gray-80">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to learn java ?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-md mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0"></div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Benifits
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Why java is always better!
            </a>
            <p class="mt-2 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo animi illum ipsum, quibusdam velit eos dicta minima
              repellat. Consequuntur laborum cupiditate ut, enim facere
              mollitia.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0"></div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Benifits
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Values of java !
            </a>
            <p class="mt-2 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo animi illum ipsum, quibusdam velit eos dicta minima
              repellat. Consequuntur laborum cupiditate ut, enim facere
              mollitia.
            </p>
          </div>
          <div className="mt-2"></div>
        </div>
      </div>
      <div className="mt-2">...</div>
    </div>
  );
};

export default App;
