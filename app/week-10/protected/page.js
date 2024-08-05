"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";


export default function ProtectedPage(){

    const { user } = useUserAuth();

    return(
        <main>
            <header>
                <h1 className="text-xl">Protected Page</h1>
            </header>
            {user ? (
                <div>
                    <p>Your user Id is : {user.id}</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in </p>
                    <Link href="/week8/">Click here to return to sign in page </Link>
                    
                </div>
            )}

        </main>
    );
}