import { StoryType } from "../schemas/story";

export const getTopStories = async (amount: number): Promise<StoryType[]> => {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    try {
        const response = await fetch(url);
        if (response.ok === false) {
            throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
            .slice(0, amount)
            .map((id: string) =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                response => response.json()
              )
            );
        const result = await Promise.all(promises);
        return result;
    } catch (err) {
        throw new Error("Failed getting all stories" + err);
    }
}