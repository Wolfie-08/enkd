"use client";
// Lunar gravity scene from 21st.dev (lunar-gravity-card), adapted for this site:
// - texture self-hosted at /textures/moon.jpg (no runtime CDN dependency)
// - drei <Environment preset> removed: it fetches HDR maps from a third-party CDN; plain lights instead
// - ring particles recoloured to the site palette (slate, orange, earth) instead of cyan/purple
// - `LunarScene` exports the canvas alone for the hero; rendering pauses off-screen
// - drag-to-rotate only on fine pointers, so touch scrolling is never captured on phones
// - no shadow maps: nothing in the scene receives a visible shadow, and three r18x removed PCFSoftShadowMap

import React, { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const RADIUS = 2.0;
const MOON_TEXTURE = "/textures/moon.jpg";
const ASTEROIDS = 75;

type RingState = "hidden" | "animating" | "visible";
type Shader = Parameters<THREE.Material["onBeforeCompile"]>[0];

const RealisticMoon = ({ onClick }: { onClick?: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const colorMap = useTexture(MOON_TEXTURE);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      onClick={onClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshStandardMaterial map={colorMap} bumpMap={colorMap} bumpScale={0.02} roughness={0.8} metalness={0.1} />
    </mesh>
  );
};

const particlesCount = 60000;
const [ringPositions, ringColors, ringRandoms] = (() => {
  const pos = new Float32Array(particlesCount * 3);
  const col = new Float32Array(particlesCount * 3);
  const rnd = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const rDist = Math.pow(Math.random(), 1.5);
    const radius = 2.2 + rDist * 2.2;
    const thickness = 0.4 - rDist * 0.2;
    const ySpread = Math.random() + Math.random() + Math.random() - 1.5;

    pos[i * 3] = Math.cos(angle) * radius;
    pos[i * 3 + 1] = ySpread * thickness;
    pos[i * 3 + 2] = Math.sin(angle) * radius;

    const intensity = 1.0 - rDist;
    const paletteType = Math.random();
    let baseR, baseG, baseB;
    if (paletteType < 0.8) {
      // slate #6b6e71
      baseR = 0.42; baseG = 0.43; baseB = 0.44;
    } else if (paletteType < 0.92) {
      // orange #e37830
      baseR = 0.89; baseG = 0.47; baseB = 0.19;
    } else {
      // earth #83664b
      baseR = 0.51; baseG = 0.4; baseB = 0.29;
    }
    baseR = Math.min(1.0, Math.max(0.0, baseR + (Math.random() - 0.5) * 0.1));
    baseG = Math.min(1.0, Math.max(0.0, baseG + (Math.random() - 0.5) * 0.1));
    baseB = Math.min(1.0, Math.max(0.0, baseB + (Math.random() - 0.5) * 0.1));

    const sparkle = Math.random() > 0.95 ? 2.5 : 1.0;
    col[i * 3] = baseR * intensity * sparkle;
    col[i * 3 + 1] = baseG * intensity * sparkle;
    col[i * 3 + 2] = baseB * intensity * sparkle;
    rnd[i] = Math.random();
  }
  return [pos, col, rnd];
})();

const ParticleRing = ({ ringState, massiveAsteroidsRef }: { ringState: RingState; massiveAsteroidsRef: React.RefObject<Float32Array> }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const invMat = useMemo(() => new THREE.Matrix4(), []);
  const ast = useMemo(() => new THREE.Vector3(), []);

  const uniforms = useRef({
    uProgress: { value: ringState === "visible" ? 1.0 : 0.0 },
    uAsteroids: { value: new Float32Array(ASTEROIDS * 4) },
    time: { value: 0 },
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.updateMatrix();
      invMat.copy(pointsRef.current.matrix).invert();
      const src = massiveAsteroidsRef.current;
      const local = uniforms.current.uAsteroids.value;
      for (let i = 0; i < ASTEROIDS; i++) {
        ast.set(src[i * 4], src[i * 4 + 1], src[i * 4 + 2]).applyMatrix4(invMat);
        local[i * 4] = ast.x;
        local[i * 4 + 1] = ast.y;
        local[i * 4 + 2] = ast.z;
        local[i * 4 + 3] = src[i * 4 + 3];
      }
    }
    uniforms.current.time.value = state.clock.elapsedTime;

    if (ringState === "animating") {
      uniforms.current.uProgress.value = Math.min(1.0, uniforms.current.uProgress.value + delta * 0.35);
    } else {
      uniforms.current.uProgress.value = ringState === "visible" ? 1.0 : 0.0;
    }
  });

  const onBeforeCompile = (shader: Shader) => {
    shader.uniforms.uProgress = uniforms.current.uProgress;
    shader.uniforms.uAsteroids = uniforms.current.uAsteroids;
    shader.uniforms.time = uniforms.current.time;

    shader.vertexShader = `
      uniform float uProgress;
      uniform vec4 uAsteroids[${ASTEROIDS}];
      uniform float time;
      attribute float aRandom;
      varying float vProgress;
      ${shader.vertexShader}
    `;

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `
      vec3 transformed = vec3(position);

      float angle = atan(transformed.x, transformed.z);
      float normalizedAngle = abs(angle) / 3.14159265359;
      float spawnThreshold = 1.0 - normalizedAngle;

      float progressValue = (uProgress * 1.4) - spawnThreshold;
      float particleProgress = smoothstep(0.0, 0.4, progressValue);
      vProgress = particleProgress;

      transformed.y += sin(angle * 10.0 + time) * 0.05 * aRandom;

      if (uProgress > 0.5) {
        for (int i = 0; i < ${ASTEROIDS}; i++) {
          vec4 astData = uAsteroids[i];
          vec3 delta = transformed - astData.xyz;
          float dist = length(delta);
          float rad = astData.w * 2.0 + 0.15;
          if (dist < rad) {
            float force = pow((rad - dist) / rad, 2.0);
            transformed += normalize(delta) * force * 0.4;
            transformed.y += force * 0.20 * (aRandom - 0.5);
          }
        }
      }

      float swirl = (1.0 - particleProgress) * 4.0;
      float s = sin(swirl);
      float c = cos(swirl);
      transformed.xz = mat2(c, -s, s, c) * transformed.xz;

      transformed.y += (1.0 - particleProgress) * (transformed.y >= 0.0 ? 1.0 : -1.0);

      vec3 moonSurface = normalize(transformed) * 2.1;
      transformed = mix(moonSurface, transformed, particleProgress);
      `,
    );

    shader.fragmentShader = `
      varying float vProgress;
      ${shader.fragmentShader}
    `;
    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <color_fragment>`,
      `
      #include <color_fragment>
      diffuseColor.a *= vProgress;
      `,
    );
  };

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[ringPositions, 3]} />
        <bufferAttribute attach="attributes-color" args={[ringColors, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[ringRandoms, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.008}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        onBeforeCompile={onBeforeCompile}
      />
    </points>
  );
};

const generateAsteroids = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      angle: Math.random() * Math.PI * 2,
      baseRadius: 2.8 + Math.random() * 2.0,
      radialAmplitude: 0.5 + Math.random() * 1.5,
      radialSpeed: 0.15 + Math.random() * 0.25,
      phase: Math.random() * Math.PI * 2,
      zOffset: (Math.random() - 0.5) * 0.8,
      speed: (0.04 + Math.random() * 0.08) * (Math.random() > 0.5 ? 1 : -1),
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      rsx: (Math.random() - 0.5) * 0.05,
      rsy: (Math.random() - 0.5) * 0.05,
      rsz: (Math.random() - 0.5) * 0.05,
      scale: 0.02 + Math.pow(Math.random(), 4) * 0.18,
    });
  }
  data.sort((a, b) => b.scale - a.scale);
  return data;
};

const AsteroidBelt = ({ ringState, massiveAsteroidsRef }: { ringState: RingState; massiveAsteroidsRef: React.RefObject<Float32Array> }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const colorMap = useTexture(MOON_TEXTURE);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const [asteroids] = useState(() => generateAsteroids(ASTEROIDS));
  const scaleRef = useRef(0);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const targetScale = ringState === "hidden" ? 0 : 1;
    const lerpSpeed = ringState === "hidden" ? 5 : 2;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * lerpSpeed);

    if (scaleRef.current < 0.01) {
      mesh.visible = false;
      return;
    }
    mesh.visible = true;

    asteroids.forEach((a, i) => {
      a.angle += a.speed * delta;
      a.phase += a.radialSpeed * delta;
      let r = a.baseRadius + Math.sin(a.phase) * a.radialAmplitude;
      if (r < 2.15) r = 2.15 + (2.15 - r) * 0.85;

      const x = Math.cos(a.angle) * r;
      const y = Math.sin(a.angle) * r;
      const buf = massiveAsteroidsRef.current;
      buf[i * 4] = x;
      buf[i * 4 + 1] = y;
      buf[i * 4 + 2] = a.zOffset;
      buf[i * 4 + 3] = a.scale;

      a.rx += a.rsx;
      a.ry += a.rsy;
      a.rz += a.rsz;

      dummy.position.set(x, y, a.zOffset);
      dummy.rotation.set(a.rx, a.ry, a.rz);
      dummy.scale.setScalar(a.scale * scaleRef.current);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, ASTEROIDS]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial map={colorMap} bumpMap={colorMap} bumpScale={0.08} color="#ffffff" roughness={0.7} metalness={0.1} />
    </instancedMesh>
  );
};

/** The moon, its ring and asteroid belt on a transparent canvas. Click the moon to form the ring. */
export function LunarScene({ className }: { className?: string }) {
  const [ringState, setRingState] = useState<RingState>("hidden");
  const massiveAsteroidsRef = useRef<Float32Array>(new Float32Array(ASTEROIDS * 4));
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(matchMedia("(pointer: fine)").matches);
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    return () => {
      io.disconnect();
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div ref={wrapRef} className={cn("h-full w-full", className)}>
      <Canvas camera={{ position: [0, 3.6, 10.2], fov: 45 }} dpr={[1, 2]} frameloop={inView ? "always" : "never"} gl={{ alpha: true }}>
        <ambientLight intensity={0.12} />
        <directionalLight position={[8, 5, 5]} intensity={2.2} color="#fff6ec" />
        <directionalLight position={[-5, -3, -5]} intensity={0.35} color="#e37830" />

        {finePointer && <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />}

        <group rotation={[Math.PI / 8, 0, 0]}>
          <Suspense fallback={null}>
            <RealisticMoon onClick={() => setRingState((s) => (s === "hidden" ? "animating" : s))} />
            <ParticleRing ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
            <AsteroidBelt ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}

export interface LunarGravityCardProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export default function LunarGravityCard({
  className,
  title = (
    <>
      <span className="text-zinc-50 drop-shadow-sm">Lunar</span>
      <br />
      <span className="bg-gradient-to-b from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent drop-shadow-md">Gravity.</span>
    </>
  ),
  description = "Embed highly realistic astrophysics directly into your Next.js project. Zero configuration, fully interactive, and flawlessly smooth.",
}: LunarGravityCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[700px] w-full max-w-[1000px] flex-col overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.4)] md:h-[540px] md:min-h-[auto] md:flex-row",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-[60%] w-full bg-gradient-to-b from-black via-black/90 to-transparent md:inset-y-0 md:left-0 md:h-full md:w-[60%] md:bg-gradient-to-r" />
      <div className="pointer-events-none relative z-20 flex w-full flex-col justify-center px-10 py-12 md:w-[45%] md:p-0 md:pl-16">
        <h2 className="mb-6 text-[4.5rem] font-bold leading-[0.9] tracking-tighter md:text-[5.5rem]">{title}</h2>
        <p className="max-w-[340px] text-base font-medium leading-relaxed text-zinc-400 md:text-lg">{description}</p>
      </div>
      <div className="pointer-events-auto relative z-0 flex h-[450px] w-full items-center justify-center md:absolute md:right-0 md:top-0 md:h-full md:w-[65%]">
        <LunarScene className="absolute inset-0" />
      </div>
    </div>
  );
}

export { LunarGravityCard as Component };
