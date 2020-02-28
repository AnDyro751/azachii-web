import React from 'react';
import { ThemeProvider } from './src/contexts/Theme';
import 'bootstrap-4-grid/css/grid.min.css';
import './src/css/global.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
