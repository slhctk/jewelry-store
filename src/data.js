import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'necklaces', icon: <FaCreditCard />, url: '/products' },
      { label: 'bracelets', icon: <FaCreditCard />, url: '/products' },
      { label: 'earrings', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Q&A',
    links: [
      { label: 'FAQS', icon: <FaBook />, url: '/products' },
      
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about us', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
