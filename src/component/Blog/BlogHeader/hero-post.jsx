
import Link from 'next/link';
import { DateFormatter } from '@/Utils/dateFormatter';
import { CoverImage } from "@/component/Blog/CoverImage";
import { useDynamicTranslate } from "@/lib/useDynamicTranslate";

export const HeroPost = ({ title, coverImage, date, excerpt, slug }) => {
	const dt = useDynamicTranslate();
	const postURL = `/blog/${slug}`;
	const localizedTitle = dt(title, "blogTitles");
	const localizedExcerpt = dt(excerpt, "blogExcerpts");

	return (
		<section className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<CoverImage
					title={localizedTitle}
					src={coverImage}
					slug={slug}
					priority={true}
				/>

				<div className="col-span-1 flex flex-col gap-2 mt-5 w-3/4">
					<h1 className="text-xl font-bold leading-snug text-slate-800 lg:text-3xl dark:text-neutral-50">
						<Link
							href={postURL}
							className="hover:text-[#4A3772] dark:hover:text-primary-500 leading-tight tracking-tight hover:underline"
						>
							{localizedTitle}
						</Link>
					</h1>
					<Link href={postURL}>
						<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{localizedExcerpt}</p>
					</Link>
					<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
						<Link href={postURL}>
							<DateFormatter dateString={date} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
