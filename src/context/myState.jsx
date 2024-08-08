import { useState } from "react";
import myContext from "./myContext"
import { QuerySnapshot, collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { useEffect } from "react";



function MyState({ children }) {
  const name = "qwer asdf zxcv";
  const [loading, setLoading] = useState(false);
  // user state
  const [getAllProduct, setGetAllProduct] = useState([]);


  // get all product
  const getAllProductfunc = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "product"),
        orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      toast.error("faild");
      setLoading(false);
    }
  }

  // order state 

  const [getAllOrder, setGetAllOrder] = useState([]);
  //  -----get all order----
  const getAllOrderfunc = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(fireDB, "order"),
        orderBy('time')
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });

        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }

  // delete func 
  const orderdeletefunc = async (id) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, 'order', id));
      toast.success('Order Deleted successfully');
      getAllOrderfunc();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  // user 

  // const {getuser, setGetAllUser} = useState([]);
  const [getAllUser, setGetAllUser] = useState([]);

//   const getAlluserfunc = async () => {
//     setLoading(true);
//     try {
//         const q = query(
//             collection(fireDB, "user"),
//             orderBy('time')
//         );
//         const data = onSnapshot(q, (QuerySnapshot) => {
//             let userAr = [];
//             QuerySnapshot.forEach((doc) => {
//                 userAr.push({ ...doc.data(), id: doc.id });
//             });
//             setGetAllUser(userAr);
//             setLoading(false);
//         });
//         return () => data;
//     } catch (error) {
//         console.log(error);
//         setLoading(false);
//     }
// }

const getAllUserFunc = async () => {
  setLoading(true);
  try {
      const q = query(
          collection(fireDB, "user"),
          orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
          let userArray = [];
          QuerySnapshot.forEach((doc) => {
              userArray.push({ ...doc.data(), id: doc.id });
          });
          setGetAllUser(userArray);
          setLoading(false);
      });
      return () => data;
  } catch (error) {
      console.log(error);
      setLoading(false);
  }
}

  

  useEffect(() => {
    getAllProductfunc();
    getAllOrderfunc();
    getAllUserFunc();
  }, []);

  return (

    // <myContext.Provider value={name}>
    <myContext.Provider value={{
      loading,
      setLoading,
      getAllProduct,
      getAllProductfunc,
      getAllOrder, 
      orderdeletefunc, 
      getAllUser
    }}>
      {children}
    </myContext.Provider>
  );
}

export default MyState;

