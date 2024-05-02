import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { getTotal } from "../../redux/features/cartSlice";
import { useGetMyCoursesQuery } from "../../redux/api/apiSlice";

const AdminArea = () => {
   const { user } = useAuth();
   const [request, setRequest] = useState(false);
   const { data: adminData, isLoading, isError } = useGetMyCoursesQuery(user?.email, {
      skip: !request || !user?.isAdmin // Assume 'isAdmin' is a boolean field indicating whether the user is an admin
   })
   useEffect(() => {
      if (user?.email && user?.isAdmin) { // Check if the user is an admin
         setRequest(true)
      }
   }, [user])
   // Assuming the existence of admin-specific Redux actions and selectors
   // const quantity = useSelector(state => state.admin.someQuantity);
   const dispatch = useDispatch();
   
   // Presumably there are admin-specific dispatches that can be made
   // useEffect(() => {
   //    dispatch(getAdminSpecificAction())
   // }, [dispatch])
   if (isLoading && !isError) {
      return <div className="container">
         <h2 className="text-center pt-10 alert alert-info mt-50">Loading administration data...</h2>
      </div>
   }
   return (
      <>
         <section className="admin__area pt-120 pb-50 grey-bg-2">
            <div className="container">
               <div className="admin__basic-inner pb-20 white-bg">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-md-6">
                        <div className="admin__basic d-md-flex align-items-center">
                           <div className="admin__basic-thumb mr-30">
                              <img src="assets/img/admin/admin-img.jpg" alt="Admin" /> {/* Assume an admin-specific image */}
                           </div>
                           <div className="admin__basic-content">
                              <h3 className="admin__basic-title">
                                 Admin Dashboard <span>{user?.displayName}</span>
                              </h3>
                              {/* Admin specific information goes here */}
                           </div>
                        </div>
                     </div>
                     {/* Admin functionalities and links */}
                     <div className="col-xxl-6 col-md-6">
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
export default AdminArea;