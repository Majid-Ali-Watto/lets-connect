/** @format */
import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
function App() {
	return (
		<>
			<header className="w-full h-14">
				<Header />
			</header>
			<main className="h-4/5 pl-5 pt-5">
				<AllPosts />
			</main>
		</>
	);
}

export default App;
