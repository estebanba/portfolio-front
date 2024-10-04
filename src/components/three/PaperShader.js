import { Vector2 } from "three";

export const PaperShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
    time: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    varying vec2 vUv;

    // Simple noise function
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (d - b) * u.x;
    }

    void main() {
      vec2 uv = vUv;

      // Paper-like noise texture
      float grain = noise(uv * resolution.xy * 0.1);
      vec4 texColor = texture2D(tDiffuse, uv);

      // Mix the grain with the original scene color
      vec4 color = vec4(texColor.rgb + grain * 0.1, texColor.a);

      gl_FragColor = color;
    }
  `,
};
