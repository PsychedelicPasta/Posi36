import React from 'react';
import tw from 'twin.macro';

const Container = tw.span`w-full fixed top-0 z-10 py-5 flex-row flex bg-white bg-opacity-75 `;
const Link = tw.a`text-black text-lg hover:bg-[#ebebeb] mx-auto px-10 py-10 justify-between rounded-md transition duration-300 ease-in-out cursor-pointer`;

function NavigationComponent({ onLinkClick }) {
  return (
    <Container>
      <Link onClick={() => onLinkClick(0)}>About</Link>
      <Link onClick={() => onLinkClick(1)}>Services</Link>
      <Link onClick={() => onLinkClick(2)}>Clients</Link>
      <Link onClick={() => onLinkClick(3)}>Work with us</Link>
    </Container>
  );
}

export default NavigationComponent;
