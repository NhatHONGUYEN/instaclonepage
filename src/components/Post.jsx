import { Dot, Heart, MessageCircle, Send, Smile } from "lucide-react";

export default function Post() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p>
            nhatflix <Dot /> 3j
          </p>
          <p>Audio d'origine</p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <Heart /> <MessageCircle /> <Send />
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p>308 J'aime</p>
          </div>
          <h2 className="card-title">
            joel_brown01 A small excerpt of my judge demo of yesterday at
          </h2>
          <p>Afficher les 43 commentaires</p>
          <p>
            leetheruggeds The best life <Heart size={16} strokeWidth={0.5} />
          </p>
          <p>
            littleshao My man ❤️ <Heart size={16} strokeWidth={0.5} />
          </p>
          <div className="card-actions justify-end">
            <input
              type="text"
              placeholder="Ajouter un commentaire..."
              className="input w-full max-w-xs"
            />
            <Smile size={16} strokeWidth={0.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
