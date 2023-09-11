import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body>
				<main>
					{children}
					{modal}
				</main>
				<Toaster />
			</body>
		</html>
	);
}
