import MainLayout from "../../components/Layout"
import ProdukCard from "../../components/Produk"
import { sql_query } from "../../lib/db"
import Link from "next/link"

const Product = (props) => {
  const {posts} =props
  return (
    <MainLayout>
      <div className="bg-cover w-full h-28 shadow sm:h-60" style={{ backgroundImage: 'url(/image/bg.png)' }}>
      </div>
      <div className="text-center mx-1 sm:mx-10">
        <div className="my-5 sm:my-10">
          <span className="text-2xl sm:text-3xl">Produk</span>
        </div>
        <div className="flex flex-col gap-2 text-xs sm:gap-4 sm:text-base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {posts.map( (item)=>
      <Link href={item.link}><a>
       <div className="flex flex-col gap-2 p-5 my-2 bg-white hover:bg-yellow-500">
         <img src={item.image_produk} className="w-4/6 mx-auto" />
         <span>{item.name_produk}</span>
         <div className={"flex gap-0 justify-center mt-auto sm:gap-2 list-unstyled-"+item.rating_produk}>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
         </div>
         <div className="bg-teal-500 flex flex-row w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">{"Rp."+item.price_produk}</div>
       </div> </a></Link>)}

  </div>
        </div>
      </div>
    </MainLayout>
  )
}


export async function getStaticProps(context){
  try {
    const results = await sql_query('SELECT * FROM kriyathor ORDER BY sold_produk DESC ')
    let posts = JSON.parse(JSON.stringify(results))
    return {
      props : {posts}
    };
} catch (e) {
    return {props:{posts:false}}
}
}

export default Product