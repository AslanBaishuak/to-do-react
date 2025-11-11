import React, { useState } from "react";
import Dropdown from "./Dropdown";

const FilterForm = ({FilterTasksCategory}) => {
    const categoryOptions = [
      { value: "all"},
      { value: "personal" },
      { value: "home" },
      { value: "school" },
    ];

    return(
        <Dropdown options={categoryOptions} onChange = {(e) => FilterTasksCategory(e.target.value)}/>
    );
}

export default FilterForm;