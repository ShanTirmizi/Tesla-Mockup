import './App.css';
import Navbar from './components/Navbar/Navbar';
import PageContent from './components/PageContent/PageContent';
import Model3 from './Images/Model3.jpeg';
import ModelS from './Images/ModelS.jpeg';
import ModelX from './Images/ModelX.jpeg';
import ModelY from './Images/ModelY.jpeg';
import SolarPanel from './Images/SolarPanels.jpeg';
import SolarRoof from './Images/SolarRoof.jpeg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <PageContent
        title='Model S'
        description='Order Online for Touchless Delivery'
        descriptionLink=''
        img={ModelS}
        btn1='CUSTOM ORDER'
        btn1Link=''
        btn2='EXISTING INVENTORY'
        btn2Link=''
        doubleBtn='true'
        first
      />
      <PageContent
        title='Model Y'
        description='Order Online for Touchless Delivery'
        descriptionLink=''
        img={ModelY}
        btn1='CUSTOM ORDER'
        btn1Link=''
        btn2='LEARN MORE'
        btn2Link=''
        doubleBtn='true'

      />
      <PageContent
        title='Model 3'
        description='Order Online for Touchless Delivery'
        descriptionLink=''
        img={Model3}
        btn1='ORDER NOW'
        btn1Link=''
        btn2='EXISTING INVENTORY'
        btn2Link=''
        doubleBtn='true'

      />
      <PageContent
        title='Model X'
        description='Order Online for Touchless Delivery'
        descriptionLink=''
        img={ModelX}
        btn1='ORDER NOW'
        btn1Link=''
        btn2='EXISTING INVENTORY'
        btn2Link=''
        doubleBtn='true'
      />
      <PageContent
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        descriptionLink=''
        img={SolarRoof}
        btn1='ORDER NOW'
        btn1Link=''
        btn2='LEARN MORE'
        btn2Link=''
        doubleBtn='true'
      />

      <PageContent
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        descriptionLink=''
        img={SolarPanel}
        btn1='ORDER NOW'
        btn1Link=''
        btn2='LEARN MORE'
        btn2Link=''
        doubleBtn='true'
      />

    </div>
  );
}

export default App;
