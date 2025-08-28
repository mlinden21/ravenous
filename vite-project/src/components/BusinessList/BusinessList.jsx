import React from "react";
import styles from "./BusinessList.module.css";
// import { businesses } from "../../App.jsx";
import Business from "../Business/Business";

const BusinessList = (props) => {
  return (
    <div className={styles.BusinessList}>
      {props.businesses && props.businesses.length > 0 ? (
        props.businesses.map((business) => (
          <Business
            key={business.id}
            {...business}
          />
        ))
      ) : (
        <p style={{color: '#fff', textAlign: 'center'}}>No businesses found.</p>
      )}
    </div>
  );
};

export default BusinessList;