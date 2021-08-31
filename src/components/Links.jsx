import React from 'react';
import LinkItem from './LinkItem';
import '../styles/components/Links.scss';

const Links = ({ links }) => {
  console.log(links);
  return (
    <main className='content'>
      <ul>
        {links.map(link => (
          <LinkItem key={link.url} link={link} />
        ))}
      </ul>
    </main>
  );
};

export default Links;
