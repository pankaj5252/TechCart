import React from 'react'
import banner1 from '../../Assets/Images/banner1.jpg'
import banner2 from '../../Assets/Images/banner2.jpg'

const TopCategories = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="mt-2">Top Categories</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consequuntur neque recusandae ducimus, br molestias sequi illo quam <br /> repudiandae vel dolor placeat veniam, br aut debitis facilis voluptatem deleniti maiores quis dolorum.</p>
                    </div>
                    <div className="col-md-6 text-center mt-2">
                        <img src={banner1} className='category_banner w-100 mt-2' alt="" />
                    </div>
                    <div className="col-md-6 text-center mt-2">
                        <img src={banner2} className='category_banner w-100 mt-2' alt="" />
                    </div>
                    <div className="col-md-6 text-center mt-2">
                        <img src={banner1} className='category_banner w-100 mt-2' alt="" />
                    </div>
                    <div className="col-md-6 text-center mt-2">
                        <img src={banner2} className='category_banner w-100 mt-2' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCategories