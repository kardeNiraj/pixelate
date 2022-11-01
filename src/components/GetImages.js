/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Image from './Image';

function GetImages() {
  // STATES
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  // URLS
  const clientID = `?client_id=${process.env.REACT_APP_API_KEY}`;
  const mainUrl = `https://api.unsplash.com/photos`;
  const searchUrl = `https://api.unsplash.com/search/photos`;

  const fetchImages = async () => {
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    else url = `${mainUrl}${clientID}${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages((oldImages) => {
        if (query && page === 1) {
          console.log(data);
          return data.results;
        } else if (query) {
          console.log(data);
          return [...oldImages, ...data.results];
        } else {
          console.log(data);
          return [...oldImages, ...data];
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return window.removeEventListener('scroll', event);
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <div>
      {/* search bar */}
      <div class="flex justify-end pr-10">
        <div class="mb-3 xl:w-96 mt-3">
          <div class="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-skin-card bg-clip-padding border-2 border-solid border-skin-card rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={keyDownHandler}
            />
            <button
              className="text-skin-border ml-1 btn px-6 border-2 border-skin-navbar bg-skin-navbar font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
              onClick={submitHandler}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      {/* container for images */}

      {images < 20 ? (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">
              <i class="fa-solid fa-spinner"></i>
            </span>
          </div>
        </div>
      ) : (
        <section className="px-3 container mx-auto">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl my-10 lg:mt-5 lg:mb-10 text-skin-base capitalize">
            Recommended for you
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <Image key={image.blur_hash} {...image} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default GetImages;
