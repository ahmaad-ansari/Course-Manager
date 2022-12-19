import React from 'react';
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BiBookAdd, BiBookAlt, BiInfoCircle, BiCommand, BiShow } from 'react-icons/bi';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';


export const adminLinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Management',
        icon: <BiCommand />,
      },
      {
        name: 'View',
        icon: <BiShow />,
      }
    ]
  },

  {
    title: 'Account',
    links: [
      {
        name: 'Details',
        icon: <BiInfoCircle />,
      }
    ]
  }
];

export const userLinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Registration',
        icon: <BiBookAdd />,
      },
      {
        name: 'Courses',
        icon: <BiBookAlt />,
      }
    ]
  },

  {
    title: 'Account',
    links: [
      {
        name: 'Details',
        icon: <BiInfoCircle />,
      }
    ]
  }
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#2563eb',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];
