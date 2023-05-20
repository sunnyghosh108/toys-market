import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Gallery from '../Shared/Footer/Gallery/Gallery';
import MathToys from './MathToys';
import Language from './Language';

const AllToys = () => {
   /// const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='text-center mb-16'>
            <h3 className='text-center text-slate-950 text-5xl mb-5'>ALL TOYS CATEGORY</h3>
        <Tabs>
        <TabList>
          <Tab><span className='text-2xl text-amber-500 '>Math toys</span></Tab>
          <Tab><span className='text-2xl text-amber-500 '>Science toys</span></Tab>
          <Tab><span className='text-2xl text-amber-500 '>Language toys</span></Tab>
        </TabList>
    
        <TabPanel>
        <Tab>
        <span className='text-2xl text-amber-500 '>Math toys </span>
        </Tab>
          <Tab><span className='text-2xl text-amber-500 '>Language toys</span></Tab>
        </TabPanel>
        <TabPanel>
        <Tab><span className='text-2xl text-amber-500 '>Civil toys</span></Tab>
          <Tab><span className='text-2xl text-amber-500 '>CSE toys</span></Tab>
        </TabPanel>
        <TabPanel>
        <Tab><span className='text-2xl text-amber-500 '>EEE toys</span></Tab>
          <Tab><span className='text-2xl text-amber-500 '>IT toys</span></Tab>
        </TabPanel>
      </Tabs>
      <TabPanel>
          
        </TabPanel>
        </div>
    );
};

export default AllToys;