import React from "react";
import styles from "./BusinessList.module.css";
import { businesses } from "../../App.jsx";
import Business from "../Business/Business";

const BusinessList = () => {
  return (
    <div className={styles.BusinessList}>
    {businesses.map(business => <Business business={business} />)}
    </div>
  );
};

export default BusinessList;
