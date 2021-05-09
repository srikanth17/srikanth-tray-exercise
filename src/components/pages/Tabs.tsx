import React from 'react';
import styled from 'styled-components';
import { tabItems } from '../../types/types';

const ListItems = styled.ul`
  border: 1px solid;
`;

const Item = styled.a`
  border-right: 1px solid black;
  color: black !important;
`;

interface TabsProps {
  tab: number;
}

const Tabs = ({ tab }: TabsProps) => (
  <ListItems className="tabs tabs-fixed-width tab-demo">
    {tabItems.map((t, index) => (
      <li key={t} className="tab disabled">
        <Item className={tab === index + 1 ? 'active' : ''}>{t}</Item>
      </li>
    ))}
  </ListItems>
);

export default Tabs;
