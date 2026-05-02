document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Optional: Smooth scroll for search focus
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            document.querySelector('.search-bar').style.border = '1px solid var(--accent)';
        });
        searchInput.addEventListener('blur', () => {
            document.querySelector('.search-bar').style.border = 'none';
        });
    }

    // --- 3D Animations & Effects ---

    // 1. Vanta.js Background on Hero Section
    if (typeof VANTA !== 'undefined') {
        const vantaConfig = {
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0ea5e9, // using the new --accent color
            backgroundColor: 0x0b0f19, // using --bg-color
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        };

        if (document.querySelector("#home")) {
            VANTA.NET(Object.assign({ el: "#home" }, vantaConfig));
        }
        if (document.querySelector(".services-hero")) {
            VANTA.NET(Object.assign({ el: ".services-hero" }, vantaConfig));
        }
        if (document.querySelector(".cases-hero")) {
            VANTA.NET(Object.assign({ el: ".cases-hero" }, vantaConfig));
        }
        if (document.querySelector(".contact-hero")) {
            VANTA.NET(Object.assign({ el: ".contact-hero" }, vantaConfig));
        }
    }

    // 2. Vanilla Tilt 3D Effects
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".process-step"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });

        VanillaTilt.init(document.querySelectorAll(".case-card"), {
            max: 10,
            speed: 400,
            scale: 1.02,
        });

        VanillaTilt.init(document.querySelectorAll(".promo-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });

        VanillaTilt.init(document.querySelectorAll(".service-image-box"), {
            max: 5,
            speed: 400,
            scale: 1.02,
            glare: true,
            "max-glare": 0.1,
        });
    }

    // 3. GSAP ScrollTrigger Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Remove old reveal active class logic to use GSAP
        document.querySelectorAll('.reveal, .fade-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });

        // Hero Text Animation (Home)
        if (document.querySelector(".hero-text h1")) {
            gsap.from(".hero-text h1, .hero-text p, .hero-cta", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.to(".hero-image-container", {
                y: -20,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }

        // Hero Text Animation (Services)
        if (document.querySelector(".services-hero h1")) {
            gsap.from(".services-hero h1, .services-hero p", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }

        // Hero Text Animation (Cases)
        if (document.querySelector(".cases-hero h1")) {
            gsap.from(".cases-hero h1, .cases-hero p", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }

        // Promo Card Animation
        if (document.querySelector(".brand-promo")) {
            gsap.from(".brand-promo", {
                scrollTrigger: {
                    trigger: ".brand-promo",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }

        // Process Steps Staggered Animation
        if (document.querySelector(".process")) {
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: ".process",
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });
        }

        // Case Studies Staggered Animation
        if (document.querySelector(".case-studies") || document.querySelector(".cases-full")) {
            const caseTrigger = document.querySelector(".case-studies") ? ".case-studies" : ".cases-full";
            gsap.from(".case-card", {
                scrollTrigger: {
                    trigger: caseTrigger,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }

        // Service Blocks Animation
        document.querySelectorAll(".service-block").forEach((block) => {
            gsap.from(block, {
                scrollTrigger: {
                    trigger: block,
                    start: "top 80%",
                },
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Final CTA
        if (document.querySelector(".final-cta")) {
            gsap.from(".final-cta .cta-inner", {
                scrollTrigger: {
                    trigger: ".final-cta",
                    start: "top 80%",
                },
                scale: 0.95,
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        // Contact Hero Animation
        if (document.querySelector(".contact-hero h1")) {
            gsap.from(".contact-hero h1, .contact-hero p", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }

        // Contact Section Animation
        if (document.querySelector(".contact-sec")) {
            gsap.from(".contact-info-panel", {
                scrollTrigger: {
                    trigger: ".contact-sec",
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
            gsap.from(".contact-form-panel", {
                scrollTrigger: {
                    trigger: ".contact-sec",
                    start: "top 80%",
                },
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2
            });
        }
    }
});
