export type MobileNumbersProps = {
	phoneImage: string;
	number: string;
	subtitle: string;
};
export function MobileNumbers({
	phoneImage,
	number,
	subtitle,
}: MobileNumbersProps) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-4">
				<img src={phoneImage} alt="Phone" className="h-6 w-4" />
				<a href={`tel:${number.split(' ').join('')}`}>{number}</a>
			</div>
			<h2 className="pl-8 text-xs text-gray-500">{subtitle}</h2>
		</div>
	);
}
