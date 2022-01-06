import MainLayout from "../../components/Layout"

const About = () => {
  return (
    <MainLayout>
      <div className="flex flex-col py-5 px-10 justify-center shadow-md bg-gray-100 md:justify-around md:py-10 md:px-20 md:flex-row">
        <div>
          <img src="/image/3web.png" className="w-3/4 mx-auto my-4 md:my-0 md:w-full" />
        </div>
        <div className="w-full md:w-2/4">
          <h1 className="text-xl mb-5 font-bold text-center md:text-left md:text-2xl">Apa itu Kriyathor ?</h1>
          <span className=" text-base md:text-lg">Kriyathor adalah Perusahaan yang berfokus di bidang gift/hadiah exclusive namun memiliki harga yang terjangkau setiap hadiah bisa disesuaikan dengan keinginan anda</span>
        </div>
      </div>
      <div className="text-center my-5 ">
        <div>
          <span className="text-2xl font-bold">Keutungan Order Disini</span>
          <div className="flex flex-row items-place-center gap-2 my-4 mx-2 text-xs md:text-base md:my-10 md:mx-60">
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-4/6 md:w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-4/6 md:w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-4/6 md:w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-4/6 md:w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
export default About