import {useConverterHistory} from "./store/useConverterHistory.jsx";
import EastIcon from '@mui/icons-material/East';

export function HistoryConverter() {
    const history = useConverterHistory((state) => state.history);
    const clearHistory = useConverterHistory((state) => state.clearHistory);
    return (
        <div className='bg-brand-white flex justify-center py-10'>
            <div className='flex flex-col bg-brand-bg max-w-[856px] w-full py-8 gap-y-10'>
                <div className='flex justify-between px-8 items-center'>
                    <h1 className='text-2xl font-bold'>Історія конвертації</h1>
                    <button
                        type='button'
                        disabled={history.length === 0}
                        onClick={clearHistory}
                        className={
                            `col-span-2 justify-self-end px-5 rounded-md py-4
                            ${history.length !== 0 ? 'bg-brand-primary text-white' : 'bg-gray-200 cursor-not-allowed'}`
                        }
                    >
                        Очистити історію
                    </button>
                </div>
                <div
                    className={
                        `gap-4 justify-items-center px-2
                        ${history.length !== 0 ? 'grid grid-cols-2 grid-rows-5' : ''}`
                    }
                >
                    {history.length !== 0 ? history.map((element, index) => {
                        return (
                            <div key={index} className='bg-brand-white px-3 py-2 flex gap-x-1 rounded-md w-full'>
                                <p className='text-brand-text'>{element.date}</p>
                                <p>{`${element.fromAmount} ${element.fromCurrency}`}</p>
                                <EastIcon sx={{
                                    color: 'var(--color-brand-text)',
                                }}/>
                                <p>{`${element.toAmount} ${element.toCurrency}`}</p>
                            </div>
                        )
                    }) : <p className='text-brand-text'>Історія конвертацій порожня</p>}
                </div>
            </div>
        </div>
    )
}