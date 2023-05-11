import React from 'react';
import Navbar from "../components/Navbar";
import Layout from '../components/Layout';

export default function Root() {

  return (
    <Layout>
      <div className="flex flex-row">
        <Navbar />
        <div className="flex flex-col max-w-[75%] w-full">
          <div className="flex flex-col justify-center m-4 p-8 bg-zinc-900 rounded-xl">
            <h1 className="text-xl">Content Header</h1>
            <div className="w-full p-4" />
            <p>Lorem ipsum something something something</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}