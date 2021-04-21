/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Menu } from 'semantic-ui-react';

const BootcampMenu = () => {
  const [activeItem, setActiveItem] = useState('about');
  const handleItemClick = (name) => {
    setActiveItem(name);
    navigate(`/bootcamp#${name}`);
  };
  return (
    <Menu
      secondary
      pointing
      color="purple"
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 16,
      }}
    >
      <Menu.Item
        name="why code"
        active={activeItem === 'code'}
        onClick={() => handleItemClick('code')}
      />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={() => handleItemClick('about')}
      />
      <Menu.Item
        name="structure"
        active={activeItem === 'structure'}
        onClick={() => handleItemClick('structure')}
      />
      <Menu.Item
        name="curriculum"
        active={activeItem === 'curriculum'}
        onClick={() => handleItemClick('curriculum')}
      />
      <Menu.Item
        name="pricing"
        active={activeItem === 'pricing'}
        onClick={() => handleItemClick('pricing')}
      />
      <Menu.Item
        name="technologies"
        active={activeItem === 'technologies'}
        onClick={() => handleItemClick('technologies')}
      />
    </Menu>
  );
};

export default BootcampMenu;
