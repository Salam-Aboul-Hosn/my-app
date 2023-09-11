"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="mt-32 max-w-5xl mx-auto">
			<h1 className="text-primary mb-32 text-7xl font-bold">
				this is the home page
			</h1>
			<Button asChild>
				<Link href="/login">Log in</Link>
			</Button>
		</div>
	);
}
