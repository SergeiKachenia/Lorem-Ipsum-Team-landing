import { ContactInfo } from 'components/ContactInfo/ContactInfo';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { OurTeam } from 'components/OurTeam/OurTeam';

import React from 'react';

import { mockTeamMembers } from 'constants/mock';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <OurTeam teamList={mockTeamMembers} />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
