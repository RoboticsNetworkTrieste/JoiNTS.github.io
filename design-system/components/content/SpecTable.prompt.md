The datasheet voice: what a robot *is*, in numbers. Use it for hardware specs, node parameters, project facts — anywhere a reader wants values, not prose.

```jsx
<SpecTable rows={[
  ['calcolatore', 'Jetson Orin NX 16 GB'],
  ['sensori', 'lidar 32ch · IMU 9DoF · stereo 1440p'],
  ['autonomia', '4 h', 'LiFePO4 24 V'],
  ['massa', '18.4 kg'],
]} />
```

Keys are lowercase in source (CSS uppercases them), values are mono with tabular figures so columns of numbers align. Never use it for sentences.
