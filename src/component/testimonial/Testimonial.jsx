import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className='text-gray-500 body-font mb-10'>
                {/* main */}
                <div className='container px-5 py-10 mx-auto'>
                    <h1 className='text-center text-2xl font-semibold text-black'>Testimonial</h1>
                    {/* para */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>What our <span className='text-pink-500'>Customers</span>are saying</h2>

                    <div className='flex flex-wrap -m-4'>
                        {/* Testimonial 1*/}
                        <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                            <img alt="testimonial1" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.freeiconspng.com/uploads/flat-face-icon-23.png" />
                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase text-center">VISHANT KUMAR</h2>
                            <p className="text-gray-500 text-center">Senior Product Designer</p>
                        </div>
                        {/* Testimonial 2*/}
                        <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                            <img alt="testimonial2" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.freeiconspng.com/uploads/flat-face-icon-23.png" />
                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase text-center">s.mishra</h2>
                            <p className="text-gray-500 text-center">ui develepor</p>
                        </div>

                        {/* Testimonial 3*/}
                        <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                            <img alt="testimonial2" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.freeiconspng.com/uploads/flat-face-icon-23.png" />
                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            <h2 className="text-gray-900 text-center font-medium title-font tracking-wider text-sm uppercase">acv</h2>
                            <p className="text-gray-500 text-center">CTO</p>
                        </div>

                    </div>



                </div>
            </section>
        </div>
    )
}

export default Testimonial
