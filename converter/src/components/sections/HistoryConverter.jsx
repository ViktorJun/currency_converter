import { useConverterHistory } from '../../store/useConverterHistory.jsx';
import EastIcon from '@mui/icons-material/East';

export function HistoryConverter() {
  const history = useConverterHistory((state) => state.history);
  const clearHistory = useConverterHistory((state) => state.clearHistory);
  return (
    <div className="bg-brand-white flex justify-center py-10" id="history">
      <div className="bg-brand-bg flex w-full max-w-[856px] flex-col gap-y-10 py-8">
        <div className="flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold">Історія конвертації</h1>
          <button
            type="button"
            disabled={history.length === 0}
            onClick={clearHistory}
            className={`col-span-2 justify-self-end rounded-md px-5 py-4 ${history.length !== 0 ? 'bg-brand-primary text-white' : 'cursor-not-allowed bg-gray-200'}`}
          >
            Очистити історію
          </button>
        </div>
        <div
          className={`justify-items-center gap-4 px-2 ${history.length !== 0 ? 'grid grid-cols-2 grid-rows-5' : ''}`}
        >
          {history.length !== 0 ? (
            history.map((element, index) => {
              return (
                <div
                  key={index}
                  className="bg-brand-white flex w-full gap-x-1 rounded-md px-3 py-2"
                >
                  <p className="text-brand-text">{element.date}</p>
                  <p>{`${element.fromAmount} ${element.fromCurrency}`}</p>
                  <EastIcon
                    sx={{
                      color: 'var(--color-brand-text)',
                    }}
                  />
                  <p>{`${element.toAmount} ${element.toCurrency}`}</p>
                </div>
              );
            })
          ) : (
            <p className="text-brand-text">Історія конвертацій порожня</p>
          )}
        </div>
      </div>
    </div>
  );
}
