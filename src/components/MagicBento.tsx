// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import { gsap } from 'gsap';





// export interface BentoCardProps {
//   color?: string;
//   title?: string;
//   description?: string;
//   label?: string;
//   image?:string;
//   textAutoHide?: boolean;
//   disableAnimations?: boolean;
// }

// export interface BentoProps {
//   textAutoHide?: boolean;
//   enableStars?: boolean;
//   enableSpotlight?: boolean;
//   enableBorderGlow?: boolean;
//   disableAnimations?: boolean;
//   spotlightRadius?: number;
//   particleCount?: number;
//   enableTilt?: boolean;
//   glowColor?: string;
//   clickEffect?: boolean;
//   enableMagnetism?: boolean;
// }

// const DEFAULT_PARTICLE_COUNT = 12;
// const DEFAULT_SPOTLIGHT_RADIUS = 300;
// const DEFAULT_GLOW_COLOR = '132, 0, 255';
// const MOBILE_BREAKPOINT = 768;

// const cardData: BentoCardProps[] = [
//   {
//     color: '#060010',
//     title: 'Jammu to delhi',
//     // description: 'Saftey',
//     label: 'BMW ',
//     image:'https://www.carbike360.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fcb360static%2Fuploads%2F8b621949-43ae-411a-815b-06ba7ec6e482-small-BMW%25203%2520Series%2520LWB.avif&w=3840&q=75'
//   },
//   {
//     color: '#060010',
//     title: 'Dashboard',
//     // description: 'Centralized data view',
//     label: 'VENUE',
//     image:'data:image/jpeg;base64,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'
   
//   },
//   {
//     color: '#060010',
//     title: 'Chandigarh to Pune',
//     // description: 'Work together seamlessly',
//     label: 'INNOVA', 
//      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRo5Ru9FpascmLVpGoBeuE6rUwyj5CaSqng&s'
//   },
//   {
//     // color: '#060010',

//     title: 'Delhi to Banglore',
//     // description: 'Safely and secure',
//     label: 'FORTUNER',
//      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/1200px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg',
     
//   },
//   {
//     color: '#060010',
//     title: 'Integration',
//     // description: 'Connect favorite tools',
//     label: 'VIRTUS',
//     image:'https://upload.wikimedia.org/wikipedia/commons/9/9e/2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png'
//   },
//   {
//     color: '#060010',
//     title: 'Security',
//     // description: 'Enterprise-grade protection',
//     label: 'SWIFT',
//     image:'https://www.team-bhp.com/forum/attachments/test-drives-initial-ownership-reports/1998973d1587928460-journey-yet-another-swift-blue-knight-my-maruti-swift-zxi-amt-1.jpg'
//   }
// ];

// const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
//   const el = document.createElement('div');
//   el.className = 'particle';
//   el.style.cssText = `
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: rgba(${color}, 1);
//     box-shadow: 0 0 6px rgba(${color}, 0.6);
//     pointer-events: none;
//     z-index: 100;
//     left: ${x}px;
//     top: ${y}px;
//   `;
//   return el;
// };

// const calculateSpotlightValues = (radius: number) => ({
//   proximity: radius * 0.5,
//   fadeDistance: radius * 0.75
// });

// const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
//   const rect = card.getBoundingClientRect();
//   const relativeX = ((mouseX - rect.left) / rect.width) * 100;
//   const relativeY = ((mouseY - rect.top) / rect.height) * 100;

//   card.style.setProperty('--glow-x', `${relativeX}%`);
//   card.style.setProperty('--glow-y', `${relativeY}%`);
//   card.style.setProperty('--glow-intensity', glow.toString());
//   card.style.setProperty('--glow-radius', `${radius}px`);
// };

// const ParticleCard: React.FC<{
//   children: React.ReactNode;
//   className?: string;
//   disableAnimations?: boolean;
//   style?: React.CSSProperties;
//   particleCount?: number;
//   glowColor?: string;
//   enableTilt?: boolean;
//   clickEffect?: boolean;
//   enableMagnetism?: boolean;
// }> = ({
//   children,
//   className = '',
//   disableAnimations = false,
//   style,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   glowColor = DEFAULT_GLOW_COLOR,
//   enableTilt = true,
//   clickEffect = false,
//   enableMagnetism = false
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const particlesRef = useRef<HTMLDivElement[]>([]);
//   const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
//   const isHoveredRef = useRef(false);
//   const memoizedParticles = useRef<HTMLDivElement[]>([]);
//   const particlesInitialized = useRef(false);
//   const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

//   const initializeParticles = useCallback(() => {
//     if (particlesInitialized.current || !cardRef.current) return;

//     const { width, height } = cardRef.current.getBoundingClientRect();
//     memoizedParticles.current = Array.from({ length: particleCount }, () =>
//       createParticleElement(Math.random() * width, Math.random() * height, glowColor)
//     );
//     particlesInitialized.current = true;
//   }, [particleCount, glowColor]);

//   const clearAllParticles = useCallback(() => {
//     timeoutsRef.current.forEach(clearTimeout);
//     timeoutsRef.current = [];
//     magnetismAnimationRef.current?.kill();

//     particlesRef.current.forEach(particle => {
//       gsap.to(particle, {
//         scale: 0,
//         opacity: 0,
//         duration: 0.3,
//         ease: 'back.in(1.7)',
//         onComplete: () => {
//           particle.parentNode?.removeChild(particle);
//         }
//       });
//     });
//     particlesRef.current = [];
//   }, []);

//   const animateParticles = useCallback(() => {
//     if (!cardRef.current || !isHoveredRef.current) return;

//     if (!particlesInitialized.current) {
//       initializeParticles();
//     }

//     memoizedParticles.current.forEach((particle, index) => {
//       const timeoutId = setTimeout(() => {
//         if (!isHoveredRef.current || !cardRef.current) return;

//         const clone = particle.cloneNode(true) as HTMLDivElement;
//         cardRef.current.appendChild(clone);
//         particlesRef.current.push(clone);

//         gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

//         gsap.to(clone, {
//           x: (Math.random() - 0.5) * 100,
//           y: (Math.random() - 0.5) * 100,
//           rotation: Math.random() * 360,
//           duration: 2 + Math.random() * 2,
//           ease: 'none',
//           repeat: -1,
//           yoyo: true
//         });

//         gsap.to(clone, {
//           opacity: 0.3,
//           duration: 1.5,
//           ease: 'power2.inOut',
//           repeat: -1,
//           yoyo: true
//         });
//       }, index * 100);

//       timeoutsRef.current.push(timeoutId);
//     });
//   }, [initializeParticles]);

//   useEffect(() => {
//     if (disableAnimations || !cardRef.current) return;

//     const element = cardRef.current;

//     const handleMouseEnter = () => {
//       isHoveredRef.current = true;
//       animateParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 5,
//           rotateY: 5,
//           duration: 0.3,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         });
//       }
//     };

//     const handleMouseLeave = () => {
//       isHoveredRef.current = false;
//       clearAllParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }

//       if (enableMagnetism) {
//         gsap.to(element, {
//           x: 0,
//           y: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!enableTilt && !enableMagnetism) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       if (enableTilt) {
//         const rotateX = ((y - centerY) / centerY) * -10;
//         const rotateY = ((x - centerX) / centerX) * 10;

//         gsap.to(element, {
//           rotateX,
//           rotateY,
//           duration: 0.1,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         });
//       }

//       if (enableMagnetism) {
//         const magnetX = (x - centerX) * 0.05;
//         const magnetY = (y - centerY) * 0.05;

//         magnetismAnimationRef.current = gsap.to(element, {
//           x: magnetX,
//           y: magnetY,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     const handleClick = (e: MouseEvent) => {
//       if (!clickEffect) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const maxDistance = Math.max(
//         Math.hypot(x, y),
//         Math.hypot(x - rect.width, y),
//         Math.hypot(x, y - rect.height),
//         Math.hypot(x - rect.width, y - rect.height)
//       );

//       const ripple = document.createElement('div');
//       ripple.style.cssText = `
//         position: absolute;
//         width: ${maxDistance * 2}px;
//         height: ${maxDistance * 2}px;
//         border-radius: 50%;
//         background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//         left: ${x - maxDistance}px;
//         top: ${y - maxDistance}px;
//         pointer-events: none;
//         z-index: 1000;
//       `;

//       element.appendChild(ripple);

//       gsap.fromTo(
//         ripple,
//         {
//           scale: 0,
//           opacity: 1
//         },
//         {
//           scale: 1,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//           onComplete: () => ripple.remove()
//         }
//       );
//     };

//     element.addEventListener('mouseenter', handleMouseEnter);
//     element.addEventListener('mouseleave', handleMouseLeave);
//     element.addEventListener('mousemove', handleMouseMove);
//     element.addEventListener('click', handleClick);

//     return () => {
//       isHoveredRef.current = false;
//       element.removeEventListener('mouseenter', handleMouseEnter);
//       element.removeEventListener('mouseleave', handleMouseLeave);
//       element.removeEventListener('mousemove', handleMouseMove);
//       element.removeEventListener('click', handleClick);
//       clearAllParticles();
//     };
//   }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

//   return (
//     <div
//       ref={cardRef}
//       className={`${className} relative overflow-hidden`}
//       style={{ ...style, position: 'relative', overflow: 'hidden' }}
//     >
//       {children}
//     </div>
//   );
// };

// const GlobalSpotlight: React.FC<{
//   gridRef: React.RefObject<HTMLDivElement | null>;
//   disableAnimations?: boolean;
//   enabled?: boolean;
//   spotlightRadius?: number;
//   glowColor?: string;
// }> = ({
//   gridRef,
//   disableAnimations = false,
//   enabled = true,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   glowColor = DEFAULT_GLOW_COLOR
// }) => {
//   const spotlightRef = useRef<HTMLDivElement | null>(null);
//   const isInsideSection = useRef(false);

//   useEffect(() => {
//     if (disableAnimations || !gridRef?.current || !enabled) return;

//     const spotlight = document.createElement('div');
//     spotlight.className = 'global-spotlight';
//     spotlight.style.cssText = `
//       position: fixed;
//       width: 800px;
//       height: 800px;
//       border-radius: 50%;
//       pointer-events: none;
//       background: radial-gradient(circle,
//         rgba(${glowColor}, 0.15) 0%,
//         rgba(${glowColor}, 0.08) 15%,
//         rgba(${glowColor}, 0.04) 25%,
//         rgba(${glowColor}, 0.02) 40%,
//         rgba(${glowColor}, 0.01) 65%,
//         transparent 70%
//       );
//       z-index: 200;
//       opacity: 0;
//       transform: translate(-50%, -50%);
//       mix-blend-mode: screen;
//     `;
//     document.body.appendChild(spotlight);
//     spotlightRef.current = spotlight;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!spotlightRef.current || !gridRef.current) return;

//       const section = gridRef.current.closest('.bento-section');
//       const rect = section?.getBoundingClientRect();
//       const mouseInside =
//         rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

//       isInsideSection.current = mouseInside || false;
//       const cards = gridRef.current.querySelectorAll('.card');

//       if (!mouseInside) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//         cards.forEach(card => {
//           (card as HTMLElement).style.setProperty('--glow-intensity', '0');
//         });
//         return;
//       }

//       const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
//       let minDistance = Infinity;

//       cards.forEach(card => {
//         const cardElement = card as HTMLElement;
//         const cardRect = cardElement.getBoundingClientRect();
//         const centerX = cardRect.left + cardRect.width / 2;
//         const centerY = cardRect.top + cardRect.height / 2;
//         const distance =
//           Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
//         const effectiveDistance = Math.max(0, distance);

//         minDistance = Math.min(minDistance, effectiveDistance);

//         let glowIntensity = 0;
//         if (effectiveDistance <= proximity) {
//           glowIntensity = 1;
//         } else if (effectiveDistance <= fadeDistance) {
//           glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
//         }

//         updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
//       });

//       gsap.to(spotlightRef.current, {
//         left: e.clientX,
//         top: e.clientY,
//         duration: 0.1,
//         ease: 'power2.out'
//       });

//       const targetOpacity =
//         minDistance <= proximity
//           ? 0.8
//           : minDistance <= fadeDistance
//             ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
//             : 0;

//       gsap.to(spotlightRef.current, {
//         opacity: targetOpacity,
//         duration: targetOpacity > 0 ? 0.2 : 0.5,
//         ease: 'power2.out'
//       });
//     };

//     const handleMouseLeave = () => {
//       isInsideSection.current = false;
//       gridRef.current?.querySelectorAll('.card').forEach(card => {
//         (card as HTMLElement).style.setProperty('--glow-intensity', '0');
//       });
//       if (spotlightRef.current) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//       spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
//     };
//   }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

//   return null;
// };

// const BentoCardGrid: React.FC<{
//   children: React.ReactNode;
//   gridRef?: React.RefObject<HTMLDivElement | null>;
// }> = ({ children, gridRef }) => (
//   <div
//     className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative"
//     style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
//     ref={gridRef}
//   >
//     {children}
//   </div>
// );

// const useMobileDetection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return isMobile;
// };

// const MagicBento: React.FC<BentoProps> = ({
//   textAutoHide = true,
//   enableStars = true,
//   enableSpotlight = true,
//   enableBorderGlow = true,
//   disableAnimations = false,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   enableTilt = false,
//   glowColor = DEFAULT_GLOW_COLOR,
//   clickEffect = true,
//   enableMagnetism = true
// }) => {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const isMobile = useMobileDetection();
//   const shouldDisableAnimations = disableAnimations || isMobile;

//   return (
//     <>
//       <style>
//         {`
//           .bento-section {
//             --glow-x: 50%;
//             --glow-y: 50%;
//             --glow-intensity: 0;
//             --glow-radius: 200px;
//             --glow-color: ${glowColor};
//             --border-color: #392e4e;
//             --background-dark: #060010;
//             --white: hsl(0, 0%, 100%);
//             --purple-primary: rgba(35, 8, 122, 1);
//             --purple-glow: rgba(132, 0, 255, 0.2);
//             --purple-border: rgba(40, 8, 147, 0.8);
//           }
          
//           .card-responsive {
//             grid-template-columns: 1fr;
//             width: 90%;
//             margin: 0 auto;
//             padding: 0.5rem;
//           }
          
//           @media (min-width: 600px) {
//             .card-responsive {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
          
//           @media (min-width: 1024px) {
//             .card-responsive {
//               grid-template-columns: repeat(4, 1fr);
//             }
            
//             .card-responsive .card:nth-child(3) {
//               grid-column: span 2;
//               grid-row: span 2;
//             }
            
//             .card-responsive .card:nth-child(4) {
//               grid-column: 1 / span 2;
//               grid-row: 2 / span 2;
//             }
            
//             .card-responsive .card:nth-child(6) {
//               grid-column: 4;
//               grid-row: 3;
//             }
//           }
          
//           .card--border-glow::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             padding: 6px;
//             background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
//                 transparent 60%);
//             border-radius: inherit;
//             mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             mask-composite: subtract;
//             -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             -webkit-mask-composite: xor;
//             pointer-events: none;
//             transition: opacity 0.3s ease;
//             z-index: 1;
//           }
          
//           .card--border-glow:hover::after {
//             opacity: 1;
//           }
          
//           .card--border-glow:hover {
//             box-shadow: 0 4px 20px rgba(36, 13, 205, 0.66), 0 0 30px rgba(${glowColor}, 0.2);
//           }
          
//           .particle::before {
//             content: '';
//             position: absolute;
//             top: -2px;
//             left: -2px;
//             right: -2px;
//             bottom: -2px;
//             background: rgba(${glowColor}, 0.2);
//             border-radius: 50%;
//             z-index: -1;
//           }
          
//           .particle-container:hover {
//             box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
//           }
          
//           .text-clamp-1 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 1;
//             line-clamp: 1;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }
          
//           .text-clamp-2 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 2;
//             line-clamp: 2;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }
          
//           @media (max-width: 599px) {
//             .card-responsive {
//               grid-template-columns: 1fr;
//               width: 90%;
//               margin: 0 auto;
//               padding: 0.5rem;
//             }
            
//             .card-responsive .card {
//               width: 100%;
//               min-height: 180px;
//             }
//           }
//         `}
//       </style>

//       {enableSpotlight && (
//         <GlobalSpotlight
//           gridRef={gridRef}
//           disableAnimations={shouldDisableAnimations}
//           enabled={enableSpotlight}
//           spotlightRadius={spotlightRadius}
//           glowColor={glowColor}
//         />
//       )}

//       <BentoCardGrid gridRef={gridRef}>
//         <div className="card-responsive grid gap-2">
//           {cardData.map((card, index) => {
//             const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
//               enableBorderGlow ? 'card--border-glow' : ''
//             }`;

//             const cardStyle = {
//               backgroundColor: card.color || 'var(--background-dark)',
//               borderColor: 'var(--border-color)',
//               color: 'var(--white)',
//               '--glow-x': '50%',
//               '--glow-y': '50%',
//               '--glow-intensity': '0',
//               '--glow-radius': '200px'
//             } as React.CSSProperties;

//             if (enableStars) {
//               return (
//                 <ParticleCard
//                   key={index}
//                   className={baseClassName}
//                   style={cardStyle}
//                   disableAnimations={shouldDisableAnimations}
//                   particleCount={particleCount}
//                   glowColor={glowColor}
//                   enableTilt={enableTilt}
//                   clickEffect={clickEffect}
//                   enableMagnetism={enableMagnetism}
//                 >
//                   <div className="card__header flex justify-between gap-3 relative text-white">
//                     <span className="card__label text-base">{card.label}</span>
//                   </div>
//                   <div className="card__content flex flex-col relative text-white">
//                       {card.image && (
//     <img
//       src={card.image}
//       alt={card.title}
//       className="w-full h-32 object-cover rounded-md mb-3 opacity-90 hover:opacity-100 transition"
//     />
//   )}
                    
//                     <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
//                       {card.title}
//                     </h3>
//                     <p
//                       className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}
//                     >
//                       {card.description}
//                     </p>
//                   </div>
//                 </ParticleCard>
//               );
//             }

//             return (
//               <div
//                 key={index}
//                 className={baseClassName}
//                 style={cardStyle}
//                 ref={el => {
//                   if (!el) return;

//                   const handleMouseMove = (e: MouseEvent) => {
//                     if (shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;
//                     const centerX = rect.width / 2;
//                     const centerY = rect.height / 2;

//                     if (enableTilt) {
//                       const rotateX = ((y - centerY) / centerY) * -10;
//                       const rotateY = ((x - centerX) / centerX) * 10;

//                       gsap.to(el, {
//                         rotateX,
//                         rotateY,
//                         duration: 0.1,
//                         ease: 'power2.out',
//                         transformPerspective: 1000
//                       });
//                     }

//                     if (enableMagnetism) {
//                       const magnetX = (x - centerX) * 0.05;
//                       const magnetY = (y - centerY) * 0.05;

//                       gsap.to(el, {
//                         x: magnetX,
//                         y: magnetY,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }
//                   };

//                   const handleMouseLeave = () => {
//                     if (shouldDisableAnimations) return;

//                     if (enableTilt) {
//                       gsap.to(el, {
//                         rotateX: 0,
//                         rotateY: 0,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }

//                     if (enableMagnetism) {
//                       gsap.to(el, {
//                         x: 0,
//                         y: 0,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }
//                   };

//                   const handleClick = (e: MouseEvent) => {
//                     if (!clickEffect || shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;

//                     const maxDistance = Math.max(
//                       Math.hypot(x, y),
//                       Math.hypot(x - rect.width, y),
//                       Math.hypot(x, y - rect.height),
//                       Math.hypot(x - rect.width, y - rect.height)
//                     );

//                     const ripple = document.createElement('div');
//                     ripple.style.cssText = `
//                       position: absolute;
//                       width: ${maxDistance * 2}px;
//                       height: ${maxDistance * 2}px;
//                       border-radius: 50%;
//                       background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//                       left: ${x - maxDistance}px;
//                       top: ${y - maxDistance}px;
//                       pointer-events: none;
//                       z-index: 1000;
//                     `;

//                     el.appendChild(ripple);

//                     gsap.fromTo(
//                       ripple,
//                       {
//                         scale: 0,
//                         opacity: 1
//                       },
//                       {
//                         scale: 1,
//                         opacity: 0,
//                         duration: 0.8,
//                         ease: 'power2.out',
//                         onComplete: () => ripple.remove()
//                       }
//                     );
//                   };

//                   el.addEventListener('mousemove', handleMouseMove);
//                   el.addEventListener('mouseleave', handleMouseLeave);
//                   el.addEventListener('click', handleClick);
//                 }}
//               >
//                 <div className="card__header flex justify-between gap-3 relative text-white">

                    
//                   <span className="card__label text-base">{card.label}</span>
//                 </div>
                
//                 <div className="card__content flex flex-col relative text-white">
                
                
//                   <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
//                     {card.title}
//                   </h3>
//                   <p className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}>
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </BentoCardGrid>
//     </>
//   );
// };

// export default MagicBento;
