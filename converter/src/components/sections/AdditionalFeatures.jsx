import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SmsIcon from '@mui/icons-material/Sms';
import { cloneElement } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router';
export function AdditionalFeatures() {
  const serviceActions = [
    {
      icon: <QueryStatsIcon />,
      title: 'Перегляд курсів',
      description: 'Відстежуйте актуальні курси валют у режимі реального часу.',
      link: '/converter#converter',
    },
    {
      icon: <SmsIcon />,
      title: 'Запит до підтримки',
      description:
        'Напишіть нам і отримайте швидку відповідь від нашої команди.',
      link: '/questions',
    },
  ];
  return (
    <div className="border-brand-bg flex flex-col gap-3 border-2 px-8 py-5">
      <h1 className="text-xl font-bold">Додаткові можливості</h1>
      {serviceActions.map((item, index) => (
        <div key={item.title}>
          {index !== 0 ? (
            <hr className="border-brand-bg my-3 border-t-2" />
          ) : null}
          <Link to={item.link}>
            <div className="flex items-center gap-3">
              {cloneElement(item.icon, {
                sx: {
                  fontSize: 60,
                  color: 'var(--color-brand-primary)',
                },
              })}
              <div>
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-brand-text">{item.description}</p>
              </div>
              <ArrowForwardIosIcon sx={{ marginLeft: 'auto' }} />
            </div>
          </Link>
        </div>
      ))}
      <Link to="/questions" className="mt-3">
        <button className="rounded-md bg-blue-700 px-6 py-2 text-white md:px-10 md:py-3">
          Задати питання
        </button>
      </Link>
    </div>
  );
}
