import { getTopStories } from "../../utils/getStories";
import { NewsFeedItem } from "../NewFeedItem";
import { useEffect } from "react";

const NewsFeedList = () => {

	useEffect(() => {
		(async () => {
			const result = await getTopStories(9);
			if (!result) return;
			console.log("NewsFeedList", result);
		})()
	}, [])

    return (
		<section>
			<div>
				<h1>News</h1>
			</div>
			<div>
				<NewsFeedItem/>
			</div>
		</section>
    );
}

export { NewsFeedList };