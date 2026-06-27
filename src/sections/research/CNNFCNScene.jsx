import {useRef, useState, useMemo} from 'react' 
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'

const COPPER="#C97A3D"
const TEAL="#5FB0A4"
const MINT="#E9F1EA"
const DIM="#6C8378"

function NodeCube({pos, active, delay, phase}) {
    const ref=useRef()

    useFrame(({clock})=>{
        if(!ref.current) { 
            return
        }
        const t=clock.getElapsedTime()
        const pulse=active ? 0.5+0.5*Math.sin((t-delay)*3+phase) : 0
        ref.current.material.emissiveIntensity=pulse*0.8 
        const s=pulse*0.12+1
        ref.current.scale.setScalar(s)
    })

    return (
        <mesh ref={ref} position={pos} castShadow>
            <boxGeometry args={[0.14, 0.14, 0.14]}/>
            <meshStandardMaterial color={active ? COPPER : "#1A291F"} emissive={COPPER} emissiveIntensity={0} roughness={0.4} metalness={0.7}/>
        </mesh>
    )
}

function ConvLayer({pos, active, phase}) {
    const rows=4
    const cols=4
    const nodes=useMemo(()=>{
        const arr=[]
        for(let r=0; r<rows; r++)
            for(let c=0; c<cols; c++)
                arr.push([c*0.22-(cols-1)*0.11, r*0.22-(rows-1)*0.11, 0])
        return arr
    }, [])
    return (
        <group position={pos}>
            {nodes.map(([x,y,z], i)=>{
                return (
                    <NodeCube key={i} pos={[x,y,z]} active={active} delay={i*0.04} phase={phase}/>
                )
            })}
            <Text position={[0, -1.0, 0]} fontSize={0.12} color={DIM} anchorX="center">Conv layer</Text>
        </group>
    )
}

function ConvArrow({pos, active}) {
    const ref=useRef()
    useFrame(({clock})=>{
        if(!ref.current) {
            return
        }
        const t=clock.getElapsedTime()
        ref.current.material.opacity=active ? 0.5+0.3*Math.sin(t*2) : 0.2
    })
    return (
        <group position={pos}>
            <mesh ref={ref} rotation={[0,0,-Math.PI/2]}>
                <coneGeometry args={[0.08, 0.22, 8]}/>
                <meshBasicMaterial color={COPPER} transparent opacity={0.2}/>
            </mesh>
            <Text position={[0, 0.3, 0]} fontSize={0.11} color={COPPER} anchorX="center">ENFORCE</Text>
        </group>
    )
}

function DenseNode({key, pos, active, delay, phase}) {
    const ref=useRef()
    
    useFrame(({clock})=>{
        if(!ref.current) {
            return
        }
        const t=clock.getElapsedTime()
        const pulse=active ? 0.5+0.5*Math.sin((t-delay)*2.8+phase) : 0
        ref.current.material.emissiveIntensity=pulse
        const s=1+pulse*0.15
        ref.current.scale.setScalar(s)
    })

    return (
        <mesh ref={ref} position={pos} castShadow>
            <sphereGeometry args={[0.09, 10, 10]}/>
            <meshStandardMaterial color={active ? TEAL : "#1A291F"} emissive={TEAL} emissiveIntensity={0} roughness={0.3} metalness={0.5}/>
        </mesh>
    )
}

function DenseLayer({pos, count, active, label, phase}) {
    const nodes=useMemo(()=> Array.from({length: count}, (_, i)=> [0, i*0.28-(count-1)*0.14, 0]), [count])
    return (
        <group position={pos}>
            {nodes.map(([x,y,z], i) => (
                <DenseNode key={i} pos={[x,y,z]} active={active} delay={i*0.06} phase={phase}/>
            ))}
            <Text position={[0, -(count*0.14+0.25), 0]} fontSize={0.12} color={DIM} anchorX="center">{label}</Text>
        </group>
    )
}

function FlowEdge({from, to, active, delay}) {
    const ref=useRef()
    const dotRef=useRef()
    const points=useMemo(()=>
        [new THREE.Vector3(...from), new THREE.Vector3(...to)],
        [from, to]
    )
    const geometry=useMemo(()=>new THREE.BufferGeometry().setFromPoints(points), [points])

    useFrame(({clock})=>{
        const t=clock.getElapsedTime()
        if(ref.current) {
            ref.current.material.opacity=active ? 0.08+0.05*Math.sin(t+delay) : 0.03
        }
        if(dotRef.current && active) {
            const progress=(((t*0.6+delay*0.3)%1)+1)%1
            dotRef.current.position.lerpVectors(points[0], points[1], progress)
            dotRef.current.material.opacity=Math.sin(Math.PI*progress)*0.9
        }
    })

    return (
        <group>
            <line geometry={geometry} ref={ref}>
                <lineBasicMaterial color={TEAL} transparent opacity={0.05}/>
            </line>
            {active && (
                <mesh ref={dotRef}>
                    <sphereGeometry args={[0.015, 4, 4]}/>
                    <meshBasicMaterial color={TEAL} transparent opacity={0}/>
                </mesh>
            )}
        </group>
    )
}

function ENFORCETopology() {
    const [activeStage, setActiveStage]=useState(0)
    const convLayerWorld=[-1.5,0,0]
    const denseLayerWorld=[1.3,0,0]

    const edges=useMemo(()=>{
        const arr=[]
        const rows=4
        const cols=4
        const denseCount=8
        const cx=-1.5
        const cy=0
        const dx=1.3
        const dy=0
        for(let r=0; r<rows; r++) {
            for(let c=0; c<cols; c+=2) {
                const fx=cx+c*0.22-(cols-1)*0.11
                const fy=cy+r*0.22-(rows-1)*0.11
                const di=Math.floor((r*cols+c)/2)%denseCount
                const tx=dx
                const ty=dy+di*0.28-(denseCount-1)*0.14
                arr.push({from: [fx, fy, 0], to: [tx, ty, 0], delay: (r+c)*0.1})
            }
        }
        return arr
    }, [])

    useFrame(({clock})=>{
        const t=Math.floor(clock.getElapsedTime()/2.5)%3
        setActiveStage(t)
    })

    return (
        <group>
            <ConvLayer pos={convLayerWorld} active={activeStage===0} phase={0}/>
            <ConvArrow pos={[-0.1, 0, 0]} active={activeStage===1}/>
            <DenseLayer pos={denseLayerWorld} count={8} active={activeStage===2} label="Dense (FCN)" phase={1}/>
            {edges.map((e, i)=>(
                <FlowEdge key={i} {...e} active={activeStage===1}/>
            ))}
            {/*Label CNN*/}
            <Text position={[convLayerWorld[0], 1.1, 0]} fontSize={0.14} color={MINT} anchorX="center">CNN</Text>
            <Text position={[denseLayerWorld[0], 1.3, 0]} fontSize={0.14} color={MINT} anchorX="center">FCN</Text>
        </group>
    )
}

export default function CNNFCNScene() {
    return (
        <Canvas
            camera={{position: [0,0,4.5], fov:42}}
            gl={{antialias: true, alpha: true}}
            style={{width: '100%', height: '100%'}}
        >
            <ambientLight intensity={0.5}/>
            <directionalLight position={[3,5,3]} intensity={1.2} color="#E8F0EC"/>
            <pointLight position={[-3, 2, 2]} intensity={0.8} color={TEAL} distance={8} decay={2}/>
            <ENFORCETopology/>
            <OrbitControls enablePan={false} enableZoom={false} 
            //autoRotate autoRotateSpeed={0.5}
            />
        </Canvas>
    )
}