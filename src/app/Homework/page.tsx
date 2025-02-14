import Rectangle from "../components/Rectangle";
import Link from "next/link";

export default function Home(){
    return(

        <div className = "min-h-screen flex items-center justify-center">

            <div className="flex flex-col">
                <div className="flex flex-row">
                    <a href="/" className="text-blue-500 hover:underline"> Go to home page</a>
                </div>


                <div className="flex flex-row">
                    <Rectangle color ="red"/>
                    <Rectangle color ="green"/>
                    <Rectangle color ="red"/>
                </div>

                <div className="flex flex-row">
                    <Rectangle color ="green"/>
                    <Rectangle color ="red"/>
                    <Rectangle color ="green"/>
                </div>

                <div className="flex flex-row">
                    <Rectangle color ="red"/>
                    <Rectangle color ="green"/>
                    <Rectangle color ="red"/>
                </div>

            </div>
      </div>
      
    );
}