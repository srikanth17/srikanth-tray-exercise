import React, { useState } from 'react';
import Header from './Header';
import Done from './pages/Done';
import Privacy from './pages/Privacy';
import Tabs from './pages/Tabs';
import User from './pages/User';

const App = () => {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextPage = () => {
    setStep(step + 1);
  };

  // Proceed to next step & console log
  const submit = (values: any) => {
    nextPage();
    console.log(values);
  };

  switch (step) {
    case 1:
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col s6 offset-s3">
                <Tabs tab={step} />
                {/*
                // @ts-ignore} */}
                <User onSubmit={nextPage} />
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col s6 offset-s3">
                <Tabs tab={step} />
                {/*
                // @ts-ignore} */}
                <Privacy onSubmit={submit} />
              </div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col s6 offset-s3">
                <Tabs tab={step} />
                <Done />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <div>Error!</div>;
  }
};

export default App;
