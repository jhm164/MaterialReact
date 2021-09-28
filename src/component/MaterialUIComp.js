import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ProductPrice from './ProductPrice'
import ProductList from './ProductList'
import '../css/MaterialUIComp.css'
export default function App() {
  return (
    <div>
<div class="firstSection">
<h1>Every diamond is unique</h1>
</div>
<ProductList/>
<ProductPrice/>
    </div>
  );
}