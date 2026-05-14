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
          name="description"
          content="Personal portfolio of Timothy Leong"
        />
      </Head>

      <div className="page-shell relative overflow-hidden">
        <Header />

        <div className="relative border-b border-brand-light-border/70 bg-brand-light-surface/40 dark:border-brand-dark-border/70 dark:bg-brand-dark-bg/40">
          <Suspense fallback={<Loading />}>
            <Canvas style={{ height: "30vh" }} shadows>
              <PerspectiveCamera makeDefault position={[4, 3, 5]} />
              <OrbitControls maxPolarAngle={Math.PI / 2} />

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
        </div>

        <main className="relative mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}