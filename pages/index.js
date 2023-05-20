import Layout from "@/components/Layout";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useSession } from "next-auth/react";


export default function Home({newProducts}) {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
{/* you need to add users email on google cloud OAuth consent screen */}
        <img src={session?.user?.image} alt="image" className="w-6 h-6"/>
        <span className="px-2">
          {session?.user?.name}
        </span>
      </div>
    </div>
    <NewProducts products={newProducts}/>
  </Layout>
}

export async function getServerSideProps() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}})
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
  },
}}