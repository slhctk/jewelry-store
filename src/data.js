import {  FaBook, FaBriefcase } from 'react-icons/fa';
import { GiIntricateNecklace, GiHeartEarrings,GiPrimitiveNecklace } from 'react-icons/gi';
import { VscFeedback } from 'react-icons/vsc';

import React from 'react';
const sublinks = [
   {
    page: 'Home',
    links:[{}],
  },
  {
    page: 'products',
    links: [
      { label: 'necklaces', icon: <GiIntricateNecklace />, url: '/products' },
      { label: 'bracelets', icon: <GiPrimitiveNecklace />, url: '/products' },
      { label: 'earrings', icon: <GiHeartEarrings />, url: '/products' },
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
      { label: 'customers', icon: <VscFeedback />, url: '/products' },
    ],
  },
];

export default sublinks;
