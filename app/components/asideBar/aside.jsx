export default function AsideBar() {
	const shops = ["Farm", "ALL-24", "ALL-25", "ALL-26", "ALL-27"];

	return (
		<aside className="pt-[40px] px-[20px] h-[100%] w-min border-solid border-[2px] border-black rounded-xl">
			<ul className=" flex  flex-col gap-3">
				{shops.map((shop,idx) => (
					<li key={idx}>
						<button type="button" className="w-[150px] h-[50px] bg-red-400 rounded-xl">
							{shop} 
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
