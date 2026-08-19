import { format, parseISO } from 'date-fns';
import { hi as hiLocale } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

export const DateFormatter = ({ dateString }) => {
    const { i18n } = useTranslation();
    if (!dateString) return <></>;
    const date = parseISO(dateString);
    const isHindi = i18n.language?.startsWith('hi');
    const locale = isHindi ? { locale: hiLocale } : undefined;
    const formatStr = isHindi ? 'LLLL d, yyyy' : 'LLL d, yyyy';

    return (
        <>
            <time dateTime={dateString}>{format(date, formatStr, locale)}</time>
        </>
    );
};