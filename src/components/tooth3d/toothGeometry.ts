import * as THREE from 'three';

/**
 * Procedural Anatomical Molar Crown, Bifurcated Roots, Red Vascular Pulp, and Titanium Implant
 */

/**
 * Builds the outer anatomical molar crown geometry with 4 distinct cusps and occlusal fissure
 */
export function createCrownGeometry(isCutaway = false): THREE.BufferGeometry {
  const rings = 32;
  const segments = isCutaway ? 32 : 48;
  const maxAngle = isCutaway ? Math.PI : Math.PI * 2;
  
  const vertices: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  // Crown extends from cervical neck (y = 0) up to occlusal cusps (y = 1.5)
  for (let r = 0; r <= rings; r++) {
    const v = r / rings;
    const y = v * 1.4;

    // Radius contour: cervical constriction -> equatorial bulge -> occlusal narrowing
    let baseRadius = 0.85;
    if (v < 0.4) {
      baseRadius = 0.85 + Math.sin((v / 0.4) * (Math.PI / 2)) * 0.32;
    } else if (v < 0.85) {
      baseRadius = 1.17 - (v - 0.4) * 0.15;
    } else {
      baseRadius = 1.10 - (v - 0.85) * 0.4;
    }

    for (let s = 0; s <= segments; s++) {
      const u = s / segments;
      const angle = isCutaway ? u * Math.PI : u * Math.PI * 2;

      // 4-lobe anatomical contour (buccal & lingual lobes)
      const lobeMod = 1.0 + 0.11 * Math.cos(4 * angle) + 0.05 * Math.sin(2 * angle);
      let rad = baseRadius * lobeMod;

      // Occlusal cusps modulation at top rings (v >= 0.8)
      let yMod = y;
      if (v > 0.8) {
        const cuspFactor = (v - 0.8) / 0.2;
        // 4 cusps: Mesiobuccal (~0.8 rad), Distobuccal (~2.3 rad), Distolingual (~3.9 rad), Mesiolingual (~5.5 rad)
        const cuspHeight = (Math.cos(4 * angle) * 0.14) + (Math.sin(2 * angle) * 0.06);
        yMod += cuspHeight * cuspFactor;
      }

      const x = Math.cos(angle) * rad;
      const z = Math.sin(angle) * rad;

      vertices.push(x, yMod, z);
      uvs.push(u, v);

      // Normal placeholder (recomputed via computeVertexNormals)
      normals.push(x, 0.5, z);
    }
  }

  // Create grid quad faces
  const vertsPerRow = segments + 1;
  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segments; s++) {
      const a = r * vertsPerRow + s;
      const b = (r + 1) * vertsPerRow + s;
      const c = (r + 1) * vertsPerRow + (s + 1);
      const d = r * vertsPerRow + (s + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  // Top occlusal table cap (central fossa with central groove dip)
  const topCenterIndex = vertices.length / 3;
  // Central fissure is depressed (y = 1.28)
  vertices.push(0, 1.28, isCutaway ? 0.2 : 0);
  normals.push(0, 1, 0);
  uvs.push(0.5, 0.5);

  const topRowStart = rings * vertsPerRow;
  for (let s = 0; s < segments; s++) {
    const current = topRowStart + s;
    const next = topRowStart + (s + 1);
    indices.push(topCenterIndex, current, next);
  }

  // If cutaway, fill the cross-section flat face so it looks like a clean solid cut
  if (isCutaway) {
    const cutStart = vertices.length / 3;
    // Add central interior vertical spine for triangulation
    const spineSteps = 16;
    for (let i = 0; i <= spineSteps; i++) {
      const t = i / spineSteps;
      vertices.push(0, t * 1.3, 0);
      normals.push(0, 0, -1);
      uvs.push(0.5, t);
    }
    // Connect spine to outer left and right rim
    for (let i = 0; i < spineSteps; i++) {
      const spineIdx = cutStart + i;
      const spineNext = cutStart + i + 1;
      const ringIdx = Math.floor((i / spineSteps) * rings) * vertsPerRow;
      const ringNext = Math.min(rings, Math.floor(((i + 1) / spineSteps) * rings)) * vertsPerRow;

      // Front side
      indices.push(spineIdx, ringIdx, ringNext);
      indices.push(spineIdx, ringNext, spineNext);

      // Back side
      const oppRingIdx = ringIdx + segments;
      const oppRingNext = ringNext + segments;
      indices.push(spineIdx, oppRingNext, oppRingIdx);
      indices.push(spineIdx, spineNext, oppRingNext);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

/**
 * Builds anatomical bifurcated roots (Mesial & Distal)
 */
export function createRootGeometry(isMesial: boolean, isCutaway = false): THREE.BufferGeometry {
  const steps = 24;
  const radialSegments = isCutaway ? 16 : 24;
  const maxAngle = isCutaway ? Math.PI : Math.PI * 2;

  const vertices: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  // Curve trajectory from cervical neck down to apex
  const xOffset = isMesial ? 0.38 : -0.36;
  const apexCurvature = isMesial ? 0.14 : -0.10;
  const rootLength = isMesial ? 1.6 : 1.5;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = -t * rootLength;
    // Organic physiological taper
    const radiusX = Math.max(0.42 * (1 - t * 0.78), 0.08);
    const radiusZ = Math.max(0.34 * (1 - t * 0.75), 0.07);

    // Natural root spread and apical distal curl
    const curX = xOffset * (1 - t * 0.3) + Math.sin(t * Math.PI * 0.7) * apexCurvature;
    const curZ = Math.sin(t * Math.PI) * 0.08;

    for (let s = 0; s <= radialSegments; s++) {
      const u = s / radialSegments;
      const angle = isCutaway ? u * Math.PI : u * Math.PI * 2;

      const px = curX + Math.cos(angle) * radiusX;
      const py = y;
      const pz = curZ + Math.sin(angle) * radiusZ;

      vertices.push(px, py, pz);
      uvs.push(u, t);
      normals.push(Math.cos(angle), 0, Math.sin(angle));
    }
  }

  const vertsPerRow = radialSegments + 1;
  for (let i = 0; i < steps; i++) {
    for (let s = 0; s < radialSegments; s++) {
      const a = i * vertsPerRow + s;
      const b = (i + 1) * vertsPerRow + s;
      const c = (i + 1) * vertsPerRow + (s + 1);
      const d = i * vertsPerRow + (s + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  // Cap apex at root bottom
  const apexCenterIndex = vertices.length / 3;
  const lastRow = steps * vertsPerRow;
  const tipX = vertices[lastRow * 3];
  const tipY = vertices[lastRow * 3 + 1] - 0.06;
  const tipZ = vertices[lastRow * 3 + 2];

  vertices.push(tipX, tipY, tipZ);
  normals.push(0, -1, 0);
  uvs.push(0.5, 1);

  for (let s = 0; s < radialSegments; s++) {
    indices.push(apexCenterIndex, lastRow + s + 1, lastRow + s);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

/**
 * CRUCIAL USER REQUIREMENT: "Pluto red karo" -> "Pulp red karo"
 * Builds the internal Dental Pulp Chamber and Root Canals in vivid clinical RED
 * Includes Coronal Pulp Chamber, 4 Pulp Horns, and Dual Root Canals to the Apices
 */
export function createPulpSystemGroup(): THREE.Group {
  const pulpGroup = new THREE.Group();
  pulpGroup.name = 'RedDentalPulpSystem';

  // Vivid arterial dental pulp material in rich clinical crimson red with warm emissive glow
  const redPulpMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xef4444), // Vivid bright arterial blood red
    emissive: new THREE.Color(0xb91c1c), // Deep crimson emissive core
    emissiveIntensity: 0.65,
    roughness: 0.25,
    metalness: 0.08,
  });

  // Secondary vascular capillary glow material for apical delta & horn tips
  const vascularGlowMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xf87171),
    emissive: new THREE.Color(0xdc2626),
    emissiveIntensity: 0.85,
    roughness: 0.15,
  });

  // 1. Coronal Pulp Chamber (Heart of the tooth pulp)
  const chamberGeo = new THREE.CylinderGeometry(0.42, 0.32, 0.65, 20, 4);
  chamberGeo.translate(0, 0.72, 0);
  const chamberMesh = new THREE.Mesh(chamberGeo, redPulpMaterial);
  pulpGroup.add(chamberMesh);

  // 2. Four Anatomical Pulp Horns pointing toward the 4 occlusal cusps
  const hornCoords = [
    { x: 0.28, z: 0.26, h: 0.32 },  // Mesiobuccal pulp horn
    { x: -0.28, z: 0.26, h: 0.28 }, // Distobuccal pulp horn
    { x: -0.26, z: -0.26, h: 0.26 },// Distolingual pulp horn
    { x: 0.26, z: -0.26, h: 0.34 }, // Mesiolingual pulp horn
  ];

  hornCoords.forEach((coord) => {
    const hornGeo = new THREE.ConeGeometry(0.12, coord.h, 12);
    hornGeo.translate(coord.x, 1.05 + coord.h / 2, coord.z);
    const hornMesh = new THREE.Mesh(hornGeo, vascularGlowMaterial);
    pulpGroup.add(hornMesh);
  });

  // 3. Mesial Root Canal (smooth spline tube tapering to apex)
  const mesialCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.18, 0.42, 0),
    new THREE.Vector3(0.32, 0.0, 0.02),
    new THREE.Vector3(0.38, -0.6, 0.04),
    new THREE.Vector3(0.42, -1.1, 0.06),
    new THREE.Vector3(0.46, -1.52, 0.03), // Apical foramen
  ]);

  const mesialCanalGeo = new THREE.TubeGeometry(mesialCurve, 28, 0.09, 12, false);
  const mesialCanalMesh = new THREE.Mesh(mesialCanalGeo, redPulpMaterial);
  pulpGroup.add(mesialCanalMesh);

  // 4. Distal Root Canal (tapering spline tube)
  const distalCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.18, 0.42, 0),
    new THREE.Vector3(-0.28, 0.0, -0.02),
    new THREE.Vector3(-0.34, -0.55, -0.03),
    new THREE.Vector3(-0.36, -1.05, -0.05),
    new THREE.Vector3(-0.39, -1.45, -0.02), // Apical foramen
  ]);

  const distalCanalGeo = new THREE.TubeGeometry(distalCurve, 28, 0.085, 12, false);
  const distalCanalMesh = new THREE.Mesh(distalCanalGeo, redPulpMaterial);
  pulpGroup.add(distalCanalMesh);

  // 5. Apical Foramina Vascular Nodes (red glowing tip where nerve enters)
  const mesialApexGeo = new THREE.SphereGeometry(0.09, 10, 10);
  mesialApexGeo.translate(0.46, -1.54, 0.03);
  const mesialApexMesh = new THREE.Mesh(mesialApexGeo, vascularGlowMaterial);
  pulpGroup.add(mesialApexMesh);

  const distalApexGeo = new THREE.SphereGeometry(0.085, 10, 10);
  distalApexGeo.translate(-0.39, -1.47, -0.02);
  const distalApexMesh = new THREE.Mesh(distalApexGeo, vascularGlowMaterial);
  pulpGroup.add(distalApexMesh);

  return pulpGroup;
}

/**
 * Builds Medical Grade Titanium Implant Fixture + Golden Abutment + Monolithic Zirconia Crown
 */
export function createTitaniumImplantGroup(): THREE.Group {
  const implantGroup = new THREE.Group();
  implantGroup.name = 'TitaniumImplantSystem';

  // Brushed Titanium Fixture Material
  const titaniumMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xa0a8b4), // Surgical grade medical grade 5 titanium
    metalness: 0.94,
    roughness: 0.22,
  });

  // Anodized Gold Abutment Material
  const goldAbutmentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xd4af37),
    metalness: 0.88,
    roughness: 0.18,
  });

  // Monolithic Zirconia Ceramic Crown
  const zirconiaMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xfcfcfd),
    roughness: 0.12,
    metalness: 0.02,
    clearcoat: 0.9,
    clearcoatRoughness: 0.1,
    transmission: 0.25,
    thickness: 1.0,
  });

  // 1. Threaded Titanium Implant Body (tapered root replacement)
  const fixtureBodyGeo = new THREE.CylinderGeometry(0.42, 0.24, 1.8, 24);
  fixtureBodyGeo.translate(0, -0.75, 0);
  const fixtureBodyMesh = new THREE.Mesh(fixtureBodyGeo, titaniumMaterial);
  implantGroup.add(fixtureBodyMesh);

  // 2. Micro-threads / Macro-threads along implant surface (8 concentric retention rings)
  for (let i = 0; i < 9; i++) {
    const ty = -0.15 - i * 0.16;
    const rad = 0.42 - i * 0.018;
    const threadGeo = new THREE.TorusGeometry(rad + 0.05, 0.035, 8, 24);
    threadGeo.rotateX(Math.PI / 2);
    threadGeo.translate(0, ty, 0);
    const threadMesh = new THREE.Mesh(threadGeo, titaniumMaterial);
    implantGroup.add(threadMesh);
  }

  // 3. Hexagonal Collar / Polished Neck
  const collarGeo = new THREE.CylinderGeometry(0.46, 0.43, 0.22, 6);
  collarGeo.translate(0, 0.22, 0);
  const collarMesh = new THREE.Mesh(collarGeo, titaniumMaterial);
  implantGroup.add(collarMesh);

  // 4. Surgical Gold Abutment Post
  const abutmentGeo = new THREE.ConeGeometry(0.36, 0.55, 16);
  abutmentGeo.translate(0, 0.58, 0);
  const abutmentMesh = new THREE.Mesh(abutmentGeo, goldAbutmentMaterial);
  implantGroup.add(abutmentMesh);

  // 5. High-Aesthetic Monolithic Zirconia Crown Restoration
  const crownGeo = createCrownGeometry(false);
  const crownMesh = new THREE.Mesh(crownGeo, zirconiaMaterial);
  implantGroup.add(crownMesh);

  return implantGroup;
}
