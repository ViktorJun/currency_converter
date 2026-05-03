import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export function FindUs() {
    const location = [50.448781311940415, 30.52348471291498]
    const address = 'Київ, вул. Хрещатик, 19';
    const directionsUrl =
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    const mapUrl =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    return (
        <div className='px-8 py-5 border-2 border-brand-bg flex flex-col justify-between '>
            <h1 className='font-bold text-2xl'>Знайдіть нас</h1>
            <MapContainer center={location} zoom={13} scrollWheelZoom={false} style={{ height: '200px', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}>
                    <Popup>
                        м. Київ <br /> вул. Хрещатик, 19.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className='flex gap-x-3 items-center justify-between'>
                <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <LocationPinIcon sx={{ color: 'var(--color-brand-primary)' }}/>
                    <span>Київ, вул. Хрещатик, 19</span>
                </a>
                <a href={directionsUrl} target="_blank" rel="noreferrer">
                    <button className='bg-blue-700 px-6 py-2 md:px-10 md:py-3 rounded-md text-white'>Побудувати маршрут</button>
                </a>
            </div>
        </div>
    )
}