"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function ModalFrame({
	children,
	goBackOnOutclick = false,
}: {
	children: ReactNode;
	goBackOnOutclick?: boolean;
}) {
	const router = useRouter();
	return (
		<>
			<div
				onClick={() => {
					if (goBackOnOutclick) router.back();
				}}
				className="fixed inset-0 grid place-items-center bg-black/70 backdrop-blur-sm"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="rounded-xl border-border border p-6 bg-background"
				>
					{children}
				</div>
			</div>
		</>
	);
}
