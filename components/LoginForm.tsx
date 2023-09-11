"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	email: z.string().email("Please enter a valid email."),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters." }),
});

export function LoginForm() {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		toast({
			title: `Logged in as ${values.email}!`,
			description: `Password: ${values.password}`,
		});

		router.back();
	}

	return (
		<Form {...form}>
			<h2 className="text-primary text-2xl font-bold mb-12 text-center">
				Log in
			</h2>

			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 w-96"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
