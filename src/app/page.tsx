'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopHeader from '@/components/Header';
import Footer from '@/components/Footer';
import { TbCircleCheckFilled } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

interface Product {
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    name: "The Dandy chair",
    price: 250,
    image: "/dandy-chair.jpg",
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: "/rustic-vase.jpg",
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: "/silky-vase.jpg",
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: "/lucy-lamp.jpg",
  },
];

export default function Page(): React.ReactElement {
  return (
    <div className="relative h-screen w-full bg-white">
      <TopHeader />

      <div className="relative w-full h-[80vh]">
        <Image
          src="/hero.jpg"
          alt="Luxury furniture display"
          fill
          className="object-cover"
          style={{ objectPosition: 'top' }}
          priority
        />
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 bg-white p-6 sm:p-14 w-full sm:w-[600px]">
          <h1 className="text-2xl sm:text-4xl font-light leading-tight text-gray-900 mb-6">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Shop the new Spring 2022 collection today
          </p>

          <div className="flex items-center justify-center bg-[#F9F9F9] w-[180px] h-[60px]">
            <Link
              href="/collection"
              className="text-sm sm:text-base leading-6 font-satoshi text-[#2A254B] hover:text-[#2A254B]/80 transition-colors whitespace-nowrap"
              style={{
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
              }}
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 pb-16 px-4">
        <h2 className="text-2xl sm:text-3xl text-[#2A254B] mb-12">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <TbTruckDelivery className="text-3xl" />,
            title: 'Next day as standard',
            description: 'Order before 3pm and get your order the next day as standard',
          },
          {
            icon: <CiCircleCheck className="text-3xl" />,
            title: 'Made by true artisans',
            description: 'Handmade crafted goods made with real passion and craftsmanship',
          },
          {
            icon: <GoCreditCard className="text-3xl" />,
            title: 'Unbeatable prices',
            description: 'For our materials and quality you wont find better prices anywhere',
          },
          {
            icon: <LuSprout className="text-3xl" />,
            title: 'Recycled packaging',
            description: 'We use 100% recycled to ensure our footprint is more manageable',
          }].map((feature, index) => (
            <div key={index} className="relative bg-[#F9F9F9] p-6 text-left">
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="font-medium mb-2 text-[#2A254B]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-lg text-gray-900">£{product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-[70px]">
          <div className="flex items-center justify-center bg-[#F9F9F9] w-[180px] h-[60px]">
            <Link
              href="/collection"
              className="text-base text-[#2A254B] hover:text-[#2A254B]/80 transition-colors"
            >
              View collection
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-16 px-4">
        <div className="bg-[#2A254B] p-12 text-white flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl mb-4">It started with a small idea</h2>
          <p className="mb-8 text-sm sm:text-base">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <div className="flex items-center space-x-8 mt-[170px]">
            <Link
              href="/collection"
              className="inline-block bg-transparent border border-white px-8 py-3 text-white hover:bg-white hover:text-[#2A254B] transition-colors"
              style={{
                width: '170px',
                height: '56px',
                padding: '16px 32px',
                gap: '10px',
              }}
            >
              View More
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src="/yellow-chair.jpg"
            alt="Modern interior with yellow chair"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/above-footer.jpg")' }}></div>
        <div className="max-w-2xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl text-white mb-4">Join the club and get the benefits</h2>
          <p className="text-white mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>

          <div className="flex justify-center gap-8 mb-8">
            {['Exclusive offers', 'Free events', 'Large discounts'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <TbCircleCheckFilled className="text-white w-4 h-4" /> {/* Checkmark icon */}
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-white bg-transparent text-white placeholder-white rounded-l-md"
            />
            <button className="bg-[#2A254B] text-white px-10 py-3 hover:bg-[#2A254B]/90 transition-colors rounded-r-md">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Add Footer here */}
      <Footer />
    </div>
  );
}
