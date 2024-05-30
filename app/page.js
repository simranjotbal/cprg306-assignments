import Link from "next/link";
import StudentInfo from "./week-2/student-info";


export default function Home() {
  return (
    <main>
      <h1>CPRG 306:Web Development2 - Assignments</h1>
      <Link  className="underline text-cyan-600 hover:text-pink-300" href="./week-3">week-3
      </Link>
    </main>
    
  );
}
