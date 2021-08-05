import { FaCreditCard, FaBook, FaBriefcase,FaWater,FaTree,FaCoffee,FaMosque,FaSnowman,FaFish} from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'dunya',
    links: [
      { label: 'avrupa', icon: <FaCreditCard />, url: '/avrupa' },
      { label: 'asya', icon: <FaCreditCard />, url: '/asya' },
      { label: 'amerika', icon: <FaCreditCard />, url: '/amerika' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'hakkimizda',
    links: [
      { label: 'hakkimizda', icon: <FaBriefcase />, url: '/hakkimizda' },
      { label: 'destek', icon: <FaBriefcase />, url: '/destek' },
    ],
  },
  {
    page: 'turkiye',
    links: [
      { label: 'marmara', icon: <FaWater />, url: '/marmara' },
      { label: 'akdeniz', icon: <FaTree />, url: '/akdeniz' },
      { label: 'ege', icon: <FaCoffee />, url: '/ege' },
      { label: 'ic anadolu', icon: <FaMosque />, url: '/icanadolu' },
      { label: 'dogu anadolu', icon: <FaSnowman />, url: '/doguanadolu' },
      { label: 'karadeniz', icon: <FaFish />, url: '/karadeniz' },
    ],
  },
];

export default sublinks;
