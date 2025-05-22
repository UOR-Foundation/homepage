"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export function TopologicalMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const meshesRef = useRef<THREE.Mesh[]>([])
  const frameIdRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 40
    cameraRef.current = camera

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create multiple objects
    const createObject = (
      position: { x: number; y: number; z: number },
      size: number,
      complexity: number,
      color: number,
      opacity: number,
    ) => {
      // Create geometry
      const geometry = new THREE.PlaneGeometry(size, size, complexity, complexity)

      // Create material
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      })

      // Create mesh
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(position.x, position.y, position.z)
      mesh.rotation.x = Math.PI / 3
      scene.add(mesh)
      meshesRef.current.push(mesh)

      // Modify vertices to create initial shape
      const positionAttribute = geometry.getAttribute("position")
      const vertex = new THREE.Vector3()

      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i)

        const distance = Math.sqrt(vertex.x * vertex.x + vertex.y * vertex.y)
        const amplitude = size / 8
        const frequency = 0.1

        // Create different patterns for different objects
        if (size > 50) {
          // Large central object - wave pattern
          vertex.z = amplitude * Math.sin(distance * frequency)
        } else if (size > 30) {
          // Medium objects - spiral pattern
          const angle = Math.atan2(vertex.y, vertex.x)
          vertex.z = amplitude * Math.sin(distance * frequency + angle * 2)
        } else {
          // Small objects - dome pattern
          vertex.z = amplitude * Math.cos(distance * frequency * 2)
        }

        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
      }

      positionAttribute.needsUpdate = true
      geometry.computeVertexNormals()

      return mesh
    }

    // Create a collection of objects that appear to emerge from each other
    // Main central object
    createObject({ x: 0, y: 0, z: 0 }, 80, 40, 0x3a86ff, 0.1)

    // Medium objects emerging from the main one
    createObject({ x: 20, y: 15, z: 5 }, 40, 30, 0x8338ec, 0.15)
    createObject({ x: -25, y: 10, z: 3 }, 35, 25, 0xff006e, 0.15)
    createObject({ x: -15, y: -20, z: 4 }, 30, 20, 0xfb5607, 0.15)
    createObject({ x: 10, y: -15, z: 2 }, 25, 20, 0xffbe0b, 0.15)

    // Small objects emerging from the medium ones
    createObject({ x: 30, y: 25, z: 8 }, 15, 15, 0x3a86ff, 0.2)
    createObject({ x: -35, y: 15, z: 6 }, 12, 12, 0xff006e, 0.2)
    createObject({ x: -25, y: -30, z: 7 }, 10, 10, 0xfb5607, 0.2)
    createObject({ x: 20, y: -25, z: 5 }, 8, 8, 0xffbe0b, 0.2)

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      // Animate all meshes
      meshesRef.current.forEach((mesh, index) => {
        // Rotate mesh based on mouse position with different sensitivity for each object
        const rotationFactor = 0.05 + (index % 3) * 0.02
        mesh.rotation.x = Math.PI / 3 + mouseRef.current.y * rotationFactor
        mesh.rotation.y = mouseRef.current.x * rotationFactor

        // Animate vertices with different patterns for each object
        const positionAttribute = mesh.geometry.getAttribute("position")
        const vertex = new THREE.Vector3()
        const time = Date.now() * 0.0003
        const timeOffset = index * 0.5 // Different time offset for each object

        for (let i = 0; i < positionAttribute.count; i++) {
          vertex.fromBufferAttribute(positionAttribute, i)

          const originalX = vertex.x
          const originalY = vertex.y
          const distance = Math.sqrt(originalX * originalX + originalY * originalY)
          const size = mesh.geometry.parameters.width
          const amplitude = size / 8

          // Different animation patterns based on object size
          if (size > 50) {
            // Large central object - wave pattern
            vertex.z = amplitude * Math.sin(distance * 0.1 + time)
          } else if (size > 30) {
            // Medium objects - spiral pattern with emergence effect
            const angle = Math.atan2(originalY, originalX)
            const emergeFactor = Math.min(1, (time + timeOffset) * 0.5) // Gradual emergence
            vertex.z = amplitude * emergeFactor * Math.sin(distance * 0.1 + angle * 2 + time)
          } else {
            // Small objects - dome pattern with pulsing
            const pulseFactor = 0.5 + 0.5 * Math.sin(time * 2 + timeOffset)
            const emergeFactor = Math.min(1, (time + timeOffset) * 0.8) // Faster emergence for small objects
            vertex.z = amplitude * pulseFactor * emergeFactor * Math.cos(distance * 0.2)
          }

          positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
        }

        positionAttribute.needsUpdate = true
      })

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameIdRef.current)

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10" />
}
