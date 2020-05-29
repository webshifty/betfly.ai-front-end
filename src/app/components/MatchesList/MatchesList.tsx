import React from 'react';

import { ApiService } from '../../../services/api-service';

import styled from 'styled-components/macro';

interface Props {}

const MatchesListDIV = styled.div`
  display: flex;
  flex-direction: column;
`;

export function MatchesList(props: Props) {
  return <MatchesListDIV></MatchesListDIV>;
}
