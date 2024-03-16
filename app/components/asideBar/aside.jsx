"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default  function AsideBar() {
	const [shops, setShops] = useState([]);

	useEffect(() => {
		axios("api/getAllCompanies", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => setShops(res.data));
	}, []);
	return (
		<aside className="pt-[40px] px-[10px] h-[100%] w-[300px] border-solid border-[2px] border-black rounded-xl overflow-x-hidden text-center ">
			<ul className=" flex  flex-col gap-3">
				{shops.map(({_id,permalink}) => (
					<li key={_id}>
						<button type="button" className="w-[150px] h-[50px] bg-red-400 rounded-xl">
							{permalink} 
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
