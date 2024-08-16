// src/pages/index.js
import React from 'react';
import PlurkLayout from '@site/src/components/plurk/PlurkLayout';
import Hero from '@site/src/components/plurk/Hero';

export default function MyPage() {
  return (
    
      <PlurkLayout title="My Custom Page">
        <Hero />
      </PlurkLayout>
   
  );
}