#version 120

uniform vec2 resolution;
uniform sampler2DRect texture;
uniform float time;

varying vec2 vTexCoord;

float random(vec2 c){
return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float mod289(float c){
return c - floor(c * (1.0 / 289.0)) * 289.0;
}

void main(){
vec2 pos = gl_FragCoord.xy;

vec2 st = gl_FragCoord.xy / resolution;
vec3 addColor;
addColor.r = sin(time * 1.5 + st.x)*0.5;
addColor.g = cos(time * 2.0 + st.x)*0.5;
addColor.b = sin(time * 3.0 + st.y)*0.5;

//Textureから色のサンプリング
vec4 samplerColor = texture2DRect(texture, vTexCoord);

vec2 p = (gl_FragCoord.xy * 1.0 - resolution) / resolution;
float t = (sin(time) + 0.0) * 5.0;
vec2 tvec = p * 0.5 + vec2(t) * 0.5;

gl_FragColor = vec4(samplerColor.r + mod289(pos.x + random(pos) * 100.0)/600.0 * abs(sin(time*3.0)) * random(pos), samplerColor.g + mod289(pos.x + random(pos) * 200.0)/600.0 * abs(sin(time*5.0)) * random(pos), samplerColor.b, 1.0);
}

