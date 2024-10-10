import React from 'react';
import { registerRootComponent } from 'expo';
import Index from './Index';
import CameraInterface from './SellerSideScreens/CameraInterface';

function App() {
    // return <Index />;
    return <CameraInterface></CameraInterface>
}

// registerRootComponent(App);


export default App