import MainLayout from "../components/Layout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <MainLayout>
      <Slider />
      <section className="flex flex-col py-5 px-10 justify-center shadow-md bg-gray-100 sm:justify-around sm:py-10 sm:px-20 sm:flex-row items-center">
        <div>
          <img src="/image/3web.png" className="w-3/4 mx-auto my-4 sm:my-0 sm:w-full" />
        </div>
        <div className="w-full sm:w-2/4">
          <h1 className="text-xl mb-5 font-bold text-center sm:text-left sm:text-2xl">Apa itu Kriyathor ?</h1>
          <span className=" text-base sm:text-lg">Kriyathor adalah Perusahaan yang berfokus di bidang gift/hadiah exclusive namun memiliki harga yang terjangkau setiap hadiah bisa disesuaikan dengan keinginan anda</span>
        </div>
      </section>
      <section className="text-center shadow-md px-2">
        <h1 className="text-2xl font-bold my-5 sm:text-3xl">Popular Product</h1>
        <div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col gap-3">
              <img src="/image/1web.png" className="w-4/6 mx-auto" />
              <span>Kalender 2022</span>
              <div className="flex gap-0 justify-center sm:gap-2">
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
              </div>
              <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/2web.png" className="w-4/6 mx-auto" />
              <span>Vektor Figura Putih</span>
              <div className="flex gap-0 justify-center sm:gap-2">
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
              </div>
              <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/3web.png" className="w-4/6 mx-auto" />
              <span>Hijab Hampers</span>
              <div className="flex gap-0 justify-center sm:gap-2">
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
              </div>
              <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/4web.png" className="w-4/6 mx-auto" />
              <span>Akrilik Hampers</span>
              <div className="flex gap-0 justify-center sm:gap-2">
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
                <i className="fas fa-star fa-sm" />
              </div>
              <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}