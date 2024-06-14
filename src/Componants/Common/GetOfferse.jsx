import React from 'react'

const GetOfferse = () => {
    return (
        <>
            <div className="latest-area d-flex align-items-center p-5" >
                <div className="container">
                    <div className="row d-flex align-items-center p-5">
                        <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                            <div className="latest-caption">
                                <h1 className='fw-bold'>Get Our<br />Latest Offers News</h1>
                                <p>Subscribe news latter</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 ">
                            <div className="latest-subscribe mt-3">
                                <form action="#" className="d-flex">
                                    <input type="email" placeholder="Your email here" className="form-control height" />
                                    <button className="btn btn-success height">Shop Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetOfferse