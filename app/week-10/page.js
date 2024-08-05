"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function SignInPage(){

    const {user , gitHubSignIn , firebaseSignOut} = useUserAuth();
    
    async function handleSignIn(){
        try{
            await gitHubSignIn();
        }
        catch(error){
            console.log(error);
        }
    }

    async function handleSignOut(){
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error);
        }
    }


        //console.Console.dir(user);
    return(
        <main>
            
            {user ? ( 
                // user is logged in
                <div>
                    <p className="text-2xl text-pink-600">Welcome {user.displayName}</p>
                    <p>{user.email}</p>
                     
                    <p>
                        <Link href="/week-8/shopping-list" className="text-xl text-blue-600">Shopping List</Link>       
                    </p>
                    <button  onClick={handleSignOut} className="text-lg m-2 hover:underline bg-violet-400">Sign Out</button>

                </div>
            ) :(
                //user is not logged in 
                <div>
                    <button  onClick={handleSignIn} className="text-lg m-2 hover:underline bg-violet-400" >Sign In</button>
                </div>
            ) }
            
        </main>

    );
}