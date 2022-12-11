import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { OurTeam } from './components/OurTeam/OurTeam';
import { mockTeamMembers } from './constants/mock';
export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <OurTeam teamList={mockTeamMembers} />
    </BrowserRouter>
  );
};
