import { useConverterHistory } from '../../store/useConverterHistory';
import EastIcon from '@mui/icons-material/East';

export function HistoryConverter() {
	const history = useConverterHistory((state) => state.history);
	const clearHistory = useConverterHistory((state) => state.clearHistory);
	return (
		<div className="bg-brand-white py-10" id="history">
			<div className="bg-brand-bg mx-auto flex w-full max-w-[856px] flex-col gap-y-8 px-4 py-8 md:gap-y-10">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:px-4">
					<h1 className="text-2xl font-bold">Історія конвертації</h1>
					<button
						type="button"
						disabled={history.length === 0}
						onClick={clearHistory}
						className={`rounded-md px-5 py-3 ${history.length !== 0 ? 'bg-brand-primary text-white' : 'cursor-not-allowed bg-gray-200'}`}
					>
						Очистити історію
					</button>
				</div>
				<div
					className={`gap-4 ${history.length !== 0 ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}
				>
					{history.length !== 0 ? (
						history.map((element, index) => {
							return (
								<div
									key={index}
									className="bg-brand-white flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-md px-3 py-3 text-center"
								>
									<p className="text-brand-text w-full text-center md:w-auto md:text-left">
										{element.date}
									</p>
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
						<p className="text-brand-text text-center">
							Історія конвертацій порожня
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
