import React from 'react';
import { Helmet } from 'react-helmet-async';

import { ApiService } from '../../../services/api-service';

export function HomePage() {
  const matches = ApiService.getMatches();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="matches-list__container">
        <p>Matches</p>
        <ul className="matches-list">
          {matches.map(match => {
            return (
              <li className="match">
                <p>name</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
