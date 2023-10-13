import { FC, memo } from 'react';
import picture from '../../assets/Programmer-working-in-a-software-developing-company-office-665158684_5379x3586.jpeg';
import { StoryType } from '../../schemas/story';

type PropsType = Pick<StoryType, 'title' | 'url'> & { firstItemInLine: boolean }

const NewsFeedItem: FC<PropsType> = ({title, url, firstItemInLine}) => {
    return (
		<div className={(firstItemInLine ? "bg-white shadow-lg " : "" ) + "w-[30%] h-[600px] flex flex-column my-4 flex-wrap"}>
			<img src={picture} alt="#"/>
			<div className='p-4 flex flex-wrap'>
				<h2 className='text-blue-400 text-xl'><a target="_blank" href={url} rel="noreferrer">{title}</a></h2>
				<p className='my-4 flex align-bottom' >Lorem eiusmod adipisicing cillum fugiat velit deserunt est eu do eu do est. Laborum pariatur minim nulla reprehenderit. Deserunt in ad voluptate sint tempor cupidatat laborum aute minim ipsum occaecat sit in.</p>
				<div className='mt-auto'>
					<small className='bg-gray-400 py-1 px-2 text-white text-base'>Gaming</small>
					<small className='bg-gray-400 py-1 px-2 text-white text-base ml-2'>Wow</small>
				</div>
			</div>
		</div>
    );
}

export default memo(NewsFeedItem);