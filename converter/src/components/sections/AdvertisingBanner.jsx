import { Link } from 'react-router';

export function AdvertisingBanner({
  title,
  description,
  nameBtn,
  image,
  link,
  styleImage,
}) {
  return (
    <div className="h-[400px] bg-[url('/advertisingBg.svg')] bg-cover bg-center bg-no-repeat px-5">
      <div className="mx-auto grid h-full max-w-[1536px] grid-cols-2 place-items-center justify-items-center gap-x-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <h2 className="text-lg text-gray-100 md:text-xl">{description}</h2>
          <Link to={link} className="flex gap-3">
            <button className="rounded-md bg-white px-6 py-2 text-gray-500 md:px-10 md:py-3">
              {nameBtn}
            </button>
          </Link>
        </div>
        <img src={image} alt="card" className={styleImage} />
      </div>
    </div>
  );
}
