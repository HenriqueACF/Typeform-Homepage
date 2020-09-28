import React, { useEffect } from 'react';

import GlobalStyles from './styles/global';
import { Main, Section, Sticky } from './styles';

import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';

function App() {
  React.useEffect(()=>{
    window.scrollTo({top:0})
  })
  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{height: '1616vh'}}> 
        <Section style={{height:'72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{height:'9.7%'}}>
          <Sticky className="third" />
        </Section>

        <Section style={{height:'10.1%'}}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}

export default App;
