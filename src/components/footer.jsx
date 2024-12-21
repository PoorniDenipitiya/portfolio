// src/components/Footer.jsx
import React from 'react';
import { Layout } from 'antd';
import './footer.css';  // Importing the Footer-specific CSS

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="custom-footer">
      © 2024 Poorni Denipitiya. All Rights Reserved.
    </Footer>
  );
};

export default CustomFooter;
