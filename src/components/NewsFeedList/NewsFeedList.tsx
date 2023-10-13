import { StoryType } from "../../schemas/story";
import { getTopStories } from "../../utils/getStories";
import NewsFeedItem from "../NewFeedItem";
import { useEffect, useState } from "react";

const NewsFeedList = () => {
	const [stories, setStories] = useState<StoryType[]>([]);

	useEffect(() => {
		(async () => {
			const result = await getTopStories(9);
			setStories(result);
		})()
	}, [])

    return (
		<section className="px-[10%]">
			<div className="text-[#b4b5b9] text-center py-10 text-2xl">
				<h1>News</h1>
			</div>
			<div className="flex justify-between flex-wrap">
				{stories.map((story, index) => <NewsFeedItem key={story.id} title={story.title} url={story.url} firstItemInLine={index === 0 || !(index % 3)} />)}
			</div>
		</section>
    );
}

export { NewsFeedList };