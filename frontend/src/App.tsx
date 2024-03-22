import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import SalesByStore from './components/sales-by-store';
import FilterBar from './components/filter-bar';

function App() {
  const [filterStore, setFilterStore] = useState<number>(0);

  const onFilterChange = (data: number) => {
    setFilterStore(data);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <FilterBar onFilterChange={onFilterChange} />
        <SalesByStore filterStore={filterStore} />
      </div>
    </>
  );
}

export default App;
