"use client";

import { LoginForm } from "@/components/LoginForm";
import ModalFrame from "@/components/ModalFrame";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();

	return (
		<ModalFrame goBackOnOutclick>
			<LoginForm />
		</ModalFrame>
	);
}
