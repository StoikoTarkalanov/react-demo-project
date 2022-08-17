import { useEffect, useState } from 'react';
import * as dataService from '../../services/dataServices';
import DataCard from './Card/DataCard';
import usePaginate from '../../hooks/usePaginate';
import Paginate from '../Common/Paginate';
import './Catalog.css';

const Catalog = () => {
  const [data, setCurrentData] = useState([]);
  const [filteredDataArr, setFilteredDataArr] = useState([]);

  useEffect(() => {
    (async () => {
      const catalogData = await dataService.getAllData();
      setCurrentData(catalogData.users);
      setFilteredDataArr(catalogData.users);
    })();
  }, []);

  const handleFilter = async (e) => {
    let rawValue = e.target.value;
    let [isGender, value] = rawValue.split('-');
    let filteredData;

    if (isGender === 'true') {
      filteredData = data.filter((x) => x.gender === value);
    } else if (isGender === 'false') {
      filteredData = data.filter((x) => x.company.department === value);
    }

    setFilteredDataArr(filteredData);
  };

  const [currentData, postsPerPage, paginate] = usePaginate(filteredDataArr);

  return (
    <>
      <h1 className="catalog-title">All Data</h1>
      <div className="catalog-select">
        <select onChange={handleFilter}>
          <option defaultValue hidden>
            Select Filter
          </option>
          <option value="true-male">Gender: male</option>
          <option value="true-female">Gender: female</option>
          <option value="false-Services">Company Department: Services</option>
          <option value="false-Sales">Company Department: Sales</option>
          <option value="false-Marketing">Company Department: Marketing</option>
        </select>
      </div>
      <section className="catalog-data">
        {data?.length > 0 ? (
          <>
            {currentData.map((x) => (
              <DataCard key={x.id} cardData={x} />
            ))}
          </>
        ) : (
          <p className="no-data">Don't have data yet!</p>
        )}
      </section>
      {data.length > 0 ? (
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={filteredDataArr.length}
          paginate={paginate}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Catalog;
