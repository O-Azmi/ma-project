import React from 'react'
import './index.css'
import {createRoot} from "react-dom/client";
import Header from './components/Header'

const Element = document.getElementById("root");
const root = createRoot(Element);

root.render
(
<Header/>
)

