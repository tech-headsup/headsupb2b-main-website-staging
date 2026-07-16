import { format, parseISO } from 'date-fns';

export const DateFormatter = ({ dateString }) => {
    if (!dateString) return <></>;
    const date = parseISO(dateString);

    return (
        <>
            <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
        </>
    );
};