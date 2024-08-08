import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import {  useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../component/loader/Loader";

const categoryList = [
  {
      name: 'summer-fruit'
  },
  {
      name: 'summer-Vegetable'
  },
  {
      name: 'dry-fruit'
  },
  {
      name: 'winter-fruit'
  },
  {
      name: 'winter-vegetable'
  },
  {
      name: 'spices'
  },
  {
      name: 'juice'
  },
  {
      name: 'other'
  }
]
const AddProductPage = () => {

  const context = useContext(myContext);
  const {loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setproduct] = useState({
    title : "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity : 1,
    time : Timestamp.now(),
    date : new Date().toDateString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const addProductfun = async ()  => {
    if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "") {
      return toast.error("all fields are required");
    }

    // setLoading(true);

    setLoading(true);
        try {
            const productRef = collection(fireDB, 'product');
            await addDoc(productRef, product)
            toast.success("Add product successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Add product failed");
        }
  }

  return (
      <div>
          <div className='flex justify-center items-center h-screen'>
           {loading && <Loader/>}
              {/* Login Form  */}
              <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                  {/* Top Heading  */}
                  <div className="mb-5">
                      <h2 className='text-center text-2xl font-bold text-pink-500 '>
                          Add Product
                      </h2>
                  </div>

                  {/* Input One  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          name="title"
                          value={product.title}
                          onChange={(e) => {
                            setproduct({
                              ...product,
                              title: e.target.value
                            })
                          }}
                          placeholder='Product Title'
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Two  */}
                  <div className="mb-3">
                      <input
                          type="number"
                          placeholder='Product Price'
                          value={product.price}
                          onChange={(e) =>{
                            setproduct({
                              ...product,
                              price: e.target.value
                            })
                          }}
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Three  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          placeholder='Product Image Url'
                          value={product.productImageUrl}
                          onChange={(e) =>{
                            setproduct({
                              ...product,
                              productImageUrl: e.target.value
                            })
                          }}
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Four  */}
                  <div className="mb-3">
                      <select 
                      value={product.category}
                      onChange={(e) =>{
                        setproduct({
                          ...product,
                          category: e.target.value
                        })
                      }}
                      className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                          <option disabled>Select Product Category</option>
                          {categoryList.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                              )
                          })}
                      </select>
                  </div>

                  {/* Input Five  */}
                  <div className="mb-3">
                      <textarea 
                      value={product.description}
                      onChange={(e) =>{
                        setproduct({
                          ...product,
                          description: e.target.value
                        })
                      }}
                      name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">

                      </textarea>
                  </div>

                  {/* Add Product Button  */}
                  <div className="mb-3">
                      <button
                          type='button'
                          onClick={addProductfun}
                          className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                      >
                          Add Product
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AddProductPage;