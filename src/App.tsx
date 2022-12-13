import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import Header from 'components/Header/Header';
import React from 'react';
<<<<<<<<< Temporary merge branch 1
import { BrowserRouter } from 'react-router-dom';

import { OurTeam } from './components/OurTeam/OurTeam';
import { mockTeamMembers } from './constants/mock';
export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <OurTeam teamList={mockTeamMembers} />
    </BrowserRouter>
=========

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <ContactInfo />
      </main>
    </>
>>>>>>>>> Temporary merge branch 2
  );
};
