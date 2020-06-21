const rust = import('./pkg');

rust
  .then(m=>m.greet('Rust'))
  .catch(console.error);