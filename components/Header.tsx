import * as React from 'react';

const Header = () => {
  return (
    <div className="container mx-auto bg-black rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-red-800 font-bold mb-5">
        Dungeons & Dragons Shop Maker
      </h1>
      <p className="text-gray-200 text-lg">
        Create a shops that are perfect for your D&D Campaign
      </p>
    </div>
  );
};

export default Header;
