import React from 'react'
import './index.css'
import {createRoot} from "react-dom/client";
import Homepage from './components/Pages/Homepage';

const Element = document.getElementById("root");
const root = createRoot(Element);

root.render
(
<Homepage/>
)

