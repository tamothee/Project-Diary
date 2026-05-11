import Header from "./Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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
        <title>Timothy Leong</title>
        <meta
          name="Timothy Leong"
          content="Personal portfolio of Timothy Leong"
        />
      </Head>
      <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <Suspense fallback={<Loading />}>
          <Canvas style={{ height: "30vh" }} shadows>
            <PerspectiveCamera makeDefault position={[4, 3, 5]} />
            <OrbitControls maxPolarAngle={Math.PI/2}/>
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
        <main className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
