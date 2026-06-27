import {useRef, useMemo} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import * as THREE from 'three'

function Board() {
    return (
        <mesh receiveShadow>
            <boxGeometry args={[3.6, 0.09, 2.4]}/>
            <meshStandardMaterial color="#0D2318" roughness={0.6} metalness={0.2}/>
        </mesh>
    )
}

function Trace({points, width=0.03}) {
    const geometry=useMemo(()=>{
        const curve=new THREE.CatmullRomCurve3(points.map(([x,y,z])=>new THREE.Vector3(x,y,z)))
        return new THREE.TubeGeometry(curve, 30, width, 4, false)
    }, [points, width])
    return (
        <mesh geometry={geometry}>
            <meshStandardMaterial color="#B07020" roughness={0.3} metalness={0.9}/>
        </mesh>
    )
}

function Chip({pos, size=[0.36, 0.07, 0.24], color="#1A1A2E"}) {
    const [w, h, d]=size
    const pinCount=6
    const pins=useMemo(()=>{
        const arr=[]
        for(let i=0; i<pinCount; i++) {
            const x=-w/2-0.04
            const z=-d/2+(d/(pinCount-1))*i
            arr.push([x, 0, z], [w/2+0.04, 0, z])
        }
        return arr
    }, [w, d])

    return (
        <group position={pos}>
            <mesh castShadow>
                <boxGeometry args={[w, h, d]}/>
                <meshStandardMaterial color={color} roughness={0.4} metalness={0.5}/>
            </mesh>
            {pins.map(([px, py, pz], i)=>(
                <mesh key={i} position={[px, py-0.01, pz]}>
                    <boxGeometry args={[0.04, 0.03, 0.02]}/>
                    <meshStandardMaterial color="#C0A030" metalness={0.95} roughness={0.1}/>
                </mesh>
            ))}
        </group>
    )
}

function Capacitor({pos, color="#1A3A6A"}) {
    return (
        <group position={pos}>
            <mesh castShadow>
                <cylinderGeometry args={[0.06, 0.06, 0.16, 12]}/>
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.3}/>
            </mesh>
            <mesh position={[0, 0.09, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.01, 12]}/>
                <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1}/>
            </mesh>
        </group>
    )
}

function Resistor({pos, rot=[0, 0, Math.PI/2]}) {
    return (
        <group position={pos} rotation={rot}>
            <mesh>
                <cylinderGeometry args={[0.025, 0.025, 0.14, 8]}/>
                <meshStandardMaterial color="#D4A44C" roughness={0.6}/>
            </mesh>
            {[-0.07, 0.07].map((x,i)=>(
                <mesh key={i} position={[x,0,0]}>
                    <cylinderGeometry args={[0.01, 0.01, 0.06, 6]}/>
                    <meshStandardMaterial color="#C0A030" metalness={0.9} roughness={0.1}/>
                </mesh>
            ))}
        </group>
    )
}

function Antenna({pos}) {
    return <group position={pos}>
        {[0, 0.06, 0.12, 0.18].map((z, i)=>(
            <mesh key={i} position={[0, 0.04, z]}>
                <boxGeometry args={[0.28-i*0.04, 0.015, 0.01]}/>
                <meshStandardMaterial color="#B07020" metalness={0.9} roughness={0.2}/>
            </mesh>
        ))}
    </group>
}

function LED({pos, color="#00FF88"}) {
    const ref=useRef()
    useFrame(({clock})=>{
        if(ref.current) {
            const t=clock.getElapsedTime()
            ref.current.intensity=0.6+0.4*Math.sin(t*2.5+pos[0]*3)
        }
    })
    return (
        <group position={pos}>
            <mesh castShadow>
                <cylinderGeometry args={[0.04, 0.04, 0.08, 8]}/>
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} roughness={0.2}/>
            </mesh>
            <pointLight ref={ref} color={color} intensity={0.6} distance={0.8} decay={2}/>
        </group>
    )
}

function USB({pos}) {
    return (
        <group position={pos}>
            <mesh>
                <boxGeometry args={[0.5, 0.1, 0.18]}/>
                <meshStandardMaterial color="#222" roughness={0.7}/>
            </mesh>
            {[-0.16, -0.04, 0.08, 0.2].map((x, i)=>(
                <mesh key={i} position={[x, -0.06, 0]}>
                    <boxGeometry args={[0.04, 0.04, 0.16]}/>
                    <meshStandardMaterial color="#C0A030" metalness={0.95} roughness={0.1}/>
                </mesh>
            ))}
        </group>
    )
}

function DataSignal({from, to}) {
    const ref=useRef()
    const sphereRef=useRef()
    const progress=useRef(0)

    const mid=useMemo(()=>[
        (from[0]+to[0])/2,
        from[1],
        (from[2]+to[2])/2,
    ], [from, to])

    useFrame((_, dt)=>{
        progress.current=(progress.current+dt*0.5)%1
        if(sphereRef.current) {
            const t=progress.current
            const f=new THREE.Vector3(...from)
            const toV=new THREE.Vector3(...to)
            sphereRef.current.position.lerpVectors(f, toV, t)
            sphereRef.current.material.opacity=Math.sin(Math.PI*t)
        }
    })

    const curve=new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(...from),
        new THREE.Vector3(...mid),
        new THREE.Vector3(...to),
    )
    const pts=curve.getPoints(20)
    const geometry=new THREE.BufferGeometry().setFromPoints(pts)
    return (
        <group>
            <line ref={ref} geometry={geometry}>
                <lineBasicMaterial color="#2A8060" opacity={0.35} transparent/>
            </line>
            <mesh ref={sphereRef}>
                <sphereGeometry args={[0.015, 6, 6]}/>
                <meshBasicMaterial color="#5FB0A4" transparent opacity={0.9}/>
            </mesh>
        </group>
    )
}

function PCBGroup() {
    const group=useRef()
    useFrame((_, dt)=>{
        if(group.current) {
            group.current.rotation.y+=dt*0.22
        }
    })

    return (
        <group ref={group} rotation={[0.2,0.4,0]}>
            <Board/>
            {/*Traces*/}
            <Trace points={[[-1.6,0.05,-0.9],[-0.8,0.05,-0.9],[-0.8,0.05,0.2],[-0.1,0.05,0.2]]}/>
            <Trace points={[[0.1,0.05,0.2],[0.8,0.05,0.2],[0.8,0.05,-0.6],[1.4,0.05,-0.6]]} />
            <Trace points={[[-1.0,0.05,0.5],[0.0,0.05,0.5],[0.0,0.05,-0.3]]} />
            <Trace points={[[0.4,0.05,0.8],[0.4,0.05,0.2]]} />
            <Trace points={[[-0.5,0.05,-0.5],[-0.5,0.05,0.5]]} width={0.02} />
            <Trace points={[[0.9,0.05,0.8],[1.4,0.05,0.8],[1.4,0.05,0.2]]} width={0.02} />
            {/*Chips*/}
            <Chip pos={[-0.55, 0.08, -0.1]} size={[0.5, 0.07, 0.36]} color="#0D1A2E"/>
            <Chip pos={[0.5, 0.08, 0.5]} size={[0.36, 0.07, 0.28]} color="#1A0D2E"/>
            <Chip pos={[1.0, 0.08, -0.1]} size={[0.28, 0.06, 0.22]} color="#1A1A1A"/>
            {/*Capacitors*/}
            <Capacitor pos={[-1.1, 0.08, 0.5]}/>
            <Capacitor pos={[-1.1, 0.08, -0.3]} color="#2A1A0A"/>
            <Capacitor pos={[0.0, 0.08, -0.7]} color="#0A2A1A"/>
            {/* Resistors*/}
            <Resistor pos={[-0.2,0.07, -0.5]} rot={[0,0,0]}/>
            <Resistor pos={[0.3, 0.07, -0.5]} rot={[0,0,0]}/>
            <Resistor pos={[1.2, 0.07, 0.5]}/>
            <Resistor pos={[1.2, 0.07, 0.7]}/>
            {/*LED*/}
            <LED pos={[1.5, 0.1, 0.8]} color="#00FF88"/>
            <LED pos={[1.5, 0.1, 0.5]} color="#C97A3D"/>
            <LED pos={[1.5, 0.1, 0.2]} color="#5FB0A4"/>
            {/*Antenna*/}
            <Antenna pos={[-1.5, 0.05, 0.3]}/>
            {/*USB*/}
            <USB pos={[-1.55, 0.1, -0.7]}/>
            {/*Signals*/}
            <DataSignal from={[-0.55, 0.08, -0.1]} to={[0.5, 0.08, 0.5]}/>
            <DataSignal from={[0.5, 0.08, 0.5]} to={[1.0, 0.08, -0.1]}/>
            <DataSignal from={[-0.55, 0.08, -0.1]} to={[-1.1, 0.08, 0.5]}/>
        </group>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.4}/>
            <directionalLight position={[4,8,4]} intensity={1.4} castShadow color="#E8F0EC"/>
            <directionalLight position={[-4,2,-4]} intensity={0.3} color="#5FB0A4"/>
            <pointLight position={[0,3,0]} intensity={0.6} color="#C97A3D" distance={6} decay={2}/>
            <PCBGroup/>
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} minPolarAngle={Math.PI/6} maxPolarAngle={Math.PI/1.8}/>
        </>
    )
}

export default function PCBScene() {
    return(
        <Canvas
            shadows
            camera={{position: [0, 3.2, 4.5], fov: 42}}
            gl={{antialias: true, alpha: true}}
            style={{width: '100%', height: '100%', display: 'block'}}
            //style={{width: '100vw', height: '100vh', position: 'relative'}}
        >
            <Scene/>
        </Canvas>
    )
}