const ProdukCard = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-2">
        <img src="/image/1web.png" className="w-4/6 mx-auto" />
        <span>Kalender 2022</span>
        <div className="flex gap-0 justify-center sm:gap-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/image/2web.png" className="w-4/6 mx-auto" />
        <span>Figura Putih</span>
        <div className="flex gap-0 justify-center sm:gap-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/image/3web.png" className="w-4/6 mx-auto" />
        <span>Hijab Hampers</span>
        <div className="flex gap-0 justify-center sm:gap-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/image/4web.png" className="w-4/6 mx-auto" />
        <span>Akrilik Hampers</span>
        <div className="flex gap-0 justify-center sm:gap-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button className="bg-border w-min mx-auto p-1 my-2 rounded-xl text-white sm:p-2">Rp.50.000</button>
      </div>
    </div>
  );
}

export default ProdukCard;