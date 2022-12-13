import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import Header from 'components/Header/Header';
import React from 'react';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <ContactInfo />
      </main>
    </>
  );
};
