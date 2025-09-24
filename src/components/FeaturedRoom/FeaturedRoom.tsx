'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/models/rooms';

type Props = {
  featuredRoom?: Room; // make it optional
};

const FeaturedRoom: FC<Props> = ({ featuredRoom }) => {
  if (!featuredRoom) {
    // Render a skeleton loader or fallback UI
    return (
      <section className="px-4 py-10 container mx-auto">
        <p className="text-center text-gray-500">Loading featured room...</p>
      </section>
    );
  }

  const discountedPrice =
    featuredRoom.price -
    (featuredRoom.price * featuredRoom.discount) / 100;

  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto">
      {/* Images */}
      <div className="md:grid gap-8 grid-cols-1">
        {/* Cover image */}
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image
            src={featuredRoom.coverImage?.url}
            alt={featuredRoom.name}
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>

        {/* Secondary images */}
        <div className="grid grid-cols-2 gap-8 h-48">
          {featuredRoom.images?.slice(1, 3).map((image) => (
            <div key={image._key} className="rounded-2xl overflow-hidden">
              <Image
                src={image.url}
                alt={featuredRoom.name}
                width={300}
                height={300}
                className="img scale-animation"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="md:py-10 md:w-1/2 text-left">
        <h3 className="font-heading mb-12">Featured Room</h3>

        <p className="font-normal max-w-md">{featuredRoom.description}</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-5">
          <div className="flex mb-3 md:mb-0">
            <div className="flex gap-3 flex-col items-center justify-center mr-4">
              <p className="text-xs lg:text-xl text-center">Start From</p>
              <p className="md:font-bold flex font-medium text-lg xl:text-5xl">
                ${featuredRoom.price}
              </p>
            </div>
            <div className="flex gap-3 flex-col items-center justify-center mr-4">
              <p className="text-xs lg:text-xl text-center">After Discount</p>
              <p className="md:font-bold flex font-medium text-lg xl:text-5xl text-green-600">
                ${discountedPrice}
              </p>
              <p className="text-xs text-gray-500">
                ({featuredRoom.discount}% off)
              </p>
            </div>
          </div>

          <Link
            href={`/rooms/${featuredRoom.slug?.current}`}
            className="border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl hover:bg-tertiary-dark hover:text-white transition"
          >
            More Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
