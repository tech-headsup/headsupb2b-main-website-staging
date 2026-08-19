import Link from 'next/link';
import { DateFormatter } from '@/Utils/dateFormatter';
import { CoverImage } from "@/component/Blog/CoverImage";
import { useDynamicTranslate } from "@/lib/useDynamicTranslate";


export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }) => {
	const dt = useDynamicTranslate();
	const postURL = `/blog/${slug}`;
	const localizedTitle = dt(title, "blogTitles");
	const fullLocalizedExcerpt = dt(excerpt, "blogExcerpts");
	const localizedExcerpt = fullLocalizedExcerpt.length > 100
		? fullLocalizedExcerpt.substring(0, 100) + '…'
		: fullLocalizedExcerpt;

	return (
		<section className="grid items-start gap-5 md:grid-cols-2">
			<div className="col-span-1">
				<CoverImage
					title={localizedTitle}
					src={(coverImage)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
					<Link
						href={postURL}
						className="hover:text-[#4A3772] dark:hover:text-primary-500 hover:underline"
					>
						{localizedTitle}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{localizedExcerpt}
					</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div>
		</section>
	);
};
