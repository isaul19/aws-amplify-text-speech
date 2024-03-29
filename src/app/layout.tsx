import "./globals.css";
import type { Metadata } from "next";
import { Amplify, Auth, Predictions } from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "../aws-exports";

try {
    Amplify.configure(awsconfig);
    Amplify.register(Auth);
    Amplify.register(Predictions);
    Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (error) {
    console.error(error);
}

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
