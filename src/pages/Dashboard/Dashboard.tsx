import {
  PageSection, Content, Title
} from '@patternfly/react-core';
import { useState } from 'react';

export default function Dashboard() {

  return (
    <PageSection>
      <Title headingLevel="h1">Dashboard</Title>
      <Content component="p">This is a PatternFly + Vite + TypeScript + React 19 app.</Content>
    </PageSection>
  );
}
