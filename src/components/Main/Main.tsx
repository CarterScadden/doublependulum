import React from 'react';
import Flex from '../Flex/Flex';
import { Box } from '@material-ui/core';
import PendulumWrapperContainer from './Pendulum/PendulumWrapperContainer';

const Main = () => (
  <Flex>
    <Flex flex={'none'} flexDirection={'column'}>
      <Box component="header">
        <h2>Double Pendulum</h2>
      </Box>
      <PendulumWrapperContainer />
      <article>
        <section style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <p>This is my double pendulum</p>
          <p>Feel free to mess around with the values</p>
          <p>
            <a
              href="https://github.com/CarterScadden/doublependulum/upload"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </p>
        </section>
      </article>
    </Flex>
  </Flex>
);

export default Main;