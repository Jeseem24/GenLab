document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = "auto";
      document.querySelector('.splash-screen').remove();
    }
  });

  // --- 3D Tablet System Generation ---
  const scene = document.querySelector('.tablet-scene');
  if (scene) {
    const tabletObj = document.createElement('div');
    tabletObj.className = 'tablet-object';
    
    const totalLayers = 20; 
    const depthSpacing = 3; 
    const edgeThickness = 4;
    
    for (let i = 0; i < totalLayers; i++) {
      const layer = document.createElement('div');
      layer.className = 'tablet-layer';
      
      // Calculate realistic bevel (smooth rounded dropoff for front and back edges)
      let scale = 1;
      if (i < edgeThickness) {
        const x = (edgeThickness - i) / edgeThickness;
        scale = 1 - (x * x) * 0.15; 
      } else if (i >= totalLayers - edgeThickness) {
        const x = (i - (totalLayers - 1 - edgeThickness)) / edgeThickness;
        scale = 1 - (x * x) * 0.15;
      }
      
      const zPos = (i - totalLayers / 2) * depthSpacing;
      layer.style.transform = `translateZ(${zPos}px) scale(${scale})`;
      
      // Dynamic lighting for side edges
      if (i > 0 && i < totalLayers - 1) {
         layer.style.filter = "brightness(0.3)";
      }
      
      // Inject the engraved texture and logo perfectly flush on the outer faces
      if (i === 0 || i === totalLayers - 1) {
         layer.classList.add('tablet-face');
         const flip = i === 0 ? 'transform: rotateY(180deg);' : '';
         layer.innerHTML = `<svg viewBox="0 0 187 187" class="tablet-logo" style="${flip}"><use href="#genlab-icon"></use></svg>`;
      }
      tabletObj.appendChild(layer);
    }
    scene.appendChild(tabletObj);

    // Continuous 3D rotation independent of timeline!
    gsap.to(tabletObj, {
      rotationY: -360,
      duration: 18,
      ease: "none",
      repeat: -1
    });
  }

  // INITIAL STATE
  gsap.set(".hero-bg", { opacity: 0 });
  // The group wrapper starts huge and invisible
  gsap.set(".splash-box-group", { scale: 8, opacity: 0 });
  // Individual boxes are normal structurally
  gsap.set(".outer-box", { scale: 1, opacity: 1 });
  gsap.set(".middle-box", { scale: 1, opacity: 1 });
  gsap.set(".inner-box", { scale: 1, opacity: 1 });
  
  gsap.set(".logo-part", { opacity: 0, scale: 0 });
  gsap.set(".hero-section", { opacity: 0 });

  tl.to({}, { duration: 0.3 }); // Initial white screen pause

  // step 0: Fade in the hero background (blurry green) underneath the white splash wrapper
  tl.to(".hero-bg", { opacity: 1, duration: 1.0, ease: "power2.inOut" });

  // step 1: The boxes scale down perfectly UNITEDLY as a single nested structure.
  tl.to(".splash-box-group", { opacity: 1, duration: 0.01 }, "-=0.2")
    .to(".splash-box-group", { scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.01")

  // step 2: logo reveals one by one like a 4 grid
  tl.to(".part-1", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
    .to(".part-2", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" }, "-=0.1")
    .to(".part-3", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" }, "-=0.1")
    .to(".part-4", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" }, "-=0.1")
    
  tl.to({}, { duration: 0.8 });

  // step 3: the box scales down to the centre
  tl.to(".splash-box-group", { scale: 0.6, duration: 0.6, ease: "power2.inOut" });
    
  // step 4: the logo alone fades out
  tl.to(".logo-part", { opacity: 0, scale: 0.5, duration: 0.4, ease: "power1.in" });

  // step 5: the box opens to show the hero section (no opacity fade to avoid ghosting, just zoom in massively)
  tl.to(".splash-box-group", { scale: 12, duration: 0.8, ease: "power2.in" })
    .to(".splash-screen", { opacity: 0, duration: 0.2 }, "-=0.1");

  // step 6: hero section items appear — tablet fires at the same time as the hero fade-in
  tl.fromTo(".hero-section", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2")
    .from(".tablet-scene", { y: 150, duration: 0.6, ease: "power3.out" }, "<")
    .from(".navbar", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" }, "<0.1")
    .from(".hero-title", { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" }, "<0.1")
    .from(".hero-divider", { scaleX: 0, opacity: 0, duration: 0.4, ease: "power2.out" }, "<0.1")
    .from(".hero-subbar", { opacity: 0, y: 10, duration: 0.4 }, "<0.1")
    .from(".hero-tagline", { opacity: 0, y: 10, duration: 0.4 }, "<0.1")
    .from(".bottom-left", { x: -30, opacity: 0, duration: 0.5 }, "<0.1");

  // --- Decorative Pixel Blocks at Bottom of Hero ---
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel-grid';
    heroSection.appendChild(pixelContainer);

    // Create a grid of pixel blocks covering the full hero
    const cols = 24;
    const rows = 12;
    const pixels = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel-block';
        // Light green gradient: lighter top-right, slightly darker bottom-left
        const normX = c / (cols - 1);
        const normY = 1 - r / (rows - 1);
        const factor = (normX + normY) / 2;
        
        const red = Math.floor(160 + factor * 60);   // 160-220
        const green = Math.floor(190 + factor * 45);  // 190-235
        const blue = Math.floor(120 + factor * 60);   // 120-180
        pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        pixel.style.opacity = '0';
        pixel.style.transform = 'scale(0)';
        pixel.dataset.col = c;
        pixel.dataset.row = r;
        pixelContainer.appendChild(pixel);
        pixels.push(pixel);
      }
    }

    // On mousemove, reveal pixels near the cursor (mapped to grid position)
    heroSection.addEventListener('mousemove', (e) => {
      const rect = pixelContainer.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const cellW = rect.width / cols;
      const cellH = rect.height / rows;
      const curCol = mx / cellW;
      const curRow = my / cellH;
      const revealRadius = 4; // how many cells around cursor to reveal

      pixels.forEach(p => {
        const pc = parseInt(p.dataset.col);
        const pr = parseInt(p.dataset.row);
        const dist = Math.sqrt((pc - curCol) ** 2 + (pr - curRow) ** 2);

        if (dist < revealRadius) {
          const strength = 1 - dist / revealRadius;
          p.style.opacity = (strength * 0.7).toFixed(2);
          p.style.transform = `scale(${(0.5 + strength * 0.5).toFixed(2)})`;
        } else {
          p.style.opacity = '0';
          p.style.transform = 'scale(0)';
        }
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      pixels.forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'scale(0)';
      });
    });
  }
});
