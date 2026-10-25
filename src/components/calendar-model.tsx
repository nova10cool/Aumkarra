import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import front from "@/assets/cover-page.jpg.asset.json";
import back from "@/assets/calendar-back.jpeg.asset.json";

export function CalendarModel() {
  const host = useRef<HTMLDivElement>(null);
  const rotation = useRef(0);
  const playing = useRef(true);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let cancelled = false;
    let cleanup = () => {};
    void import("three").then(async (THREE) => {
      if (cancelled) return;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      renderer.domElement.setAttribute("aria-label", "Rotating aumkarra calendar with front cover and JoeVastu back");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.z = 4.9;
      const loader = new THREE.TextureLoader();
      const textures = await Promise.all([loader.loadAsync(front.url), loader.loadAsync(back.url)]);
      if (cancelled) { textures.forEach((t) => t.dispose()); renderer.dispose(); renderer.domElement.remove(); return; }
      textures.forEach((t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); });
      const swatch = document.createElement("canvas").getContext("2d");
      const token = getComputedStyle(document.documentElement).getPropertyValue("--gold").trim();
      let edgeColor = new THREE.Color();
      if (swatch) {
        swatch.fillStyle = token;
        swatch.fillRect(0, 0, 1, 1);
        const [r = 0, g = 0, b = 0] = swatch.getImageData(0, 0, 1, 1).data;
        edgeColor = new THREE.Color(r / 255, g / 255, b / 255);
      }
      const edge = new THREE.MeshBasicMaterial({ color: edgeColor });
      const materials = [edge, edge, edge, edge, new THREE.MeshBasicMaterial({ map: textures[0] }), new THREE.MeshBasicMaterial({ map: textures[1] })];
      const geometry = new THREE.BoxGeometry(2.05, 2.05, 0.035);
      const calendar = new THREE.Group();
      calendar.add(new THREE.Mesh(geometry, materials));
      const coilGeometry = new THREE.TorusGeometry(0.037, 0.009, 8, 16);
      for (let i = 0; i < 24; i++) {
        const coil = new THREE.Mesh(coilGeometry, edge);
        coil.rotation.y = Math.PI / 2;
        coil.position.set(-0.94 + i * 0.082, 1.03, 0);
        calendar.add(coil);
      }
      scene.add(calendar);
      const resize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      const observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      playing.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPaused(!playing.current);
      let last = performance.now();
      renderer.setAnimationLoop((time) => {
        const delta = Math.min((time - last) / 1000, 0.05);
        last = time;
        if (playing.current) rotation.current += delta * 0.3;
        calendar.rotation.set(0.06, rotation.current, 0);
        renderer.render(scene, camera);
      });
      setReady(true);
      cleanup = () => {
        observer.disconnect(); renderer.setAnimationLoop(null);
        geometry.dispose(); coilGeometry.dispose();
        new Set(materials).forEach((m) => m.dispose());
        textures.forEach((t) => t.dispose());
        renderer.dispose(); renderer.domElement.remove();
      };
    }).catch(() => { /* The cover remains visible when WebGL is unavailable. */ });
    return () => { cancelled = true; cleanup(); };
  }, []);

  function turn(amount: number) {
    playing.current = false;
    setPaused(true);
    rotation.current += amount;
  }

  return (
    <div className="w-full">
      <div ref={host} className="calendar-stage relative mx-auto w-full overflow-hidden">
        {!ready && <img src={front.url} alt="aumkarra 2027 calendar cover" className="absolute inset-0 m-auto h-4/5 w-4/5 object-contain" />}
      </div>
      <div className="flex justify-center gap-3">
        <Button variant="ghost" size="icon" disabled={!ready} aria-label="Show calendar front" title="Show front" onClick={() => { rotation.current = 0; playing.current = false; setPaused(true); }}><RotateCcw /></Button>
        <Button variant="outline" size="icon" disabled={!ready} aria-label={paused ? "Resume rotation" : "Pause rotation"} title={paused ? "Resume rotation" : "Pause rotation"} onClick={() => { playing.current = !playing.current; setPaused(!playing.current); }}>{paused ? <Play /> : <Pause />}</Button>
        <Button variant="ghost" size="icon" disabled={!ready} aria-label="Show calendar back" title="Show back" onClick={() => { turn(0); rotation.current = Math.PI; }}><RotateCw /></Button>
      </div>
    </div>
  );
}