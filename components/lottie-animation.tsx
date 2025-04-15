"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

interface LottieAnimationProps {
  animationData?: any
  path?: string
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieAnimation({
  animationData,
  path,
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null)
  const anim = useRef<any>(null)

  useEffect(() => {
    if (animationContainer.current) {
      // If we have direct animation data, use it
      if (animationData) {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData,
        })
      }
      // Otherwise, load from path
      else if (path) {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop,
          autoplay,
          path,
        })
      }
      // If neither is provided, load a default geometric animation
      else {
        // Create a simple animation programmatically
        const defaultAnimation = {
          v: "5.7.4",
          fr: 30,
          ip: 0,
          op: 90,
          w: 500,
          h: 500,
          nm: "UOR Geometric Animation",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Hexagon",
              sr: 1,
              ks: {
                o: { a: 0, k: 100 },
                r: {
                  a: 1,
                  k: [
                    { i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 0, s: [0] },
                    { t: 90, s: [360] },
                  ],
                },
                p: { a: 0, k: [250, 250, 0] },
                s: { a: 0, k: [100, 100, 100] },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "sr",
                      sy: 1,
                      d: 1,
                      pt: { a: 0, k: 6 },
                      p: { a: 0, k: [0, 0] },
                      r: { a: 0, k: 0 },
                      ir: { a: 0, k: 80 },
                      is: { a: 0, k: 0 },
                      or: { a: 0, k: 150 },
                      os: { a: 0, k: 0 },
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 1, 1, 1] },
                      o: { a: 0, k: 100 },
                      w: { a: 0, k: 2 },
                      lc: 1,
                      lj: 1,
                      ml: 4,
                      bm: 0,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [0, 0] },
                      a: { a: 0, k: [0, 0] },
                      s: { a: 0, k: [100, 100] },
                      r: { a: 0, k: 0 },
                      o: { a: 0, k: 100 },
                      sk: { a: 0, k: 0 },
                      sa: { a: 0, k: 0 },
                    },
                  ],
                  nm: "Outer Hexagon",
                },
              ],
            },
          ],
        }

        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: defaultAnimation,
        })
      }

      return () => {
        if (anim.current) {
          anim.current.destroy()
        }
      }
    }
  }, [animationData, path, loop, autoplay])

  return <div ref={animationContainer} className={className} />
}
