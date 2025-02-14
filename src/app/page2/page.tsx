import Link from "next/link";
import Rectangle from "../components/Rectangle";


export default function Page2(){
  return(
    <div className = "min-h-screen flex items-center justify-center">
      <Rectangle color ="red"/>
      
      <Link  href="/" className="text-blue-500 hover:underline">
          Go to Home
        </Link>
    </div>
);
}