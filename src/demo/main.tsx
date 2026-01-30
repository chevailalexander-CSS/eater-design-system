import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '../theme/tokens.css';
import '../components/Button/Button.module.css';
import '../components/Input/Input.module.css';
import '../components/Typography/Typography.module.css';
import '../components/QuantityStepper/QuantityStepper.module.css';
import '../components/Card/Card.module.css';
import '../components/Navigation/TopAppBar.module.css';
import '../components/Sheet/Sheet.module.css';
import '../components/FormGroup/FormGroup.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
