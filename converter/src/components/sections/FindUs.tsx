import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import type { LatLngTuple } from 'leaflet';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export function FindUs() {
	const location: LatLngTuple = [50.448781311940415, 30.52348471291498];
	const address: string = 'Київ, вул. Хрещатик, 19';
	const directionsUrl: string = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
	const mapUrl: string = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
	return (
		<div className="border-brand-bg flex flex-col justify-between border-2 px-8 py-5">
			<h1 className="text-2xl font-bold">Знайдіть нас</h1>
			<MapContainer
				center={location}
				zoom={13}
				scrollWheelZoom={false}
				style={{ height: '200px', width: '100%' }}
			>
				<TileLayer
					attribution="&copy; OpenStreetMap contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={location}>
					<Popup>
						м. Київ <br /> вул. Хрещатик, 19.
					</Popup>
				</Marker>
			</MapContainer>
			<div className="flex items-center justify-between gap-x-3">
				<a
					href={mapUrl}
					target="_blank"
					rel="noreferrer"
					className="flex cursor-pointer items-center gap-3"
				>
					<LocationPinIcon
						sx={{ color: 'var(--color-brand-primary)' }}
					/>
					<span>Київ, вул. Хрещатик, 19</span>
				</a>
				<a href={directionsUrl} target="_blank" rel="noreferrer">
					<button className="rounded-md bg-blue-700 px-6 py-2 text-white md:px-10 md:py-3">
						Побудувати маршрут
					</button>
				</a>
			</div>
		</div>
	);
}
