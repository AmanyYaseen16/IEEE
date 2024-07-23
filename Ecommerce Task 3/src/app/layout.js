'use client';
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import StoreProvider from '@/app/StoreProvider';
config.autoAddCss = false;


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
