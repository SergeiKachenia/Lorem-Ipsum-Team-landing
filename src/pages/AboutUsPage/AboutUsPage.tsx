import { Benefits } from 'components/Benefits/Benefits';
import CallToAction from 'components/CallToAction/CallToAction';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import { OurTeam } from 'components/OurTeam/OurTeam';
import React, { useRef } from 'react';

import { mockTeamMembers } from 'constants/mock';

const AboutUsPage: React.FC = () => {
  const scrollContactInfo = useRef<HTMLDivElement>(null);
  const scrollDown = useRef<HTMLDivElement>(null);
  const executeScrollContactInfo = (): void => scrollContactInfo?.current?.scrollIntoView();
  const executeScrollDown = (): void => scrollDown?.current?.scrollIntoView();
  return (
    <>
      <CallToAction scrollContactInfo={executeScrollContactInfo} scrollDown={executeScrollDown} />
      <section id='benefits' ref={scrollDown}>
        <Benefits />
      </section>
      <section id='our-team'>
        <OurTeam teamList={mockTeamMembers} />
      </section>
      <section id='contact-info' ref={scrollContactInfo}>
        <ContactInfo />
      </section>
    </>
  );
};

export default AboutUsPage;
