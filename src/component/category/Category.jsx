import { useNavigate } from 'react-router';

const category = [
    {
        image: 'https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1643033370/BW%20BLOG/Untitled-design-2022-01-24T193825.271--1-.jpg',
        name: 'summer-fruit'
    },
    {
        image: 'https://plantingyourfuture.com/wp-content/uploads/2020/09/2411-1600x1067.jpg',
        name: 'summer-Vegetable'
    },
    {
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/6426/23d687c8-163e-4211-97ba-68f025fd7974.jpg',
        name: 'dry-fruit'
    },
    {
        image: 'https://s.hdnux.com/photos/01/07/27/63/18709716/4/rawImage.jpg',
        name: 'winter-fruit'
    },
    {
        image: 'https://s.hdnux.com/photos/65/52/10/14066221/5/rawImage.jpg',
        name: 'winter-vegetable'
    },
    {
        image: 'https://cdn.britannica.com/q:60/86/157986-050-D84944DF/indian-spices.jpg',
        name: 'spices'
    },
    {
        image: 'https://webstockreview.net/images/clipart-home-garden-13.png',
        name: 'Home'
    }

]

const Category = () => {

    const navigate = useNavigate();

    return (
        // nviaget
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1  */}
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    {/* main2 */}
                    <div className="flex">
                        {/* category */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div 
                                    onClick={()=> navigate(`/category/${item.name}`)}
                                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-pink-500 transition-all hover:bg-pink-4 cursor-pointer mb-1">
                                        <div className="flex justify-center mb-12">
                                            { /*Image tag */}
                                            <img src={item.image} alt="catm3" />
                                        </div>
                                    </div>
                                    {/* Name text  */}
                                    <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name} </h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n -ms-overflow-style: none ;\n scrollbar-width: none;\n}\n .hide-scroll-bar:: -webkit-scrollbar {\n display: none;\n}\n" }} />
        </div>

        // <div>
        //   Category
        //   Category
        // </div>
    );
}

export default Category;
