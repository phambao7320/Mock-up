import React from "react";
const CreatePost = () => {
	return (
		<div className="lg:mx-0 p-4 rounded-lg bg-white shadow-lg border-[1px] border-[#ccc] border-solid">
			<div className="flex space-x-3">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-2.jpg"
					alt=""
					className="w-10 h-10 rounded-full"
				/>
				<input
					placeholder="What's Your Mind ? Hamse!"
					className="flex-1 h-10 px-6 bg-gray-100 rounded-full hover:bg-gray-200 outline-none"
				></input>
			</div>
			<div className="grid grid-flow-col pt-3 -mx-1 -mb-1 text-sm text-semibold">
				<div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
					<svg
						className="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block"
						data-tippy-placement="top"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						data-tippy=""
						data-original-title="Tooltip"
					>
						{" "}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
					<span>Photo/video</span>
				</div>
				<div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
					<svg
						className="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block"
						uk-tooltip="title: Messages ; pos: bottom ;offset:7"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-expanded="false"
					>
						{" "}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
						></path>
					</svg>
					<span>Tag Friend</span>
				</div>{" "}
				<div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
					<svg
						className="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>Fealing /Activity</span>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;