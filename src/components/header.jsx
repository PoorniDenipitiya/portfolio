// src/components/Header.jsx
import React from 'react';
import { Layout } from 'antd';
import './header.css';  // Importing the Header-specific CSS

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="custom-header">
      <div className="logo">My Portfolio</div>
    </Header>
  );
};

export default CustomHeader;
