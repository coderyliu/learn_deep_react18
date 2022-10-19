import React, { memo, useState } from "react";

import filterData from "@/assets/data/filter-data.json";
import { EntireFilterWrapper } from "./style";

const EntireFilter = memo(() => {
  const [showItems, setShowItems] = useState([]);

  function handleItemClick(item) {
    const newItemArr = [...showItems];
    if (newItemArr.includes(item)) {
      const index = newItemArr.indexOf(item);
      newItemArr.splice(index, 1);
    } else {
      newItemArr.push(item);
    }

    setShowItems(newItemArr);
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              key={item}
              onClick={(e) => handleItemClick(item)}
              className={showItems.includes(item) ? "item active" : "item"}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
