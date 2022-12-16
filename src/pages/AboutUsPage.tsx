import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import { OurTeam } from 'components/OurTeam/OurTeam';

import React from 'react';

import { mockTeamMembers } from 'constants/mock';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <OurTeam teamList={mockTeamMembers} />
      <ContactInfo />
    </>
  );
};

export default AboutUsPage;
