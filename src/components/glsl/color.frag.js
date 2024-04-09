export default `precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;
    
    vec3 color = vec3(vel.x+0.5, vel.y + 0.15,(vel.y*vel.x + 0.8));
    color = mix(vec3(0.0), color, len);

    gl_FragColor = vec4(color,  1.0);
}
`