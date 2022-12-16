import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { OurTeam } from './components/OurTeam/OurTeam';
import { mockTeamMembers } from './constants/mock';
export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main>
        <OurTeam teamList={mockTeamMembers} />
        <ContactInfo />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
