/** @format */
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTelegramPlane, FaCommentDots, FaThumbsUp } from "react-icons/fa";

export default function AllPosts() {
	const [posts, setPosts] = useState<Array<Object>>([]);
	const [names, setName] = useState<Array<Object>>([]);
	const [fontStyles, setFontStyles] = useState<Object>({ color: "black", fontSize: "30px" });

	useEffect(() => {
		getUserData().then((res) => {
			setName(res);
		});

		getData().then((res) => {
			setPosts(res);
		});
	}, []);
	async function getData(): Promise<Array<Object>> {
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		return res.data;
	}
	async function getUserData(): Promise<Array<Object>> {
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
		return res.data;
	}

	return (
		<div className="h-full">
			{posts.map((val, index) => {
				const { title, body, userId }: any = val;
				const { name }: any = names[userId - 1];
				return (
					<div key={index} className="px-10 py-5 mx-5 my-2 border-2 rounded-md border-solid shadow-md shadow-inherit opacity-75">
						<div>
							<header className="text-lg font-bold">{name}</header>
						</div>
						<details>
							<summary>{title}</summary>
							<address>{body}</address>
						</details>
						<div className="flex justify-evenly items-center">
							<div onClick={() => setFontStyles({ color: "blue", fontSize: "30px" })} key={index}>
								<FaThumbsUp style={fontStyles} />
							</div>

							<FaTelegramPlane />
							<FaCommentDots />
						</div>
						<div className="w-full h-1 "></div>
					</div>
				);
			})}
		</div>
	);
}
