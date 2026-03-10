"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      uMouse: { value: new THREE.Vector2(-10, -10) },
      uScroll: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform vec2 uResolution; uniform vec2 uMouse; uniform float uScroll;
        varying vec2 vUv;
        vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
        vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){
          const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
          vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
          vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
          vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
          vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
          i=mod289(i);
          vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
          float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
          vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
          vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
          vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
          return 105.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }
        void main(){
          vec2 uv=gl_FragCoord.xy/uResolution.xy;
          vec2 p=uv*2.-1.; p.x*=uResolution.x/uResolution.y;
          float amplitude=1.+(uScroll*1.5);
          float n1=snoise(vec3(p*1.2,uTime*.1));
          float n2=snoise(vec3(p*2.+vec2(5.2),uTime*.15+10.));
          vec2 distortion=vec2(n1,n2)*.12*amplitude;
          vec2 muv=uv-uMouse; muv.x*=uResolution.x/uResolution.y;
          float d=length(muv); float ripple=0.;
          if(uMouse.x>-1.) ripple=sin(d*25.-uTime*8.)*exp(-d*6.)*.03;
          distortion+=ripple;
          vec2 uvR=uv+distortion*.8,uvG=uv+distortion,uvB=uv+distortion*1.2;
          vec3 cb=vec3(.97,.98,1.),cc=vec3(.85,.95,.98),cbl=vec3(.88,.92,.99);
          float m1R=smoothstep(0.,1.,uvR.y+snoise(vec3(uvR*2.,uTime*.1))*.2);
          float m2R=smoothstep(0.,1.,uvR.x);
          vec3 cR=mix(mix(cb,cc,m1R),cbl,m2R*.5);
          float m1G=smoothstep(0.,1.,uvG.y+snoise(vec3(uvG*2.,uTime*.1))*.2);
          float m2G=smoothstep(0.,1.,uvG.x);
          vec3 cG=mix(mix(cb,cc,m1G),cbl,m2G*.5);
          float m1B=smoothstep(0.,1.,uvB.y+snoise(vec3(uvB*2.,uTime*.1))*.2);
          float m2B=smoothstep(0.,1.,uvB.x);
          vec3 cB=mix(mix(cb,cc,m1B),cbl,m2B*.5);
          vec3 fc=vec3(cR.r,cG.g,cB.b);
          float caustic=pow(max(0.,sin(n1*15.+n2*10.)),4.);
          fc+=vec3(1.)*caustic*.15*amplitude;
          fc-=dot(uv-.5,uv-.5)*.15;
          gl_FragColor=vec4(fc,1.);
        }
      `,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    const targetMouse = new THREE.Vector2(-10, -10);
    const currentMouse = new THREE.Vector2(-10, -10);
    let targetScroll = 0,
      currentScroll = 0;
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.set(
        e.clientX / window.innerWidth,
        1 - e.clientY / window.innerHeight,
      );
    };
    const onMouseLeave = () => targetMouse.set(-10, -10);
    const onScroll = () => {
      targetScroll = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll);
    const clock = new THREE.Clock();
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      currentMouse.lerp(targetMouse, 0.08);
      uniforms.uMouse.value.copy(currentMouse);
      currentScroll += (targetScroll - currentScroll) * 0.05;
      uniforms.uScroll.value = currentScroll;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} id="webgl-canvas" />;
}
