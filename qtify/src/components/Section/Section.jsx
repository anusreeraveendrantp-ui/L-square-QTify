import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style  from"./Section.module.css";
import { data } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";  

const Section = ({ title, data, filterSource, type }) => {
  const [filters, setFilters] = useState([{key:"all",label:"All"}]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(prevState => !prevState);
  };

  useEffect(() => {
   if(filterSource){
      filterSource().then((response) => {
        const {data} = response;
        setFilters( [...filters, ...data]);
      })
    }
  }, []);
  const showFilter =filters.length > 1;
  const cardsToRender = data.filter((card)=> 
  showFilter && selectedFilterIndex !==0 ? 
  card.genre.key === filters[selectedFilterIndex].key : card)

  return (
    <div>
    <div className={style.header}>
      {/* Header */}
       <h3 className={style.title}>{title}</h3>
     <h4 className={style.toggleText} onClick={handleToggle}>
       {carouselToggle ? "Show All" : "Collapse"}
     </h4>
       </div>
        {/* <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        > */}
         
        {/* </button> */}
      
    
     {showFilter && (
      <div className={style.filterWrapper}>
       <Filter 
       filters={filters}
       selectedFilterIndex={selectedFilterIndex}
       setSelectedFilterIndex={setSelectedFilterIndex}
       />
      </div>
     )}
     {data.length === 0 ? (
  <CircularProgress />
) : carouselToggle ? (
  <div className={style.cardsWrapper}>
    {cardsToRender.map((ele) => (
      <Card key={ele.id || ele.slug} data={ele} type={type} />
    ))}
  </div>
) : (
  <Carousel
    data={cardsToRender}
    renderComponent={(data) => <Card data={data} type={type} />}
  />
)}

    </div>
  );
};

export default Section;
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


