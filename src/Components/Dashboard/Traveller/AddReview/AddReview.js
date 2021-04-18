import React from 'react';
import './AddReview.css'
import TravellerSidebar from '../../TravellerSidebar/TravellerSidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const AddReview = () => {
    
    return (
        <section className="review-section">
            <div className="row">
            <TravellerSidebar/>
            <div className="col-md-8 add-review">
                <h3>Add Review</h3>
                <ReviewForm/>
            </div>
            </div>
        </section>
    );
};

export default AddReview;