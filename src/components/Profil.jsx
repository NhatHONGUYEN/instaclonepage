import LeftBar from "./LeftBar";

export default function Profil() {
  return (
    <>
      <LeftBar />
      <div className="container  mx-auto sm:px-6 lg:px-8">
        {/* Description Profil */}
        <div className="flex  items-center py-10 gap-20">
          <div className="mr-4 flex-shrink-0 self-center">
            <img
              className="h-full w-full border rounded-full border-gray-300 bg-white text-gray-300"
              src="/nhatprofilinsta.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold">NhatFlux</h4>
            <div className="flex w-96 py-5  justify-between ">
              <div className="flex  ">
                <p className=" font-semibold">28</p>
                <span className="ml-2">publications</span>
              </div>
              <div className="flex ">
                <p className=" font-semibold">1991</p>
                <span className="ml-2">followers</span>
              </div>
              <div className="flex ">
                <p className=" font-semibold">408</p>
                <span className="ml-2">suivi(e)s</span>
              </div>
            </div>
            <div className="text-sm w-40">
              <p className="font-semibold py-2">Nhat-Quan HO NGUYEN</p>
              <p className="text-gray-500">Artiste</p>
              <p>
                Jo-L (Shikamaru) <br /> [New account old one hacked]
                Professional Dancer/Athlete 🎭Artistic Director
              </p>
            </div>
            <div className="text-gray-500 text-sm py-2">
              Suivi(e) par ipekoo et noe_mia_lazuli
            </div>
          </div>
        </div>
        {/* Stories */}
        <div className="avatar-group gap-10 ">
          <div className="avatar ">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="grid grid-cols-3 py-10 gap-1">
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (1).jpg"
            alt="gallery Nhat1"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (2).jpg"
            alt="gallery Nhat2"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (3).jpg"
            alt="gallery Nhat3"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (4).jpg"
            alt="gallery Nhat4"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (5).jpg"
            alt="gallery Nhat5"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (6).jpg"
            alt="gallery Nhat6"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (7).jpg"
            alt="gallery Nhat7"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (8).jpg"
            alt="gallery Nhat8"
          />
          <img
            className="w-full h-64 object-cover"
            src="
          /galleryNhat (9).jpg"
            alt="gallery Nhat9"
          />
        </div>
      </div>
    </>
  );
}
