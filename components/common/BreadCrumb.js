import Link from 'next/link';

const BreadCrumb = ({ title, subtitle }) => {
   return (
      <>
         <section className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay" style={{ background: `url(assets/img/breadcrumb/top-view.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content text-center p-relative z-index-1">
                        <h3 className="breadcrumb__title">{title}</h3>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BreadCrumb;