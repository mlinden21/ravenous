import React from 'react';
import Business from 'src/components/business';
import './businessList.css';

class BusinessList extends React.Component{
    render(){
        return (
            <div className="business-list">
            <Business />
            <Business />
            <Business />
            <Business /> 
            <Business />
            </div>
        )
    }
}

export default BusinessList;