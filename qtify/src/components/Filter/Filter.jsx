

import React from 'react';
import style from "./Filter.module.css";
import { Box, Tabs,Tab, Typography } from '@mui/material';
function TabPanel({ props }) {
    const { children,value,index,...other} = props;
  return (
    <div role='tabPanel'
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
        >
      {value === index && (
        <Box sx={{p:3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Filter({filters,selectedFilterIndex,setSelectedFilterIndex}) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
        <Tabs 
          value={selectedFilterIndex}
          onChange={handleChange}
          aria-label="filter tabs"
          TabIndicatorProps={{
            style: 
            {backgroundColor: 'var(--color--primary)'},}}
        >
          {filters.map((filter, index) => (
            <Tab
            className={style.tab}   
              key={filter.key}
              label={filter.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
    </div>
  );
}

export default Filter;