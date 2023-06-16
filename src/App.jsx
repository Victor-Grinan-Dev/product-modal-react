import "./App.css";
import product from "./images/headphone.png";
import weight from "./images/weight.png";
import heart from "./images/heart.png";

function App() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-slate-100">

      <div className="cardcontainer flex flex-col md:flex-row rounded-lg shadow-2xl bg-white m-3 p-6 space-y-10 md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        
        <div>
          <img
            src={product}
            alt="product"
            class="mx-auto w-60 hover:scale-105 duration-200"
          />
        </div>

        <div className="content flex flex-col space-y-6">

          <div className="description flex flex-col mb-4 text-center md:text-left">
            <div className="free.shipping text-center bg-black text-white mx-auto px-3 py-1 rounded-3xl inline-block">
              Free shipping
            </div>
            <div className="description max-w-sm text-2xl font-medium">

              <h2 className="title">
                Razer Kraken Litty Edt Gaming Headset Quartz
              </h2>

              <div className="flex flex-col mb-4 space-y-3 text-center">
                <p className="line-through">799</p>
                <p className="text-5xl font-bold">599</p>
                <p className="text-sm font-light text-gray-400">
                  offfer is valid until April3 or as long as stock last
                </p>
              </div>

              <div className="btn-group group">
                <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                  <div className="px-8 py-5 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                    Add to cart
                  </div>
                </button>
              </div>

              <div className="stock flex items-center space-x-3 group mb-3 mt-3">
                <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                <div className="text-sm">50+ pcs. in stock.</div>
              </div>
            </div>

            <div className="btn-container flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img src={weight} alt="weight" className="w-8"/>
                <span>add to cart</span>
              </button>

              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img src={weight} alt="weight" className="w-8"/>
                <span>add to wishlist</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
