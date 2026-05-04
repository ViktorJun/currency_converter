export function MobileNumbers({ phoneImage, number, subtitle }) {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <img src={phoneImage} alt="Phone" className="h-6 w-4" />
        <a href={`tel:${number.split(' ').join('')}`}>{number}</a>
      </div>
      <h2 className="mt-1.5 pl-9 text-xs text-gray-500">{subtitle}</h2>
    </div>
  );
}
