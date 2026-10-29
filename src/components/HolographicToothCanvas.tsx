import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RotateCcw, Eye, Sparkles, Layers, ChevronDown, ChevronUp, Shield, Activity } from 'lucide-react';
import { Language } from '../translations';
import {
  createCrownGeometry,
  createRootGeometry,
  createPulpSystemGroup,
  createTitaniumImplantGroup,
} from './tooth3d/toothGeometry';

interface AnatomyNode {
  id: string;
  nameEn: string;
  nameGu: string;
  subEn: string;
  subGu: string;
  descEn: string;
  descGu: string;
  badgeEn: string;
  badgeGu: string;
  tagColor: string;
  worldPos: [number, number, number];
}

const ANATOMY_NODES: AnatomyNode[] = [
  {
    id: 'cusp',
    nameEn: 'Occlusal Enamel Cusps',
    nameGu: 'ઓક્લુઝલ ઈનેમલ કસ્પ્સ',
    subEn: '4-Cusp Molar Architecture (96% Mineral Hardness)',
    subGu: '૪-કસ્પ મોલર રચના (૯૬% ખનિજ હાર્ડનેસ)',
    descEn: 'Natural light refraction, deep occlusal fissures and wear-resistant chewing strength engineered for heavy masticatory bite loads.',
    descGu: 'કુદરતી પ્રકાશ રીફ્રેક્શન, ઊંડી ફિશર્સ અને ખોરાક ચાવવા માટે વાસ્તવિક મજબૂત ૪ કસ્પ્સ વાળી સપાટી.',
    badgeEn: 'Diamond Hardness',
    badgeGu: 'ડાયમંડ હાર્ડનેસ',
    tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
    worldPos: [0.65, 1.35, 0.2],
  },
  {
    id: 'pulp',
    nameEn: 'Vivid Red Dental Pulp & Canal',
    nameGu: 'રેડ પલ્પ ચેમ્બર અને કેનાલ',
    subEn: 'Vital Vascular Nerve Core (Single-Sitting RCT)',
    subGu: 'જીવંત વાસ્ક્યુલર નર્વ કોર (સિંગલ-સીટિંગ RCT)',
    descEn: 'Internal arterial vascular pulp chamber and root canals rendered in vivid anatomical red. Treated painlessly in a single sitting with rotary files.',
    descGu: 'આંતરિક લાલ રક્તવાહિની પલ્પ ચેમ્બર અને કેનાલ. કમ્પ્યુટરાઇઝ્ડ રોટરી સિસ્ટમ દ્વારા ૧ જ બેઠકમાં દર્દરહિત રીતે સુરક્ષિત સાફ કરવામાં આવે છે.',
    badgeEn: 'Red Pulp System',
    badgeGu: 'લાલ પલ્પ સિસ્ટમ',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    worldPos: [-0.65, 0.45, 0.15],
  },
  {
    id: 'root',
    nameEn: 'Bifurcated Roots & Apex',
    nameGu: 'દ્વિ-મૂળ અને એપેક્સ ફિરામેન',
    subEn: 'Dual Root Anchoring into Alveolar Bone',
    subGu: 'હાડકામાં કુદરતી મજબૂત દ્વિ-મૂળ પકડ',
    descEn: 'Mesial and distal physiological roots distributing chewing forces into the jawbone, protected by the periodontal ligament.',
    descGu: 'જડબાના હાડકામાં કુદરતી રીતે વિસ્તરેલા બે મજબૂત મૂળ જે દાંતને આજીવન સ્થિરતા આપે છે.',
    badgeEn: 'Dual Roots',
    badgeGu: 'બે મજબૂત મૂળ',
    tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    worldPos: [0.55, -1.2, 0.1],
  },
];

interface Props {
  className?: string;
  lang?: Language;
}

export const HolographicToothCanvas: React.FC<Props> = ({ className = '', lang = 'en' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [viewMode, setViewMode] = useState<'enamel' | 'cutaway' | 'implant'>('cutaway');
  const [activeNode, setActiveNode] = useState<AnatomyNode>(ANATOMY_NODES[1]); // Default to RED PULP
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState(false);

  // Scene references for dynamic updates without recreation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const toothPivotRef = useRef<THREE.Group | null>(null);
  const naturalToothGroupRef = useRef<THREE.Group | null>(null);
  const cutawayToothGroupRef = useRef<THREE.Group | null>(null);
  const implantGroupRef = useRef<THREE.Group | null>(null);

  // Drag physics state
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const rotYRef = useRef(0.25);
  const rotXRef = useRef(0.12);
  const targetRotYRef = useRef(0.25);
  const targetRotXRef = useRef(0.12);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Detect software WebGL per Three.js directives
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // Initialize WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));

    // Create Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.1, 5.8);

    // Mandatory Studio Environment Reflection (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 3-Point Dental Lighting Rig
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 3.5);
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0xf0f9ff, 0xe2e8f0, 1.1);
    scene.add(hemiLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    rimLight.position.set(-3, 2, -2.5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xfff1f2, 0.9);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // Root grounding shadow plane
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.32)');
      grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.12)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -1.85;
    scene.add(shadowMesh);

    // Master Pivot Group for 3D Tooth
    const toothPivot = new THREE.Group();
    toothPivot.position.y = -0.05;
    scene.add(toothPivot);
    toothPivotRef.current = toothPivot;

    // Materials
    // Natural Enamel Material (Ivory PBR with subtle translucency)
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xfbfbfc),
      roughness: 0.14,
      metalness: 0.04,
      clearcoat: 0.88,
      clearcoatRoughness: 0.08,
      transmission: 0.35, // Lets the glowing red pulp peek through naturally
      thickness: 1.2,
      attenuationColor: new THREE.Color(0xfef2f2),
      attenuationDistance: 1.5,
      side: THREE.DoubleSide,
    });

    // Root Dentin Material
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xf5eedc),
      roughness: 0.38,
      metalness: 0.02,
      side: THREE.DoubleSide,
    });

    // 1. Natural Tooth Model (Full solid with translucent enamel)
    const naturalGroup = new THREE.Group();
    const naturalCrownMesh = new THREE.Mesh(createCrownGeometry(false), enamelMaterial);
    const naturalMesialRootMesh = new THREE.Mesh(createRootGeometry(true, false), rootMaterial);
    const naturalDistalRootMesh = new THREE.Mesh(createRootGeometry(false, false), rootMaterial);
    const naturalPulpGroup = createPulpSystemGroup(); // Red pulp system inside!

    naturalGroup.add(naturalCrownMesh);
    naturalGroup.add(naturalMesialRootMesh);
    naturalGroup.add(naturalDistalRootMesh);
    naturalGroup.add(naturalPulpGroup);
    toothPivot.add(naturalGroup);
    naturalToothGroupRef.current = naturalGroup;

    // 2. Cutaway Tooth Model (Coronal cross-section with EXPOSED RED PULP)
    const cutawayGroup = new THREE.Group();
    const cutawayCrownMesh = new THREE.Mesh(createCrownGeometry(true), enamelMaterial);
    const cutawayMesialRootMesh = new THREE.Mesh(createRootGeometry(true, true), rootMaterial);
    const cutawayDistalRootMesh = new THREE.Mesh(createRootGeometry(false, true), rootMaterial);
    const cutawayPulpGroup = createPulpSystemGroup(); // Red pulp system fully visible!

    cutawayGroup.add(cutawayCrownMesh);
    cutawayGroup.add(cutawayMesialRootMesh);
    cutawayGroup.add(cutawayDistalRootMesh);
    cutawayGroup.add(cutawayPulpGroup);
    toothPivot.add(cutawayGroup);
    cutawayToothGroupRef.current = cutawayGroup;

    // 3. Titanium Implant Model
    const implantGroup = createTitaniumImplantGroup();
    toothPivot.add(implantGroup);
    implantGroupRef.current = implantGroup;

    // Set initial visibility
    naturalGroup.visible = false;
    cutawayGroup.visible = true; // Start in cutaway so the RED PULP is immediately visible!
    implantGroup.visible = false;

    // Resize handling
    const handleResize = () => {
      const width = container.clientWidth || 360;
      const height = container.clientHeight || 380;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Render loop with exponential damping
    let animFrameId: number;
    let lastTime = performance.now();

    const tick = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Idle auto-rotation when not user-dragging
      if (!isDraggingRef.current && isAutoRotating) {
        targetRotYRef.current += 0.007;
      }

      // Smooth exponential damping
      rotYRef.current = THREE.MathUtils.damp(rotYRef.current, targetRotYRef.current, 10, dt);
      rotXRef.current = THREE.MathUtils.damp(rotXRef.current, targetRotXRef.current, 10, dt);

      // Subtle breathing float motion
      const floatY = Math.sin(currentTime * 0.0018) * 0.04;
      toothPivot.position.y = -0.05 + floatY;

      toothPivot.rotation.y = rotYRef.current;
      toothPivot.rotation.x = rotXRef.current;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    // Pointer Event Listeners for 360 interactive rotation
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      targetRotYRef.current += dx * 0.01;
      targetRotXRef.current = Math.max(-0.6, Math.min(0.6, targetRotXRef.current + dy * 0.008));
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDraggingRef.current = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);

    return () => {
      cancelAnimationFrame(animFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointercancel', handlePointerUp);
      renderer.dispose();
    };
  }, [isAutoRotating]);

  // Sync mode visibility
  useEffect(() => {
    if (naturalToothGroupRef.current) {
      naturalToothGroupRef.current.visible = viewMode === 'enamel';
    }
    if (cutawayToothGroupRef.current) {
      cutawayToothGroupRef.current.visible = viewMode === 'cutaway';
    }
    if (implantGroupRef.current) {
      implantGroupRef.current.visible = viewMode === 'implant';
    }
  }, [viewMode]);

  const resetView = () => {
    targetRotYRef.current = 0.25;
    targetRotXRef.current = 0.12;
  };

  return (
    <div className={`relative w-full h-[460px] md:h-[500px] flex flex-col select-none overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-100 ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing touch-none">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Minimal Title & Spec Badge (Top-Left) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-sky-200/80 shadow-xs text-[11px] font-bold text-sky-950 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{lang === 'gu' ? 'વાસ્તવિક ૩D ડેન્ટલ એનાટોમી' : 'Realistic 3D Dental Anatomy'}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium px-1">
            {lang === 'gu' ? '૩૬૦° ફેરવવા માટે ડ્રેગ કરો' : 'Drag to inspect in 360°'}
          </span>
        </div>

        {/* Top-Right Quick Controls: Reset & Auto-Rotate */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`p-2 rounded-xl text-xs font-semibold border shadow-xs transition-all ${
              isAutoRotating
                ? 'bg-sky-600 text-white border-sky-600 shadow-sky-600/20'
                : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title={lang === 'gu' ? 'ઓટો-રોટેશન ચાલુ/બંધ' : 'Toggle Auto-Rotation'}
          >
            <Activity className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={resetView}
            className="p-2 rounded-xl bg-white/90 text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-xs transition-all"
            title={lang === 'gu' ? 'વ્યૂ રીસેટ કરો' : 'Reset View'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Red Dental Pulp Highlight Callout (Vivid Red Pill) */}
        <div className="absolute top-14 left-3 z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-600/25 border border-rose-500 animate-none">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>{lang === 'gu' ? 'રેડ પલ્પ ચેમ્બર અને નર્વ કેનાલ' : 'Red Pulp Chamber & Nerve Canals'}</span>
          </div>
        </div>

        {/* Interactive Anatomy Pin Highlights */}
        {viewMode !== 'implant' && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {ANATOMY_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              // Map static positions on canvas for clean UX
              const screenPos =
                node.id === 'cusp'
                  ? 'top-20 right-4'
                  : node.id === 'pulp'
                  ? 'top-40 left-4'
                  : 'bottom-28 right-4';

              return (
                <div key={node.id} className={`absolute ${screenPos} pointer-events-auto`}>
                  <button
                    onClick={() => setActiveNode(node)}
                    className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-xs font-medium transition-all shadow-sm ${
                      isSelected
                        ? node.id === 'pulp'
                          ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-500/20'
                          : 'bg-white border-sky-400 text-sky-950 ring-2 ring-sky-500/20'
                        : 'bg-white/80 border-slate-200/90 text-slate-700 hover:bg-white'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        node.id === 'pulp' ? 'bg-rose-600' : 'bg-sky-600'
                      }`}
                    />
                    <span className="text-[11px] font-bold">
                      {lang === 'gu' ? node.nameGu : node.nameEn}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Ergonomic Collapsible Bottom Dock (Zero Viewport Occlusion) */}
      <div className="relative z-20 w-full px-3 pb-3 pt-1">
        {/* Collapse / Expand Toggle Button */}
        <div className="flex justify-center -mt-3 mb-1">
          <button
            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
            className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/95 border border-sky-200 text-[10px] font-bold text-slate-600 shadow-xs hover:bg-sky-50 transition-colors"
          >
            {isControlsCollapsed ? (
              <>
                <ChevronUp className="w-3 h-3 text-sky-600" />
                <span>{lang === 'gu' ? 'કન્ટ્રોલ્સ બતાવો' : 'Show 3D Controls'}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3 text-sky-600" />
                <span>{lang === 'gu' ? 'કન્ટ્રોલ્સ સંતાડો' : 'Hide Controls'}</span>
              </>
            )}
          </button>
        </div>

        {!isControlsCollapsed && (
          <div className="w-full bg-white/95 border border-sky-200/80 rounded-2xl p-3 shadow-lg space-y-2.5 backdrop-blur-xs">
            {/* 3-Way Mode Toggle Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/60">
              <button
                onClick={() => setViewMode('cutaway')}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  viewMode === 'cutaway'
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="truncate">
                  {lang === 'gu' ? 'રેડ પલ્પ કટઅવે' : 'Red Pulp Cutaway'}
                </span>
              </button>

              <button
                onClick={() => setViewMode('enamel')}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  viewMode === 'enamel'
                    ? 'bg-sky-700 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="truncate">
                  {lang === 'gu' ? 'કુદરતી ઇનેમલ' : 'Natural Enamel'}
                </span>
              </button>

              <button
                onClick={() => setViewMode('implant')}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  viewMode === 'implant'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span className="truncate">
                  {lang === 'gu' ? 'ઇમ્પ્લાન્ટ ૩D' : 'Titanium Implant'}
                </span>
              </button>
            </div>

            {/* Active Anatomical Feature Spec Card */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      activeNode.id === 'pulp' ? 'bg-rose-600' : 'bg-sky-600'
                    }`}
                  />
                  <span className="text-xs font-extrabold text-slate-900">
                    {lang === 'gu' ? activeNode.nameGu : activeNode.nameEn}
                  </span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${activeNode.tagColor}`}>
                  {lang === 'gu' ? activeNode.badgeGu : activeNode.badgeEn}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                {lang === 'gu' ? activeNode.descGu : activeNode.descEn}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
