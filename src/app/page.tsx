"use client";

import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { useState } from 'react';

export default function Home() {
  const [navLinks] = useState([
    { name: "#hero", id: "hero" },
    { name: "#about", id: "about" },
    { name: "#how-to-buy", id: "how-to-buy" },
    { name: "#tokenomics", id: "tokenomics" },
    { name: "#faq", id: "faq" },
    { name: "#footer", id: "footer" },
  ]);
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase logoSrc="/images/logo.svg" logoAlt="GiggleCoin Logo" navItems={navLinks} buttonText="Buy GiggleCoin" onButtonClick={() => alert('Buying GiggleCoin')}/>
      <BillboardHero title="Welcome to GiggleCoin Playground" subtitle="Join the fun of crypto trading"/>
      <SplitAbout description="GiggleCoin is a playful digital currency designed for fun and engagement in the community."/>
      <HowToBuy3D title="How to Buy GiggleCoin" steps={[{ title: 'Step 1', description: 'Create a wallet', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Purchase GiggleCoin', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Join the community', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]}/>
      <ExpandingGridTokenomics title="Tokenomics" description="Explore the GiggleCoin economy and its playful utility." cardItems={[{ id: 1, title: 'Supply', description: 'Total supply of GiggleCoin' }, { id: 2, title: 'Liquidity', description: 'Usable liquidity for all transactions' }, { id: 3, title: 'Community Fund', description: 'Funds set aside for community projects' }]}/>
      <CentralFAQ items={[{ title: 'What is GiggleCoin?', content: 'GiggleCoin is a fun cryptocurrency to engage users in the digital space.' }, { title: 'How to buy GiggleCoin?', content: 'You can buy GiggleCoin through various exchanges.' }, { title: 'Where can I spend GiggleCoin?', content: 'You can spend GiggleCoin at partnered merchants and events.' }, { title: 'Is GiggleCoin secure?', content: 'Yes, it employs strong security measures for all transactions.' }]}/>
      <FooterBase logoSrc="/images/logo.svg" logoAlt="GiggleCoin Logo" columns={[{ title: 'Links', items: [{ label: 'Home', onClick: () => { } }, { label: 'About', onClick: () => { } }, { label: 'Contact', onClick: () => { } }] }, { title: 'Social', items: [{ label: 'Twitter', onClick: () => { } }, { label: 'Discord', onClick: () => { } }, { label: 'GitHub', onClick: () => { } }] }]} copyrightText="© 2023 GiggleCoin. All rights reserved." onPrivacyClick={() => alert('Privacy Policy')} />
    </SiteThemeProvider>
  );
}