import React, { Fragment } from "react";
import TabProgram from "../../wrappers/Program/TabProgram";
import TabProductTwelve from "../../wrappers/product/TabProductTwelve";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <Fragment>
    
              
            <TabProgram spaceBottomClass="pb-60 mt-5 bg-light"  category="Program" />

  
  

            <TabProductTwelve
          category="Nutrition"
          spaceTopClass="pt-95"
          
        />
 

   
      
  
  

    </Fragment>
  );
};

export default Category;
