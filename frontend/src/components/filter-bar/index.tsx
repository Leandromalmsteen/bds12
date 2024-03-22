import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import './styles.css';
import { Store } from '../../types';

export type FilterData = {
  story: Store | null;
};

type Props = {
  onFilterChange: (data: number) => void;
};

function FilterBar({ onFilterChange }: Props) {
  const [store, setStore] = useState<Store>();
  const [storeList, setStoreList] = useState<Store[]>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value;
    onFilterChange(selectedStore as unknown as number);
    console.log(selectedStore);
  };

  useEffect(() => {
    makeRequest.get<Store[]>('/stores').then((response) => {
      setStoreList(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={store?.id} onChange={onChangeStore}>
        <option value="0">Selecione um cidade</option>
        {storeList?.map((store) => {
          return (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterBar;
