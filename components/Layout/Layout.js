import Header from "./Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const Plane = dynamic(() => import("../RenderObjects/Plane"), {
  suspense: true,
});

const BongoCat = dynamic(() => import("../RenderObjects/Bongo_cat"), {
  suspense: true,
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Project Diary</title>
        <meta
          name="Project Diary"
          content="Post interesting projects that I have done"
        />
      </Head>
      <div className="min-h-100v flex flex-col">
        <Header />
        <Suspense fallback={<Loading />}>
          <Canvas style={{ height: "30vh" }} shadows>
            <PerspectiveCamera makeDefault position={[4, 3, 5]} />
            <OrbitControls />
            <directionalLight
              intensity={1}
              castShadow
              position={[-5, 5, 2]}
              shadow-mapSize-height={1024}
              shadow-mapSize-width={1024}
              shadow-bias={-0.0001}
            />
            <ambientLight intensity={0.4} />
            <BongoCat position={[0, 0.7, 0]} />
            <Plane />
          </Canvas>
        </Suspense>
        <Navbar />
        <div className="flex-grow">
          <main className="">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
