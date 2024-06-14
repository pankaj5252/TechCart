import React from 'react'
import '../../Styles/categories.css'

const Discounts = () => {
    return (
        <>
            <div class="container-fluid p-5 mt-2 discount_bg">
                <div class="row">
                    <div class="col-md-12">
                        <div class="banner_full_content">
                            <h2 className='text-success'>Black Fridays !</h2>
                            <h1 style={{fontSize:"70px"}}>Sale 50% OFf</h1>
                            <h3>all vegetable products</h3>
                            <button className='btn btn-success'>discover now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discounts